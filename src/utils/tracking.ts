declare global {
  interface Window {
    fbq?: any;
    ttq?: any;
    gtag?: any;
    utmify?: any;
    _utmify?: any;
  }
}

/**
 * Appends URL tracking parameters from the current page to the checkout URL.
 */
export function appendTrackingParams(checkoutUrl: string): string {
  if (!checkoutUrl) return checkoutUrl;

  // Only append to external HTTP/HTTPS checkout links
  if (!checkoutUrl.startsWith('http://') && !checkoutUrl.startsWith('https://')) {
    return checkoutUrl;
  }

  try {
    const currentParams = new URLSearchParams(window.location.search);
    const url = new URL(checkoutUrl);

    const trackingParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "src",
      "sck",
      "fbclid",
      "gclid"
    ];

    trackingParams.forEach((param) => {
      const value = currentParams.get(param);
      if (value) {
        url.searchParams.set(param, value);
      }
    });

    return url.toString();
  } catch (error) {
    console.error("Error appending tracking parameters:", error);
    return checkoutUrl;
  }
}

/**
 * Tracks the PageView event if a global tracking helper from UTMify/FB Pixel or TikTok is loaded.
 */
export function trackPageView(): void {
  if (typeof window !== 'undefined') {
    // UTMify wraps/emulates standard fbq/tracking commands
    if (typeof window.fbq === 'function') {
      try {
        window.fbq('track', 'PageView');
        console.log("UTMify/FB Pixel event tracked: PageView");
      } catch (e) {
        console.error("Error firing PageView to fbq:", e);
      }
    }
    
    if (typeof window.ttq === 'object' && typeof window.ttq.track === 'function') {
      try {
        window.ttq.track('PageView');
        console.log("TikTok Pixel event tracked: PageView");
      } catch (e) {
        console.error("Error firing PageView to ttq:", e);
      }
    }
  }
}

/**
 * Tracks the InitiateCheckout event when the purchase buttons are clicked.
 */
export function trackInitiateCheckout(): void {
  if (typeof window !== 'undefined') {
    if (typeof window.fbq === 'function') {
      try {
        window.fbq('track', 'InitiateCheckout');
        console.log("UTMify/FB Pixel event tracked: InitiateCheckout");
      } catch (e) {
        console.error("Error firing InitiateCheckout to fbq:", e);
      }
    }

    if (typeof window.ttq === 'object' && typeof window.ttq.track === 'function') {
      try {
        window.ttq.track('InitiateCheckout');
        console.log("TikTok Pixel event tracked: InitiateCheckout");
      } catch (e) {
        console.error("Error firing InitiateCheckout to ttq:", e);
      }
    }
  }
}

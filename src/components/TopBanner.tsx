export default function TopBanner() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const todayStr = `${day}/${month}/${year}`;

  return (
    <div className="bg-[#159146] text-white text-center py-2.5 px-4 text-xs sm:text-sm font-extrabold tracking-wide uppercase animate-pulse">
      🚨 A FEBRE DA COPA COMEÇOU: LOTE PROMOCIONAL ENCERRA HOJE ({todayStr})
    </div>
  );
}

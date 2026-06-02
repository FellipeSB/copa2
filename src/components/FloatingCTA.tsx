import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "./Button";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe quando rolar mais de 400px para baixo
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="floating-cta-container"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-200/60 flex justify-center items-center z-[45] md:bottom-6 md:right-6 md:left-auto md:p-0 md:bg-transparent md:border-none md:w-80"
        >
          <div className="w-full max-w-md md:max-w-none">
            <Button
              href="https://checkout.transacaoprotegida.com/0a94ad58-a8d6-4fef-b15a-dff429990b43"
              className="!py-3.5 !text-base md:!text-lg shadow-2xl font-extrabold uppercase"
            >
              Quero meu Acesso
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

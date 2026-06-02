import { useEffect, useState } from "react";
import { CheckCircle2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingNotification() {
  const [visible, setVisible] = useState(false);
  const [notifIndex, setNotifIndex] = useState(0);

  const notifications = [
    { name: "Roberta", loc: "João Pessoa - PB" },
    { name: "Julia", loc: "Manaus - AM" },
    { name: "Roberto", loc: "São Paulo - SP" },
    { name: "Camila", loc: "Rio de Janeiro - RJ" },
    { name: "Marcos", loc: "Curitiba - PR" }
  ];

  useEffect(() => {
    // Exibe após 3s, esconde após 8s (5s exibindo), e repete a cada 15s
    const show = () => {
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    };

    const intervalId = setInterval(() => {
      setNotifIndex(prev => (prev + 1) % notifications.length);
      show();
    }, 15000);
    
    // Primeiro gatilho
    const timeoutId = setTimeout(show, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [notifications.length]);

  const current = notifications[notifIndex];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-24 left-4 md:bottom-8 md:left-8 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 pr-6 flex items-center gap-4 z-50 pointer-events-none"
        >
          <div className="bg-[#eefcf2] p-2.5 rounded-full">
            <ShoppingBag className="w-5 h-5 text-[#159146]" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 leading-tight">
              {current.name}, {current.loc}
            </p>
            <p className="text-xs text-gray-500 font-medium flex items-center gap-1 mt-1">
              acabou de comprar <CheckCircle2 className="w-3.5 h-3.5 text-[#159146]" />
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

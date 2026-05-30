import { useEffect, useState } from "react";
import Button from "./Button";
import TrustBadges from "./TrustBadges";
import { Check, ShieldCheck } from "lucide-react";

export default function Offer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 14,
    seconds: 37
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="oferta" className="py-24 px-4 flex flex-col items-center bg-gray-50 border-t border-gray-200">
      <div className="bg-[#eefcf2] text-[#159146] font-bold text-xs md:text-sm px-5 py-2 rounded-full mb-8 border border-green-200 flex items-center gap-2 shadow-sm uppercase tracking-wide">
        <span className="w-2 h-2 rounded-full bg-[#159146] animate-pulse"></span>
        A febre da Copa não espera por você
      </div>
      
      <div className="flex gap-4 md:gap-5 mb-14">
        <div className="flex flex-col items-center">
          <div className="bg-white border-2 border-gray-100 text-gray-900 font-black text-5xl md:text-6xl w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl shadow-xl">
            {formatNumber(timeLeft.hours)}
          </div>
          <span className="text-[10px] md:text-xs font-bold text-gray-400 mt-3 tracking-widest uppercase">HORAS</span>
        </div>
        <div className="text-4xl md:text-5xl font-bold text-gray-300 mt-4 animate-pulse">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-white border-2 border-gray-100 text-gray-900 font-black text-5xl md:text-6xl w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl shadow-xl">
            {formatNumber(timeLeft.minutes)}
          </div>
          <span className="text-[10px] md:text-xs font-bold text-gray-400 mt-3 tracking-widest uppercase">MINUTOS</span>
        </div>
        <div className="text-4xl md:text-5xl font-bold text-gray-300 mt-4 animate-pulse">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-white border-2 border-[#159146] text-[#159146] font-black text-5xl md:text-6xl w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl shadow-xl">
            {formatNumber(timeLeft.seconds)}
          </div>
          <span className="text-[10px] md:text-xs font-bold text-gray-400 mt-3 tracking-widest uppercase">SEGUNDOS</span>
        </div>
      </div>

      <div className="text-center relative mb-10 w-full max-w-xl">
         <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent -z-10 opacity-30"></div>
         <h2 className="text-3xl md:text-5xl font-black text-gray-950 inline-block bg-gray-50 px-6">
           Sua hora de lucrar
         </h2>
      </div>

      <div className="w-full max-w-xl bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10">
        <div className="bg-gradient-to-r from-[#159146] to-green-600 text-white text-center py-5 font-black text-sm md:text-base tracking-widest uppercase relative overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-20 -skew-x-[30deg] translate-x-[-150%] animate-[shine_3s_infinite]"></div>
          🔥 LOTE PROMOCIONAL (VAGAS LIMITADAS)
        </div>
        
        <div className="p-8 md:p-12 pb-10 text-center relative">
          {/* Discount badge */}
          <div className="absolute top-8 right-8 bg-[#FFD700] text-gray-900 font-bold px-3 py-1 rounded-full text-sm transform rotate-12 shadow-lg">
            -77% OFF
          </div>

          <p className="text-gray-400 font-bold line-through mb-1 text-xl decoration-red-500/50">De R$67</p>
          <div className="flex items-center justify-center gap-2 mb-2 text-[#159146]">
            <Check className="w-5 h-5" strokeWidth={4} />
            <span className="font-extrabold text-sm uppercase tracking-wide">Preço único hoje</span>
          </div>
          <div className="flex items-start justify-center gap-1 mb-6 text-gray-900">
            <span className="text-3xl font-black mt-2 text-[#159146]">R$</span>
            <span className="text-[6rem] font-black tracking-tighter leading-none">15</span>
          </div>
          <p className="text-sm text-gray-400 font-bold mb-10 uppercase tracking-wider">Acesso Vitalício + Ilimitado</p>
          
          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 text-left mb-10 border border-gray-100">
            <p className="font-extrabold text-xs text-gray-400 mb-5 uppercase tracking-widest border-b border-gray-200 pb-3">VOCÊ ESTÁ LEVANDO AGORA:</p>
            <ul className="space-y-4">
              {[
                "Álbum Completo no Canva",
                "Layouts Menino e Menina",
                "Pack com 100+ Figurinhas",
                "Ideias Virais p/ Reels/TikTok",
                "Aulas de Edição e Venda",
                "Mockups Premium"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-[#159146]" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button href="https://checkout.transacaoprotegida.com/0a94ad58-a8d6-4fef-b15a-dff429990b43">QUERO LIBERAR MEU ACESSO AGORA</Button>
          <div className="mt-6 pb-2 opacity-80">
            <TrustBadges />
          </div>
        </div>
      </div>

      <div className="mt-12 bg-white w-full max-w-xl p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="bg-gradient-to-br from-[#159146] to-green-700 shrink-0 p-5 rounded-full text-white shadow-lg shadow-green-900/20">
          <ShieldCheck className="w-10 h-10" strokeWidth={2} />
        </div>
        <div>
          <h4 className="font-black text-2xl text-gray-900 mb-2">Risco Zero</h4>
          <p className="text-gray-500 font-medium">Você tem 7 dias. Não gostou do template? Não achou fácil? Devolvemos os seus R$15 na hora, via PIX.</p>
        </div>
      </div>
    </section>
  );
}

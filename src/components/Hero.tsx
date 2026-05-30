import Button from "./Button";
import TrustBadges from "./TrustBadges";
import { CopyCheck, Download, Edit3, TrendingUp } from "lucide-react";

export default function Hero() {
  const badges = [
    { icon: <Download className="w-4 h-4" />, text: "Acesso Imediato" },
    { icon: <Edit3 className="w-4 h-4" />, text: "Editável no Canva" },
    { icon: <CopyCheck className="w-4 h-4" />, text: "Garantia 7 Dias" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "Venda Ilimitada" },
  ];

  return (
    <section className="pt-12 pb-16 px-4 max-w-5xl mx-auto flex flex-col items-center text-center relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#159146] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="bg-[#eefcf2] text-green-800 font-extrabold text-xs md:text-sm px-5 py-2 rounded-full border border-green-200/50 mb-8 flex items-center gap-2 shadow-[0_0_15px_rgba(21,145,70,0.1)]">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        MODELO VIRAL DE ALTA CONVERSÃO
      </div>
      
      <h1 className="text-4xl md:text-[3.5rem] font-black tracking-tight text-gray-950 mb-6 leading-[1.1] max-w-4xl relative z-10">
        Lucre na Copa vendendo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#159146] to-green-500">álbuns personalizados</span> que os pais compram por impulso ⚽🔥
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl font-medium leading-relaxed relative z-10">
        Receba o projeto pronto. É só trocar a foto da criança no Canva e vender todos os dias pelo WhatsApp e Instagram. <strong>Sem precisar de experiência.</strong>
      </p>
      
      <div className="w-full relative z-10 mb-10 group perspective">
        <div className="absolute -inset-2 bg-gradient-to-r from-[#159146] to-[#FFD700] rounded-[2.5rem] opacity-30 blur-2xl group-hover:opacity-50 transition duration-500"></div>
        <div className="w-full max-w-3xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl relative border-[4px] border-white/80 bg-white transform transition-transform duration-500 hover:scale-[1.02]">
          <img 
            src="/hero.png" 
            alt="Álbum da Copa Personalizado" 
            className="w-full h-auto object-cover relative z-10" 
          />
          {/* Faux shine effect over image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] animate-[shine_4s_infinite] pointer-events-none z-20"></div>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10 relative z-10">
        {badges.map((badge, i) => (
          <div key={i} className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-gray-700 shadow-sm border border-gray-100">
            {badge.icon}
            {badge.text}
          </div>
        ))}
      </div>

      <div className="w-full max-w-xl mx-auto relative z-10">
        <div className="mt-4">
          <TrustBadges />
        </div>
      </div>
    </section>
  );
}

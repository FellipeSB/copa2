import { motion } from "motion/react";

export default function SocialProof() {
  const images = [
    "/depoimento-wpp-1-B7tPvcow.webp",
    "/depoimento-wpp-2-D638gaXb.webp",
    "/depoimento-wpp-3-Ba5lAUwi.webp",
  ];

  const scrollImages = [...images, ...images, ...images];

  return (
    <section className="py-24 bg-gray-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-gray-950 to-gray-950"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-gray-900 text-green-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-6 border border-gray-800">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Todo mundo está vendendo
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 px-4 leading-tight">
          O celular dessas pessoas <br className="hidden md:block"/> 
          não para de apitar <span className="text-[#FFD700]">vendas</span>
        </h2>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16 px-4">
          Enquanto alguns estão em dúvida, outras alunas já estão pegando de 10 a 20 encomendas por semana.
        </p>
        
        <div 
          className="relative w-full overflow-hidden pb-8" 
          style={{ 
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          <motion.div 
            className="flex gap-6 w-max px-6"
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 25 
            }}
          >
            {scrollImages.map((src, idx) => (
              <div key={idx} className="shrink-0 w-[260px] md:w-[300px]">
                <img 
                  src={src} 
                  alt={`Depoimento ${(idx % images.length) + 1}`} 
                  loading="lazy"
                  width={300}
                  height={533}
                  className="w-full rounded-[2rem] shadow-xl border-[6px] border-white object-cover aspect-[9/16]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

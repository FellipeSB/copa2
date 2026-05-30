import { CheckCircle2, Gift } from 'lucide-react';
import Button from './Button';

export default function WhatYouGet() {
  const deliverables = [
    "Template Premium do Álbum Editável (Capa + Miolo)",
    "Versão com tema Masculino e Feminino",
    "Kit com +100 Figurinhas exclusivas da Copa",
    "Mockups de alta conversão para divulgar no Instagram",
    "Ideias prontas de roteiro para gravar Reels e TikTok",
    "Legendas que vendem para copiar e colar",
    "Pack de Ícones e Elementos extras no Canva",
    "Aulas passo a passo para iniciantes"
  ];

  return (
    <section className="py-24 bg-[#159146] text-white relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://placehold.co/800x800/0f6b33/0f6b33')] bg-cover opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#FFD700] text-gray-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-6">
            <Gift className="w-4 h-4" />
            Entregável Absurdo
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Tudo o que você precisa para começar a <span className="text-[#FFD700]">vender HOJE</span>
          </h2>
          
          <p className="text-green-100 text-lg mb-8 leading-relaxed max-w-lg">
            Nós facilitamos o seu trabalho ao máximo. Além do melhor template do mercado, você recebe as ferramentas para <strong>divulgar e vender como profissional</strong>.
          </p>

          <ul className="space-y-4 mb-10">
            {deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FFD700] shrink-0 mt-0.5" />
                <span className="font-medium text-green-50 text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href="#oferta" className="!bg-white !text-gray-950 !hover:bg-gray-100 shadow-none border-b-4 border-gray-300">
              QUERO O ACESSO COMPLETO AGORA
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white/10 p-4 border border-white/20 rounded-[2.5rem] backdrop-blur-md sticky top-8">
            <img 
              src="/hero.png" 
              alt="Kit Completo" 
              loading="lazy"
              className="w-full h-auto rounded-[2rem] shadow-2xl" 
            />
            
            <div className="absolute -bottom-6 -left-6 bg-[#FFD700] text-gray-900 rounded-3xl p-6 shadow-2xl border-4 border-white rotate-[-3deg]">
              <p className="text-sm font-bold uppercase tracking-wide">Valor Real</p>
              <p className="text-4xl font-black line-through opacity-80">R$ 297</p>
              <p className="text-sm font-bold mt-1">Lote Ouro Habilitado</p>
            </div>
          </div>
          
          <div className="mt-12 md:hidden">
            <Button href="#oferta" className="!bg-white !text-gray-950 !hover:bg-gray-100 shadow-none border-b-4 border-gray-300">
              QUERO O ACESSO COMPLETO AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

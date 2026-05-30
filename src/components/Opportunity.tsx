import { Clock, AlertTriangle } from 'lucide-react';
import Button from './Button';

export default function Opportunity() {
  return (
    <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-gray-950 to-gray-950"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-gray-900/50 border border-gray-800 rounded-[3rem] p-8 md:p-16 text-center backdrop-blur-sm relative shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-gray-900 px-6 py-2 rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.4)] whitespace-nowrap w-max">
            <AlertTriangle className="w-5 h-5 fill-black text-[#FFD700] shrink-0" />
            A TENDÊNCIA ESTÁ PASSANDO
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6 mt-4 leading-tight">
            A Copa do Mundo acontece <br />
            apenas <span className="text-[#FFD700] underline decoration-wavy decoration-[#159146]">a cada 4 anos</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            <p>
              Esse é um produto <strong>sazonal altamente lucrativo</strong>. As pessoas estão desesperadas por produtos com o tema da Copa. O "boom" de vendas é <span className="text-white font-bold">agora</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex justify-center mb-3">
                <Clock className="w-8 h-8 text-[#159146]" />
              </div>
              <h4 className="font-bold text-white mb-2">Timing Perfeito</h4>
              <p className="text-sm text-gray-400">Quem sai na frente domina o mercado e vende mais caro.</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="font-black text-3xl text-[#FFD700] mb-2">+300%</div>
              <h4 className="font-bold text-white mb-2">Busca Exponencial</h4>
              <p className="text-sm text-gray-400">O pico de buscas por personalizados já começou nas redes.</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex justify-center mb-3">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h4 className="font-bold text-white mb-2">Não perca o hype</h4>
              <p className="text-sm text-gray-400">Ficar para trás agora significa rasgar lucro garantido.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

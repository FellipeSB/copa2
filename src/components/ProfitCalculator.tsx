import { Calculator, ArrowRightCircle } from 'lucide-react';
import Button from './Button';

export default function ProfitCalculator() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
            <Calculator className="w-8 h-8 text-[#159146]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            É impossível você não <br className="hidden md:block" />
            ter lucro com esse pack
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A média de venda desse álbum customizado (físico ou PDF pronto) varia de <strong>R$ 40 a R$ 60</strong>. Veja o seu potencial de lucro investindo APENAS R$15 hoje:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white border rounded-3xl p-8 relative shadow-lg overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-200"></div>
            <div>
              <p className="text-gray-500 font-bold mb-2 uppercase tracking-wide text-xs">Venda Mínima</p>
              <h3 className="text-5xl font-black text-gray-900 mb-2">1</h3>
              <p className="text-gray-900 font-medium mb-6">álbum vendido</p>
            </div>
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Você fatura aprox.</p>
              <p className="text-3xl font-black text-[#159146]">R$ 45,00</p>
              <div className="mt-3 inline-flex bg-green-50 text-[#159146] font-bold text-xs px-3 py-1 rounded-full">
                Investimento Recuperado (2x)
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-2 border-[#159146] rounded-3xl p-8 relative shadow-2xl overflow-hidden flex flex-col justify-between transform md:-translate-y-4">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#159146]"></div>
            <div className="absolute top-4 right-4 bg-[#FFD700] text-gray-900 text-[10px] font-black uppercase px-2 py-1 rounded-md">
              Mais comum
            </div>
            <div>
              <p className="text-gray-500 font-bold mb-2 uppercase tracking-wide text-xs">Fim de Semana</p>
              <h3 className="text-5xl font-black text-gray-900 mb-2">5</h3>
              <p className="text-gray-900 font-medium mb-6">álbuns vendidos</p>
            </div>
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Você fatura aprox.</p>
              <p className="text-4xl font-black text-[#159146]">R$ 225,00</p>
              <div className="mt-3 inline-flex bg-green-50 text-[#159146] font-bold text-xs px-3 py-1 rounded-full">
                Lucro Limpo na Conta
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border rounded-3xl p-8 relative shadow-lg overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-200"></div>
            <div>
              <p className="text-gray-500 font-bold mb-2 uppercase tracking-wide text-xs">Escala no Insta</p>
              <h3 className="text-5xl font-black text-gray-900 mb-2">15</h3>
              <p className="text-gray-900 font-medium mb-6">álbuns vendidos</p>
            </div>
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Você fatura aprox.</p>
              <p className="text-3xl font-black text-[#159146]">R$ 675,00</p>
              <div className="mt-3 inline-flex bg-green-50 text-[#159146] font-bold text-xs px-3 py-1 rounded-full">
                Renda Extra Sólida
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto text-center bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
          <p className="text-gray-800 font-medium mb-4 flex items-center justify-center gap-2">
            <ArrowRightCircle className="w-5 h-5 text-yellow-600" />
            Um cliente paga seu acesso hoje. O resto é puro lucro.
          </p>
          <Button href="https://checkout.transacaoprotegida.com/0a94ad58-a8d6-4fef-b15a-dff429990b43">LIBERAR MEU ACESSO E COMEÇAR A LUCRAR</Button>
        </div>
      </div>
    </section>
  );
}

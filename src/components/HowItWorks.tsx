import { MousePointerClick, ImagePlus, UserCircle, SendToBack } from 'lucide-react';
import Button from './Button';

export default function HowItWorks() {
  const steps = [
    {
      icon: <MousePointerClick className="w-8 h-8 text-white" />,
      title: "1. Acesse",
      desc: "Você recebe o link e abre o projeto direto no seu Canva (funciona na versão Grátis)."
    },
    {
      icon: <ImagePlus className="w-8 h-8 text-white" />,
      title: "2. Personalize",
      desc: "Arraste a foto da criança para dentro dos quadros demarcados. Leva segundos."
    },
    {
      icon: <UserCircle className="w-8 h-8 text-white" />,
      title: "3. Edite",
      desc: "Altere o nome e alguns detalhes básicos se o cliente pedir. Tudo é 100% editável."
    },
    {
      icon: <SendToBack className="w-8 h-8 text-white" />,
      title: "4. Exporte e Venda",
      desc: "Baixe o PDF em alta qualidade, pronta para imprimir na sua impressora ou gráfica."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Qualquer pessoa consegue.<br className="hidden md:block" /> 
            <span className="text-[#159146]">Acredite, é extremo de tão fácil.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Você não precisa de conhecimentos avançados em design, não precisa do Canva Pro e pode fazer tudo pelo celular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-16 mt-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] w-[80%] h-1 bg-gray-100 -z-10"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative p-6 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-green-900/5 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#159146] to-green-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-900/20 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#159146] to-[#FFD700] rounded-[1.3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <Button href="https://checkout.transacaoprotegida.com/0a94ad58-a8d6-4fef-b15a-dff429990b43" className="relative">MUITO FÁCIL, QUERO GARANTIR O MEU</Button>
        </div>
      </div>
    </section>
  );
}

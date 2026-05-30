import { Heart, Sparkles, TrendingUp, Users } from 'lucide-react';

export default function WhyItSells() {
  const reasons = [
    {
      title: "Apelo Emocional",
      description: "Pais compram qualquer coisa que coloque o filho como protagonista. É mais que um produto, é uma lembrança afetiva.",
      icon: <Heart className="w-8 h-8 text-[#159146]" />,
      bg: "bg-green-50"
    },
    {
      title: "Produto Nostálgico",
      description: "A Copa traz memórias de infância. Unir a magia do álbum de figurinhas com a foto da criança converte por impulso.",
      icon: <Sparkles className="w-8 h-8 text-[#FFD700]" />,
      bg: "bg-yellow-50"
    },
    {
      title: "Alta Viralização",
      description: "As mães filmam as crianças abrindo os pacotinhos e postam no Instagram. Cada cliente traz 3 novos clientes.",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-50"
    },
    {
      title: "Tendência de Mercado",
      description: "Durante a Copa, o assunto é único. Produtos temáticos vendem 10x mais fácil e rápido que o catálogo normal.",
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      bg: "bg-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#159146] font-bold tracking-wider uppercase text-sm mb-2 block">O Segredo Revelado</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Por que esse álbum vende <br className="hidden md:block" />
            como água <span className="text-[#159146]">todos os dias?</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Não é sorte, é psicologia de consumo aplicada. Veja os gatilhos que fazem os clientes fecharem na hora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white border rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center mb-6 ${reason.bg}`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

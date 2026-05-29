import { ShoppingBag, MessageCircle, Instagram, Facebook } from 'lucide-react';
import Button from './Button';

export default function WhereToSell() {
  const platforms = [
    {
      name: "WhatsApp",
      desc: "Venda para amigas, grupos de escola, condomínio e família. É o mais rápido.",
      icon: <MessageCircle className="w-10 h-10 text-white" />,
      color: "bg-green-500"
    },
    {
      name: "Instagram",
      desc: "As mães amam mostrar os filhos. Use os Reels prontos e alcance milhares.",
      icon: <Instagram className="w-10 h-10 text-white" />,
      color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500"
    },
    {
      name: "Marketplace / Shopee",
      desc: "Excelente para vender a versão impressa e despachar. Margem enorme.",
      icon: <ShoppingBag className="w-10 h-10 text-white" />,
      color: "bg-orange-500"
    },
    {
      name: "Grupos de Facebook",
      desc: "Publique nos grupos de mães da sua cidade e veja os pedidos choverem.",
      icon: <Facebook className="w-10 h-10 text-white" />,
      color: "bg-blue-600"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
          Aonde eu vou vender?
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16">
          Não precisa ser uma expert em marketing comercial. Os clientes estão no seu celular agora mesmo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((plat, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${plat.color} shadow-lg`}>
                {plat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{plat.name}</h3>
              <p className="text-gray-500 text-sm">{plat.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto">
          <Button href="https://checkout.transacaoprotegida.com/0a94ad58-a8d6-4fef-b15a-dff429990b43">PERFEITO, VOU VENDER ASSIM</Button>
        </div>
      </div>
    </section>
  );
}

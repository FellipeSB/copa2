import Button from "./Button";

export default function FAQ() {
  const faqs = [
    { q: "Preciso saber design?", a: "Absolutamente não! O template já vem 100% pronto. Seu único trabalho será arrastar a foto da criança para dentro do quadro e mudar o nome. Qualquer um consegue." },
    { q: "Funciona no celular?", a: "Sim, perfeitamente. Você pode atender os clientes no WhatsApp, abrir o aplicativo do Canva no celular, trocar a foto, salvar e enviar na mesma hora." },
    { q: "Preciso de Canva Pro pago?", a: "Não! Todo o projeto foi construído usando fontes e elementos gratuitos. Você não precisará pagar nenhuma assinatura extra no Canva." },
    { q: "Posso vender ilimitado?", a: "Sim! Você paga os R$15 apenas uma vez e pode revender álbuns personalizados quantas mil vezes quiser. O lucro é 100% seu para sempre." },
    { q: "Preciso imprimir em casa?", a: "Fica a seu critério! Você pode vender apenas a arte digital em PDF (mais lucro, zero trabalho físico) ou imprimir na sua casa/gráfica e vender o produto físico mais caro." },
    { q: "Serve em cidade pequena?", a: "As cidades pequenas são onde ele mais vende, porque não há concorrência. Você pode dominar os grupos de Facebook e WhatsApp da sua região rapidamente." },
    { q: "Recebo na hora?", a: "Sim! Pagando via PIX ou Cartão, o acesso chega no seu e-mail em menos de 1 minuto e você já pode começar a editar hoje." },
  ];

  return (
    <section className="py-24 px-4 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center flex items-center justify-center gap-3">
          Ainda com dúvidas?
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200">
              <h4 className="font-extrabold text-gray-900 mb-3 md:text-lg flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#159146] text-white flex items-center justify-center shrink-0 text-sm">?</span>
                {faq.q}
              </h4>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-9">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-md mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#159146] to-[#FFD700] rounded-[1.3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <Button href="https://checkout.transacaoprotegida.com/0a94ad58-a8d6-4fef-b15a-dff429990b43">
            QUERO LIBERAR MEU ACESSO AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}

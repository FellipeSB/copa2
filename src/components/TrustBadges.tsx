import { Download, Lock, ShieldCheck } from "lucide-react";

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] md:text-sm text-gray-600 mt-4">
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <Lock className="w-4 h-4 text-[#159146]" />
        <span>Pagamento 100% seguro</span>
      </div>
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <Download className="w-4 h-4 text-[#159146]" />
        <span>Acesso imediato</span>
      </div>
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <ShieldCheck className="w-4 h-4 text-[#159146]" />
        <span>Garantia de 7 dias</span>
      </div>
    </div>
  );
}

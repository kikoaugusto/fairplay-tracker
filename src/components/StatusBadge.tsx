import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SiteStatus } from "@/types/site";

interface StatusBadgeProps {
  status: SiteStatus;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusConfig = (status: SiteStatus) => {
    switch (status) {
      case "active":
        return { label: "Ativo", className: "bg-green-500 hover:bg-green-600" };
      case "blocked":
        return { label: "Bloqueado", className: "bg-red-500 hover:bg-red-600" };
      case "under_investigation":
        return { label: "Em Análise", className: "bg-yellow-500 hover:bg-yellow-600" };
      case "pending":
        return { label: "Pendente", className: "bg-blue-500 hover:bg-blue-600" };
      case "taken_down":
        return { label: "Removido", className: "bg-gray-500 hover:bg-gray-600" };
      default:
        return { label: status, className: "bg-gray-500 hover:bg-gray-600" };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Badge className={cn("text-white", config.className)}>
      {config.label}
    </Badge>
  );
};

export default StatusBadge;
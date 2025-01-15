import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "active":
        return { label: "Active", className: "bg-green-500 hover:bg-green-600" };
      case "blocked":
        return { label: "Blocked", className: "bg-red-500 hover:bg-red-600" };
      case "under-review":
        return { label: "Under Review", className: "bg-yellow-500 hover:bg-yellow-600" };
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
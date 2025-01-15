import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Site, SiteStatus } from "@/types/site";
import { toast } from "sonner";

interface StatusChangeDialogProps {
  site: Site;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStatusChange: (siteId: number, newStatus: SiteStatus, comment: string) => void;
}

const StatusChangeDialog = ({
  site,
  open,
  onOpenChange,
  onStatusChange,
}: StatusChangeDialogProps) => {
  const [newStatus, setNewStatus] = useState<SiteStatus>(site.status);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!comment.trim()) {
      toast.error("Por favor, adicione um comentário explicando a mudança de status.");
      return;
    }
    onStatusChange(site.id, newStatus, comment);
    setComment("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Alterar Status do Site</DialogTitle>
          <DialogDescription>
            Altere o status de {site.domain} e adicione um comentário explicativo
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Select value={newStatus} onValueChange={(value) => setNewStatus(value as SiteStatus)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o novo status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="under_investigation">Em Investigação</SelectItem>
                <SelectItem value="enforcement_action">Em Execução</SelectItem>
                <SelectItem value="taken_down">Removido</SelectItem>
                <SelectItem value="dismissed">Descartado</SelectItem>
                <SelectItem value="reopened">Reaberto</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Adicione um comentário sobre a mudança de status..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit}>Salvar Alterações</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StatusChangeDialog;
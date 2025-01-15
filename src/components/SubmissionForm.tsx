import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SubmissionForm = () => {
  const { toast } = useToast();
  const [domain, setDomain] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Submitted:", { domain, reason });
    
    toast({
      title: "Denúncia Enviada",
      description: "Obrigado por ajudar a manter um ambiente de apostas seguro.",
    });

    setDomain("");
    setReason("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Denunciar Site Suspeito</CardTitle>
        <CardDescription>
          Ajude-nos a identificar operadores sem licença ou fraudulentos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="domain" className="text-sm font-medium">
              Domínio do Site
            </label>
            <Input
              id="domain"
              type="text"
              placeholder="ex: site-suspeito.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="reason" className="text-sm font-medium">
              Motivo da Denúncia
            </label>
            <Textarea
              id="reason"
              placeholder="Por favor, descreva por que você acha que este site é suspeito..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Enviar Denúncia
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SubmissionForm;
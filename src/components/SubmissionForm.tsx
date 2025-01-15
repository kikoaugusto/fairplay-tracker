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
    
    // Here you would typically send this to your backend
    console.log("Submitted:", { domain, reason });
    
    toast({
      title: "Report Submitted",
      description: "Thank you for helping us maintain a safe betting environment.",
    });

    setDomain("");
    setReason("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report a Suspicious Site</CardTitle>
        <CardDescription>
          Help us identify unlicensed or fraudulent betting operators
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="domain" className="text-sm font-medium">
              Website Domain
            </label>
            <Input
              id="domain"
              type="text"
              placeholder="e.g., suspicious-site.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="reason" className="text-sm font-medium">
              Reason for Report
            </label>
            <Textarea
              id="reason"
              placeholder="Please describe why you think this site is suspicious..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Report
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SubmissionForm;
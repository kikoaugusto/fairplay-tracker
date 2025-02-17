import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SiteList from "./SiteList";
import SearchFilter from "./SearchFilter";
import { useState } from "react";
import { Site } from "@/types/site";

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Temporary data for demonstration
  const suspiciousSites: Site[] = [
    { 
      id: 1, 
      domain: "suspicious-site.com", 
      reason: "Sem licença válida", 
      status: "pending",
      dateReported: "2024-01-15",
      lastUpdated: "2024-01-15"
    },
    { 
      id: 2, 
      domain: "fake-betting.net", 
      reason: "Múltiplas denúncias de fraude", 
      status: "under_investigation",
      dateReported: "2024-01-14",
      lastUpdated: "2024-01-16"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Painel Administrativo</h1>
        <Button variant="outline" onClick={onLogout}>
          Sair
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Sites Suspeitos</CardTitle>
          <CardDescription>
            Analise e gerencie sites denunciados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <SiteList
            sites={suspiciousSites}
            type="suspicious"
            searchTerm={searchTerm}
            activeFilter={activeFilter}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
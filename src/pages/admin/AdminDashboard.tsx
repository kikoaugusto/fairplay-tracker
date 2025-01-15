import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SiteList from "@/components/SiteList";
import SearchFilter from "@/components/SearchFilter";
import { useState } from "react";
import { Site } from "@/types/site";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      lastUpdated: "2024-01-15",
      priority: "high",
      assignedTo: "John Doe",
      comments: [
        {
          id: 1,
          content: "Initial review needed",
          createdAt: "2024-01-15T10:00:00Z",
          createdBy: "admin",
          siteId: 1
        }
      ]
    },
    { 
      id: 2, 
      domain: "fake-betting.net", 
      reason: "Múltiplas denúncias de fraude", 
      status: "under_investigation",
      dateReported: "2024-01-14",
      lastUpdated: "2024-01-16",
      priority: "medium",
      assignedTo: "Jane Smith",
      comments: []
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

      <Tabs defaultValue="suspicious" className="space-y-4">
        <TabsList>
          <TabsTrigger value="suspicious">Sites Suspeitos</TabsTrigger>
          <TabsTrigger value="stats">Estatísticas</TabsTrigger>
        </TabsList>

        <TabsContent value="suspicious">
          <Card>
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
        </TabsContent>

        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas</CardTitle>
              <CardDescription>
                Visão geral das denúncias e ações tomadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pendentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{suspiciousSites.filter(site => site.status === "pending").length}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Em Investigação</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{suspiciousSites.filter(site => site.status === "under_investigation").length}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Resolvidos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{suspiciousSites.filter(site => ["taken_down", "dismissed"].includes(site.status)).length}</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SiteList from "@/components/SiteList";
import SubmissionForm from "@/components/SubmissionForm";
import SearchFilter from "@/components/SearchFilter";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Temporary data for demonstration
  const whitelistedSites = [
    { id: 1, domain: "bet365.bet.br", operator: "Bet365", status: "active", licenseNumber: "BR001" },
    { id: 2, domain: "sportingbet.bet.br", operator: "Sportingbet", status: "active", licenseNumber: "BR002" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Registro de Casas de Apostas do Brasil
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Acompanhe operadores licenciados e reporte sites suspeitos
          </p>
        </div>

        <Tabs defaultValue="whitelist" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="whitelist">Operadores Licenciados</TabsTrigger>
            <TabsTrigger value="report">Reportar Site</TabsTrigger>
          </TabsList>

          <SearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <TabsContent value="whitelist">
            <SiteList
              sites={whitelistedSites}
              type="whitelist"
              searchTerm={searchTerm}
              activeFilter={activeFilter}
            />
          </TabsContent>

          <TabsContent value="report">
            <SubmissionForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
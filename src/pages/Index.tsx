import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SiteList from "@/components/SiteList";
import SubmissionForm from "@/components/SubmissionForm";
import SearchFilter from "@/components/SearchFilter";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";

const Index = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Temporary data for demonstration
  const whitelistedSites = [
    { id: 1, domain: "bet365.bet.br", operator: "Bet365", status: "active", licenseNumber: "BR001" },
    { id: 2, domain: "sportingbet.bet.br", operator: "Sportingbet", status: "active", licenseNumber: "BR002" },
  ];

  const blacklistedSites = [
    { id: 1, domain: "fake-bets.com", reason: "Unlicensed operator", status: "blocked" },
    { id: 2, domain: "scam-betting.net", reason: "Fraudulent activities", status: "under-review" },
  ];

  if (isAdmin) {
    return <AdminDashboard onLogout={() => setIsAdmin(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Brazilian Sportsbook Registry
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Track licensed operators and report suspicious betting sites
          </p>
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              className="text-primary hover:text-primary-foreground"
              onClick={() => setIsAdmin(true)}
            >
              Admin Login
            </Button>
          </div>
        </div>

        <Tabs defaultValue="whitelist" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="whitelist">Licensed Operators</TabsTrigger>
            <TabsTrigger value="blacklist">Suspicious Sites</TabsTrigger>
            <TabsTrigger value="report">Report a Site</TabsTrigger>
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

          <TabsContent value="blacklist">
            <SiteList
              sites={blacklistedSites}
              type="blacklist"
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
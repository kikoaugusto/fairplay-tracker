import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SiteList from "./SiteList";
import SearchFilter from "./SearchFilter";
import { useState } from "react";

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Temporary data for demonstration
  const pendingSites = [
    { id: 1, domain: "suspicious-site.com", reason: "User reported", status: "pending" },
    { id: 2, domain: "fake-betting.net", reason: "Multiple reports", status: "pending" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={onLogout}>
          Logout
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Pending Reviews</CardTitle>
          <CardDescription>
            Review and manage reported sites
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
            sites={pendingSites}
            type="blacklist"
            searchTerm={searchTerm}
            activeFilter={activeFilter}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
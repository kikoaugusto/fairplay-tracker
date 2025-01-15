import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import StatusBadge from "./StatusBadge";
import { Site, SiteType, SiteStatus } from "@/types/site";
import { useState } from "react";
import StatusChangeDialog from "./StatusChangeDialog";
import { toast } from "sonner";

interface SiteListProps {
  sites: Site[];
  type: SiteType;
  searchTerm: string;
  activeFilter: string;
}

const SiteList = ({ sites, type, searchTerm, activeFilter }: SiteListProps) => {
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredSites = sites.filter((site) => {
    const matchesSearch = site.domain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || site.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleStatusChange = (siteId: number, newStatus: SiteStatus, comment: string) => {
    console.log("Status change:", { siteId, newStatus, comment });
    // In a real application, this would make an API call to update the status
    toast.success("Status atualizado com sucesso!");
  };

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Domínio</TableHead>
              {type === "whitelist" && (
                <>
                  <TableHead>Operador</TableHead>
                  <TableHead>Licença</TableHead>
                </>
              )}
              {(type === "blacklist" || type === "suspicious") && <TableHead>Motivo</TableHead>}
              <TableHead>Status</TableHead>
              {type === "suspicious" && (
                <>
                  <TableHead>Data Reportada</TableHead>
                  <TableHead>Última Atualização</TableHead>
                  <TableHead>Ações</TableHead>
                </>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSites.map((site) => (
              <TableRow key={site.id}>
                <TableCell className="font-medium">{site.domain}</TableCell>
                {type === "whitelist" && (
                  <>
                    <TableCell>{site.operator}</TableCell>
                    <TableCell>{site.licenseNumber}</TableCell>
                  </>
                )}
                {(type === "blacklist" || type === "suspicious") && <TableCell>{site.reason}</TableCell>}
                <TableCell>
                  <StatusBadge status={site.status} />
                </TableCell>
                {type === "suspicious" && (
                  <>
                    <TableCell>{site.dateReported}</TableCell>
                    <TableCell>{site.lastUpdated}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedSite(site);
                          setDialogOpen(true);
                        }}
                      >
                        Alterar Status
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {selectedSite && (
        <StatusChangeDialog
          site={selectedSite}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          onStatusChange={handleStatusChange}
        />
      )}
    </>
  );
};

export default SiteList;
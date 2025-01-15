import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatusBadge from "./StatusBadge";
import { Site, SiteType } from "@/types/site";

interface SiteListProps {
  sites: Site[];
  type: SiteType;
  searchTerm: string;
  activeFilter: string;
}

const SiteList = ({ sites, type, searchTerm, activeFilter }: SiteListProps) => {
  const filteredSites = sites.filter((site) => {
    const matchesSearch = site.domain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || site.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
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
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SiteList;
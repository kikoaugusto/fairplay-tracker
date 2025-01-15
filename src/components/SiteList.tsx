import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatusBadge from "./StatusBadge";

interface Site {
  id: number;
  domain: string;
  status: string;
  operator?: string;
  licenseNumber?: string;
  reason?: string;
}

interface SiteListProps {
  sites: Site[];
  type: "whitelist" | "blacklist";
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
            <TableHead>Domain</TableHead>
            {type === "whitelist" && (
              <>
                <TableHead>Operator</TableHead>
                <TableHead>License</TableHead>
              </>
            )}
            {type === "blacklist" && <TableHead>Reason</TableHead>}
            <TableHead>Status</TableHead>
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
              {type === "blacklist" && <TableCell>{site.reason}</TableCell>}
              <TableCell>
                <StatusBadge status={site.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SiteList;
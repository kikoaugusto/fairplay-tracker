import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const SearchFilter = ({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter,
}: SearchFilterProps) => {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1">
        <Input
          type="search"
          placeholder="Buscar domínios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Select value={activeFilter} onValueChange={setActiveFilter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filtrar por status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos os Status</SelectItem>
          <SelectItem value="active">Ativo</SelectItem>
          <SelectItem value="blocked">Bloqueado</SelectItem>
          <SelectItem value="under-review">Em Análise</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchFilter;
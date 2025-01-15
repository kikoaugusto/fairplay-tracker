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
          placeholder="Search domains..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Select value={activeFilter} onValueChange={setActiveFilter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="blocked">Blocked</SelectItem>
          <SelectItem value="under-review">Under Review</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchFilter;
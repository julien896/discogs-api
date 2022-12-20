import { Input } from "antd";
import { PageBody } from "../../../layout/PageBody";

interface Props {
    handleSearch: (v: string) => void;
    handleSubmit: () => void;
    isLoading: boolean;
}

export const SearchBar: React.FC<Props> = ({
  handleSearch,
  handleSubmit,
  isLoading
}: Props) => {
  const { Search } = Input
  return ( 
    <PageBody.Container className="bar-container">
      <Search 
        loading={isLoading}
        placeholder="Search by artist or album" 
        onSearch={handleSubmit} 
        onChange={(e) => handleSearch(e.target.value)}
        enterButton 
      />
    </PageBody.Container>
  );
}
 
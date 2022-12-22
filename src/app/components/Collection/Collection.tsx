import { PageBody } from "../../../layout/PageBody"
import { IFavourite } from "../../models/Favourite";

interface Props {
  collection: IFavourite[];
}

export const Collection: React.FC<Props> = ({
  collection
}: Props) => {
  return ( 
    <PageBody.Container className="collection-container">
      <h2>
        My Collection
      </h2>
      {collection?.map((record: IFavourite) => (
        <span key={record.id}>
          {record?.basic_information?.title}
        </span>
      ))}
    </PageBody.Container>
  );
}

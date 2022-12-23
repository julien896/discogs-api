import { Avatar, List } from "antd";
import { PageBody } from "../../../layout/PageBody"
import { IFavourite } from "../../models/Favourite";
import { IRecordDetails } from "../../models/RecordDetails";
import { Record } from "../Record/Record";

interface Props {
  collection: IFavourite[];
  findOneLoading: boolean;
  handleSelect: (id: number) => void;
  showModal: () => void;
  selectedRecord: IRecordDetails | null;
  isModalOpen: boolean;
}

export const Collection: React.FC<Props> = ({
  collection,
  findOneLoading,
  handleSelect,
  showModal,
  selectedRecord,
  isModalOpen
}: Props) => {
  return ( 
    <PageBody.Container className="collection-container">
      <h2>
        My Collection
      </h2>
      <List
        itemLayout="horizontal"
        dataSource={collection}
        renderItem={(record: IFavourite) => (
          <List.Item onClick={() => handleSelect(record.id)}>
            <List.Item.Meta
              avatar={
                <Avatar 
                  src={record?.basic_information?.thumb || record?.basic_information?.cover_image} 
                />
              }
              title={<a href={record?.basic_information?.uri}>{record?.basic_information?.title}</a>}
              description={record.basic_information.artists[0]?.name}
            />
          </List.Item>
        )}
      />
      <Record 
        isLoading={findOneLoading}
        showModal={showModal}
        isModalOpen={isModalOpen}
        selectedRecord={selectedRecord}
      />
    </PageBody.Container>
  );
}

import React from 'react'
import { Card } from 'antd'
import { IRecord } from '../../models/Record'
import { PageBody } from '../../../layout/PageBody';
import { Record } from '../Record/Record';

interface Props {
    records: IRecord[];
    handleSelect: (id: number) => void;
    showModal: () => void;
    selectedRecord: IRecord | null;
    isModalOpen: boolean;
}

export const RecordList: React.FC<Props> = ({
  records,
  handleSelect,
  showModal,
  selectedRecord,
  isModalOpen
}: Props) => {
  const { Meta } = Card
  return ( 
    <PageBody.Container className='list-container'>
      {records?.map((record: IRecord) => (
        <Card
          key={record.id}
          onClick={() => handleSelect(record.id)}
          hoverable
          className='card'
          style={{ width: 200 }}
          cover={<img alt="example" src={record.cover_image} />}
        >
          <Meta title={record?.title} description={record?.year} />
        </Card>
      ))}
      <Record 
        showModal={showModal}
        isModalOpen={isModalOpen}
        selectedRecord={selectedRecord}
      />
    </PageBody.Container>
  );
}
 

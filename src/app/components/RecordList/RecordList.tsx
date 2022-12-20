import React from 'react'
import { Card } from 'antd'
import { IRecord } from '../../models/Record'
import { PageBody } from '../../../layout/PageBody';

interface Props {
    records: IRecord[]
}

export const RecordList: React.FC<Props> = ({
  records
}: Props) => {
  const { Meta } = Card
  return ( 
    <PageBody.Container className='list-container'>
      {records?.map((record: IRecord) => (
        <Card
          key={record.id}
          hoverable
          className='card'
          style={{ width: 200 }}
          cover={<img alt="example" src={record.cover_image} />}
        >
          <Meta title={record?.title} description={record?.year} />
        </Card>
      ))}
    </PageBody.Container>
  );
}
 

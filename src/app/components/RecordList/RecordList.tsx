import React, { Dispatch, SetStateAction } from 'react'
import { Badge, Button, Card, Pagination } from 'antd'
import { IRecord } from '../../models/Record'
import { PageBody } from '../../../layout/PageBody';
import { Record } from '../Record/Record';
import { useState } from 'react';

import default_release from '../../../assets/default_release.png'

interface Props {
    records: IRecord[];
    handleSelect: (id: number) => void;
    showModal: () => void;
    selectedRecord: IRecord | null;
    isModalOpen: boolean;
    addRelease: (id:number) => void;
    pagination: any;
    handleSubmit: (page:number) => void;
}

export const RecordList: React.FC<Props> = ({
  records,
  handleSelect,
  showModal,
  selectedRecord,
  isModalOpen,
  addRelease,
  pagination,
  handleSubmit,
}: Props) => {
  const { Meta } = Card

  const [mouseOver, setMouseOver] = useState({
    hover: false,
    id: 0
  })

  const { hover, id } = mouseOver

  return ( 
    <div className='list-container'>
      <PageBody.Container className='list'>
        {records?.map((record: IRecord) => (
          <div 
            className='card-container'
            key={record.id}
            onMouseEnter={() => setMouseOver({ hover: true, id: record.id })}
            onMouseLeave={() => setMouseOver({ hover: false, id: 0 })}
          >
            <Badge.Ribbon 
              style={{ display: hover && id === record.id ? 'block' : 'none'}}
              text={
                <Button onClick={() => addRelease(record.id)}>
                Add to your collection
                </Button>
              }
            >
              <Card
                onClick={() => handleSelect(record.id)}
                className='card'
                style={{ width: 200 }}
                cover={
                  <img 
                    alt="example" 
                    src={
                      record.cover_image.split('.').pop() === 'gif' ? 
                        default_release : 
                        record.cover_image
                    } 
                  />
                }
              >
                <Meta 
                  title={record?.title} 
                  description={
                    <>
                      <span>{record?.year}</span>
                      <span>{record?.country}</span>
                    </>
                  } 
                />
              </Card>
            </Badge.Ribbon>
          </div>
        ))}

        <Record 
          showModal={showModal}
          isModalOpen={isModalOpen}
          selectedRecord={selectedRecord}
        />
      </PageBody.Container>
      {records.length > 0 &&
      <Pagination
        responsive
        showSizeChanger={false}
        current={pagination?.page}
        defaultPageSize={pagination?.page_size}
        onChange={page => {
          handleSubmit(page)
        }}
        total={Math.round(pagination?.items / 2)} 
      />}
    </div>
  );
}
 

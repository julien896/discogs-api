import { Modal } from 'antd';
import * as React from 'react';
import { IRecord } from '../../models/Record';

interface Props {
    showModal: () => void;
    selectedRecord: IRecord | null;
    isModalOpen: boolean;
}

export const Record: React.FC<Props> = ({
  showModal,
  selectedRecord,
  isModalOpen
}: Props) => {
  return ( 
    <Modal title="Basic Modal" open={isModalOpen} onCancel={showModal}>
      {selectedRecord?.title}
    </Modal>
  );
}
 
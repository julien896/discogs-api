import { Modal } from 'antd';
import * as React from 'react';
import { QueryClient } from 'react-query';
import default_release from '../../../assets/default_release.png'
import { IRecordFull, Tracklist } from '../../models/RecordFull';

interface Props {
    showModal: () => void;
    selectedRecord: IRecordFull | null;
    isModalOpen: boolean;
}

export const Record: React.FC<Props> = ({
  showModal,
  selectedRecord,
  isModalOpen
}: Props) => {
  const queryClient = new QueryClient()

  return ( 
    <Modal 
      centered 
      className='record' 
      open={isModalOpen} 
      onCancel={() => {
        queryClient.invalidateQueries(['record'])
        showModal() 
      }}
    >
      <img 
        alt="Cover" 
        src={
          selectedRecord?.images[0]?.uri?.split('.').pop() === 'gif' ? 
            default_release : 
            selectedRecord?.images[0]?.uri
        } 
      />
      <div className='main_details'>
        <h3 className='title'>{selectedRecord?.title}</h3>
        <div className='modal_container'>
          <div className='left_container'>
            <span><span className='details_title'>Artist:</span><br /> {selectedRecord?.artists_sort || '-'}</span>
            <span><span className='details_title'>Year:</span><br /> {selectedRecord?.year || '-'}</span>
            <span>
              <span className='details_title'>Styles: </span><br /> 
              {selectedRecord?.styles?.slice(0, 2).map((style:string, index) => (
                <span key={style}>{style}{index === 1 ? null : ' / ' }</span>
              ))}
            </span>
          </div>
          <div className='right_container'>
            <span className='details_title'>Tracklist: </span>
            <div className='tracks'>
              {selectedRecord?.tracklist?.map((track: Tracklist, index) => (
                <div className='track' key={track.title}>
                  <span>{index + 1}- {track.title}</span>
                  <span>{track.duration || '-'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
 
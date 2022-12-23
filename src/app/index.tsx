import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { PageBody } from '../layout/PageBody'
import { RecordList } from './components/RecordList/RecordList'
import { RecordsService } from './services/records_service'
import { IRecord } from './models/Record';
import { SearchBar } from './components/SearchBar/SearchBar'
import { Collection } from './components/Collection/Collection'
import { IRecordDetails } from './models/RecordDetails';

const records = new RecordsService()

export const Home = () => {
  const [search, setSearch] = useState('')
  const currentPage = 1

  const handleSearch = (value: string) => setSearch(value)

  const getAllMutation = useMutation(records.getAll)
  const getByIdMutation = useMutation(["record"], records.getById)
  const addReleaseMutation = useMutation(records.updateUserCollection)
  const getCollectionQuery = useQuery(records.keys.collection(), () => records.getUserCollection())

  const handleSubmit = (page: number) => {
    getAllMutation.mutateAsync({ title: search, page: page })
  }

  const [selectedRecord, setSelectedRecord] = useState<IRecordDetails | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(!isModalOpen)

  const handleSelect = (id: number) => {
    getByIdMutation.mutateAsync(id)
      .then(response => { 
        setSelectedRecord(response) 
        !getByIdMutation.isLoading && showModal()
      })
      .catch(e => console.error(e))
  }

  const addRelease = (id: number) => {
    addReleaseMutation.mutateAsync(id)
      .then(() => { 
        getAllMutation.mutateAsync({ title: search, page: currentPage })
      })
  }

  return ( 
    <PageBody>
      <SearchBar 
        handleSearch={handleSearch}
        handleSubmit={() => handleSubmit(currentPage)}
        isLoading={getAllMutation.isLoading}
      />
      <PageBody.Container className='main-content'>
        <RecordList 
          getAllLoading={getAllMutation.isLoading}
          findOneLoading={getByIdMutation.isLoading}
          records={getAllMutation.data?.records ?? []}
          pagination={getAllMutation.data?.pagination}
          handleSubmit={(page: number) => handleSubmit(page)}
          handleSelect={handleSelect}
          showModal={showModal}
          selectedRecord={selectedRecord}
          isModalOpen={isModalOpen}
          addRelease={addRelease}
        />
        <Collection 
          collection={getCollectionQuery.data ?? []}
          findOneLoading={getByIdMutation.isLoading}
          handleSelect={handleSelect}
          showModal={showModal}
          selectedRecord={selectedRecord}
          isModalOpen={isModalOpen}
        />
        <div/>
      </PageBody.Container>
    </PageBody>
  );
}
 
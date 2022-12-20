import { useState } from 'react'
import { useMutation } from 'react-query'
import { PageBody } from '../layout/PageBody'
import { RecordList } from './components/RecordList/RecordList'
import { RecordsService } from './services/records_service'
import { IRecord } from './models/Record';

const records = new RecordsService()

export const Home = () => {
  const [search, setSearch] = useState('')
  const handleSearch = (value: string) => setSearch(value)

  const getAllMutation = useMutation(records.getAll)
  const getByIdMutation = useMutation(records.getById)

  const handleSubmit = () => {
    getAllMutation.mutateAsync(search)
  }

  const [selectedRecord, setSelectedRecord] = useState<IRecord | null>(null)
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

  return ( 
    <PageBody>
      <input onChange={e => handleSearch(e.target.value)} />
      <button onClick={handleSubmit}>Busca!!!</button>
      <RecordList 
        records={getAllMutation.data ?? []}
        handleSelect={handleSelect}
        showModal={showModal}
        selectedRecord={selectedRecord}
        isModalOpen={isModalOpen}
      />
    </PageBody>
  );
}
 
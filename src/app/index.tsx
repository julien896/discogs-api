import { useState } from 'react'
import { useMutation } from 'react-query'
import { PageBody } from '../layout/PageBody'
import { RecordList } from './components/RecordList/RecordList'
import { RecordsService } from './services/records_service'

const records = new RecordsService()

export const Home = () => {
  const [search, setSearch] = useState('')
  const handleSearch = (value: string) => setSearch(value)

  const recordsMutation = useMutation(records.getAll)

  const handleSubmit = () => {
    recordsMutation.mutateAsync(search)
  }
  
  return ( 
    <PageBody>
      <RecordList 
        records={recordsMutation.data ?? []}
      />
    </PageBody>
  );
}
 
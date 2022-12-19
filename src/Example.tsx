import React from 'react'
import { useQuery } from 'react-query'
import { RecordsService } from './app/services/records_service'

const records = new RecordsService()

export const Example = () => {
  const { data } = useQuery(records.keys.records(), () => records.getAll('queen'))
  console.log(data)
  return (
    <div>
        asd
    </div>
  )
}

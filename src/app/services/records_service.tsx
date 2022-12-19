import { api } from '../../utils/api';
import { Record, IRecord } from '../models/Record';

export const getRecordsMapper = (x: IRecord): Record => new Record(x);


export class RecordsService {    
  keys = {
    records: () => ["records"],
  };
                
  getAll = async(params: string) => {
    const res = await api.get(`database/search?title=${params}`)
    return ( 
      res.data.results.sort((a: IRecord, b: IRecord) => {
        return a.id < b.id 
      }).map(getRecordsMapper) 
    )
  }     
}

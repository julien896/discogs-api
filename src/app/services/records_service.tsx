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

  getById = async(id: number) => {
    const res = await api.get(`releases/${id}`)
    return getRecordsMapper(res.data)
  }
  

  /*   @GET /users/{username}/collection/folders/{folder_id}/releases
  @Post /users/{username}/collection/folders/{folder_id}/releases/{release_id */

}

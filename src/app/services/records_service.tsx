import { api } from '../../shared/api';
import { Record, IRecord } from '../models/Record';
import { Favourite, IFavourite } from '../models/Favourite';
import { IRecordDetails, RecordDetails } from '../models/RecordDetails';

export const getRecordsMapper = (x: IRecord): Record => new Record(x);

export const getRecordDetailsMapper = (x: IRecordDetails): RecordDetails => new RecordDetails(x);

export const getCollectionMapper = (x: IFavourite): Favourite => new Favourite(x);

export class RecordsService {    
  keys = {
    records: () => ["records"],
    collection: () => ["collection"],
    record: (id: number) => ["collection", id]
  };
  
  getAll = async(params: { title: string, page: number }) => {
    const res = await api.get(`database/search?title=${params.title}&page=${params.page}&per_page=20`)
    return ({ 
      records: res.data.results.sort((a: IRecord, b: IRecord) => {
        return a.id < b.id 
      }).map(getRecordsMapper),
      pagination: res.data.pagination 
    })
  } 

  getById = async(id: number) => {
    const res = await api.get(`releases/${id}`)
    return getRecordDetailsMapper(res.data)
  }

  getUserCollection = async() => {
    const res = await api.get(`users/jxz77/collection/folders/1/releases`)
    return res.data.releases.map(getCollectionMapper)
  }

  updateUserCollection = async(id: number) => {
    const res = await api.post(`users/jxz77/collection/folders/1/releases/${id}`)
    return res.data
  }
}

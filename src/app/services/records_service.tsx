import { api } from '../../utils/api';
import { Record, IRecord } from '../models/Record';
import { Favourite, IFavourite } from '../models/Favourite';
import { IRecordFull, RecordFull } from '../models/RecordFull';

export const getRecordsMapper = (x: IRecord): Record => new Record(x);

export const getRecordFullMapper = (x: IRecordFull): RecordFull => new RecordFull(x);

export const getCollectionMapper = (x: IFavourite): Favourite => new Favourite(x);

export class RecordsService {    
  keys = {
    records: () => ["records"],
    collection: () => ["collection"],
    record: (id: number) => ["collection", id]
  };
  
  getAll = async(x: { title: string, page: number }) => {
    const res = await api.get(`database/search?title=${x.title}&page=${x.page}&per_page=20`)
    return ({ 
      records: res.data.results.sort((a: IRecord, b: IRecord) => {
        return a.id < b.id 
      }).map(getRecordsMapper),
      pagination: res.data.pagination 
    })
  } 

  getById = async(id: number) => {
    const res = await api.get(`releases/${id}`)
    return getRecordFullMapper(res.data)
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

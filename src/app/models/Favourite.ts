import { IRecord } from "./Record";

export interface IFavourite {
    id: number;
    basic_information: IRecord;
    date_added: string;
    folder_id: number;
    instance_id: number;
    rating: number;
}

export class Favourite {
  id: number;
  basic_information: IRecord;
  date_added: string;
  folder_id: number;
  instance_id: number;
  rating: number;
    
  constructor(args: IFavourite) {
    this.id = args.id
    this.basic_information = args.basic_information
    this.date_added = args.date_added
    this.folder_id = args.folder_id
    this.instance_id = args.instance_id
    this.rating = args.rating
  }
}
import { Artist } from "./Artists";

export interface IRecord {
    id: number;
    cover_image: string;
    style: string[];
    thumb: string;
    title: string;
    country: string;
    artists: Artist[];
    format: string[];
    uri: string;
    community: ICommunity;
    label: string[];
    catno: string;
    year: string;
    genre: string[];
    resource_url: string;
    type: string;
    user_data: IUserData;
}

export interface ICommunity {
    want: number;
    have: number;
}

export interface IUserData {
    in_collection: boolean;
    in_wantlist: boolean;
}

export class Record {
  id: number;
  cover_image: string;
  style: string[];
  thumb: string;
  title: string;
  country: string;
  artists: Artist[];
  format: string[];
  uri: string;
  community: ICommunity;
  label: string[];
  catno: string;
  year: string;
  genre: string[];
  resource_url: string;
  type: string;
  user_data: IUserData;
    
  constructor(args: IRecord) {
    this.id = args.id
    this.cover_image = args.cover_image
    this.style = args.style
    this.thumb = args.thumb
    this.title = args.title
    this.country = args.country
    this.artists = args.artists
    this.format = args.format
    this.uri = args.uri
    this.community = args.community
    this.label = args.label
    this.catno = args.catno
    this.year = args.year
    this.genre = args.genre
    this.resource_url = args.resource_url
    this.type = args.type
    this.user_data = args.user_data
  }
}
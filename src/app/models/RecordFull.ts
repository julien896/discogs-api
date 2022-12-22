export interface IRecordFull {
    id:                 number;
    status:             string;
    year:               number;
    resource_url:       string;
    uri:                string;
    artists:            Artist[];
    artists_sort:       string;
    labels:             Label[];
    series:             any[];
    companies:          any[];
    formats:            Format[];
    data_quality:       string;
    community:          Community;
    format_quantity:    number;
    date_added:         string;
    date_changed:       string;
    num_for_sale:       number;
    lowest_price:       null;
    master_id:          number;
    master_url:         string;
    title:              string;
    country:            string;
    released:           string;
    notes:              string;
    released_formatted: string;
    identifiers:        any[];
    videos:             Video[];
    genres:             string[];
    styles:             string[];
    tracklist:          Tracklist[];
    extraartists:       any[];
    images:             Image[];
    thumb:              string;
    blocked_from_sale:  boolean;
}

export interface Artist {
    name:          string;
    anv:           string;
    join:          string;
    role:          string;
    tracks:        string;
    id:            number;
    resource_url:  string;
    thumbnail_url: string;
}

export interface Community {
    have:         number;
    want:         number;
    rating:       Rating;
    submitter:    Submitter;
    contributors: Submitter[];
    data_quality: string;
    status:       string;
}

export interface Submitter {
    username:     string;
    resource_url: string;
}

export interface Rating {
    count:   number;
    average: number;
}

export interface Format {
    name:         string;
    qty:          string;
    descriptions: string[];
}

export interface Image {
    type:         string;
    uri:          string;
    resource_url: string;
    uri150:       string;
    width:        number;
    height:       number;
}

export interface Label {
    name:             string;
    catno:            string;
    entity_type:      string;
    entity_type_name: string;
    id:               number;
    resource_url:     string;
    thumbnail_url:    string;
}

export interface Tracklist {
    position:     string;
    type_:        string;
    title:        string;
    extraartists: Artist[];
    duration:     string;
}

export interface Video {
    uri:         string;
    title:       string;
    description: string;
    duration:    number;
    embed:       boolean;
}


export class RecordFull {
  id:                 number;
  status:             string;
  year:               number;
  resource_url:       string;
  uri:                string;
  artists:            Artist[];
  artists_sort:       string;
  labels:             Label[];
  series:             any[];
  companies:          any[];
  formats:            Format[];
  data_quality:       string;
  community:          Community;
  format_quantity:    number;
  date_added:         string;
  date_changed:       string;
  num_for_sale:       number;
  lowest_price:       null;
  master_id:          number;
  master_url:         string;
  title:              string;
  country:            string;
  released:           string;
  notes:              string;
  released_formatted: string;
  identifiers:        any[];
  videos:             Video[];
  genres:             string[];
  styles:             string[];
  tracklist:          Tracklist[];
  extraartists:       any[];
  images:             Image[];
  thumb:              string;
  blocked_from_sale:  boolean;

  constructor(args: IRecordFull) {
    this.id = args.id;
    this.status = args.status;
    this.year = args.year;
    this.resource_url = args.resource_url;
    this.uri = args.uri;
    this.artists = args.artists;
    this.artists_sort = args.artists_sort;
    this.labels = args.labels;
    this.series = args.series;
    this.companies = args.companies;
    this.formats = args.formats;
    this.data_quality = args.data_quality;
    this.community = args.community;
    this.format_quantity = args.format_quantity;
    this.date_added = args.date_added;
    this.date_changed = args.date_changed;
    this.num_for_sale = args.num_for_sale;
    this.lowest_price = args.lowest_price;
    this.master_id = args.master_id;
    this.master_url = args.master_url;
    this.title = args.title;
    this.country = args.country;
    this.released = args.released;
    this.notes = args.notes;
    this.released_formatted = args.released_formatted;
    this.identifiers = args.identifiers;
    this.videos = args.videos;
    this.genres = args.genres;
    this.styles = args.styles;
    this.tracklist = args.tracklist;
    this.extraartists = args.extraartists;
    this.images = args.images;
    this.thumb = args.thumb;
    this.blocked_from_sale = args.blocked_from_sale;
  }
}
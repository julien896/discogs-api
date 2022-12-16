import axios from "axios"

export const api = axios.create({
  baseURL: `https://api.discogs.com/`,
  headers: {
    Authorization: import.meta.env.REACT_APP_DISCOGS_KEY
  }
})
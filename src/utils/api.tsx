import axios from "axios"

export const api = axios.create({
  baseURL: `https://api.discogs.com/`,
  headers: {
    Authorization: `Discogs token=${import.meta.env.VITE_APP_DISCOGS_KEY}`
  }
})
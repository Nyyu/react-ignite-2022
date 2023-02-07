import axios from "axios"

export const api = axios.create({})

type clientOptions = {
  baseURL: string
  ctx?: unknown
}

// In case of I use nookies
export const CreateClientApi = (
  options: clientOptions = {
    baseURL: "/api",
  }
) => {
  return axios.create(options)
}

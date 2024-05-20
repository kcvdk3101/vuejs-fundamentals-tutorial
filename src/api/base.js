import axios from 'axios'

const baseURL = 'https://www.themealdb.com/api/json/v1/1/'

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  }
})

export async function getAPI(url, config) {
  return await axiosInstance.get(url, config)
}

export async function postAPI(url, data, config) {
  return await axiosInstance.post(url, data, config)
}

export async function deleteAPI(url, config) {
  return await axiosInstance.delete(url, config)
}
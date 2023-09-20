// useApi.js
import axios from 'axios'
import { useEffect, useState } from 'react'

axios.defaults.baseURL = 'https://coinpaprika1.p.rapidapi.com'

const apiOptions = {
  headers: {
    'X-RapidAPI-Key': '121f897c0cmsh80850168403bfbap1168e4jsn5664b7932b70',
    'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com',
  },
}

const useApi = (endpoint) => {
  console.log('useapi calıştı')
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = async () => {
    try {
      const response = await axios.get(`/${endpoint}`, apiOptions)
      setData(response.data)
      console.log(
        '🚀 ~ file: useApi.js:23 ~ fetchApi ~ response:',
        response.data
      )
      setIsLoading(false)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [endpoint])

  return { isLoading, data }
}

export default useApi

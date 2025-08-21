import { useEffect, useState } from "react"

export function useGetJson(url) {
  const [ json, setJson ] = useState(null)

  useEffect(() => {
    async function getJson() {
      const response = await fetch(url)
      const responseData = await response.json()
      console.log(responseData)
      setJson(responseData)
    }
    getJson()
  }, [])

  return {
    json
  }
}
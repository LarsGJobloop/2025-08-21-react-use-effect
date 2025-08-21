// General recommandation is to use existing hooks
// rather then invent your own wheel
// Good examples for server communication
// SWR (Stale While Revalidate): https://swr.vercel.app/
// React/TanStack Query: https://tanstack.com/query/v5/docs/framework/react/overview

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
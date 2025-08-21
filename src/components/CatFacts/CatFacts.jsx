import { useEffect, useState } from "react"

function useGetJson(url) {
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

export function CatFacts() {
  const url = "https://catfact.ninja/facts?page=1"
  const { json } = useGetJson(url)

  const facts = json?.data

  return (
    <div>
      <p>Cat Facts:</p>
      <ul>
        {
          // If we haven't gotten a response
          // show loading
          !facts ? <p>Loading</p>
          // If we have a response
          // show the list of facts
          : facts.map((fact, index) => {
              return (
                <li key={index}>{fact.fact}</li>
              )
          })
        }
      </ul>
    </div>
  )
}
import { useEffect, useState } from "react"

export function CatFacts() {
  const [ data, setData ] = useState()

  const url = "https://catfact.ninja/facts?page=1"

  useEffect(() => {
    async function getFacts() {
      const response = await fetch(url)
      const responseData = await response.json()
      console.log(responseData.data)
      setData(responseData.data)
    }
    getFacts()
  }, [])

  return (
    <div>
      <p>Cat Facts:</p>
      <ul>
        {
          // If we haven't gotten a response
          // show loading
          !data ? <p>Loading</p>
          // If we have a response
          // show the list of facts
          : data.map((fact, index) => {
              return (
                <li key={index}>{fact.fact}</li>
              )
          })
        }
      </ul>
    </div>
  )
}
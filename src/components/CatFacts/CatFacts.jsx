import { useGetJson } from "../../hooks/useGetJson/useGetJson"

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
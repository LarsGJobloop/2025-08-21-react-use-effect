const facts = [
  {
    "fact": "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
    "length": 114
  },
  {
    "fact": "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
    "length": 97
  },
  {
    "fact": "The technical term for a cat’s hairball is a “bezoar.”",
    "length": 54
  },
  {
    "fact": "A group of cats is called a “clowder.”",
    "length": 38
  },
  {
    "fact": "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
    "length": 142
  }
]

export function CatFacts() {


  return (
    <div>
      <p>Cat Facts:</p>
      <ul>
        {facts.map((fact, index) => {
          return (
            <li key={index}>{fact.fact}</li>
          )
        })}
      </ul>
    </div>
  )
}
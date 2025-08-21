import { useEffect, useState } from "react"

export function useTime() {
  // Keeps track of seconds
  const [time, setTime] = useState(0)

  function tick() {
    console.log("Calling setTime")
    setTime((oldTime) => oldTime + 1)
  }

  console.log("Rendering the component")
  
  useEffect(() => {
    console.log("Running the effect")
    const intervalId = setInterval(tick, 1000)

    // Cleanup function
    return () => {
      console.log("Unmounting the component")
      clearInterval(intervalId)
    }
  }, [])

  return {
    time,
    tick
  }
}

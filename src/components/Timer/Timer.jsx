import { useEffect, useState } from "react"

function useTime() {
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

export function Timer() {
  const { time, tick } = useTime()

  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  return (
    <div>
      <p>
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </p>

      <button onClick={tick}>Debug</button>
    </div>
  )
}

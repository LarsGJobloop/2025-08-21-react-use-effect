import { useEffect, useState } from "react"

export function Timer() {
  // Keeps track of seconds
  const [time, setTime] = useState(0)

  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  function tick() {
    console.log(time)
    setTime((oldTime) => oldTime + 1)
  }

  useEffect(() => {
    setInterval(tick, 1000)
  }, [])

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

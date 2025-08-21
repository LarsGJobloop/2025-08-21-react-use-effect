import { useTime } from "../../hooks/useTime/useTime"

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

import { useState } from "react"

export function useToggle(initialState) {
  const [state, setState] = useState(initialState)

  function toggle() {
    setState((previousState) => !previousState)
  }

  return {
    state,
    toggle
  }
}

import { useState } from 'react'
import './App.css'
import { Timer } from './components/Timer/Timer'

function App() {
  const [show, setShow] = useState(true)

  function toggle() {
    setShow((previousState) => !previousState)
  }

  return (
    <main>
      <header>
        <h1>React - useEffect</h1>
        <h2><a href="https://react.dev/reference/react/useEffect">useEffect Docs</a></h2>
      </header>

      <section>
        <h2>Timer Example</h2>

        <div>
          <div>
            <button onClick={toggle}>Toggle</button>
            {
              show &&
              <Timer />
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default App

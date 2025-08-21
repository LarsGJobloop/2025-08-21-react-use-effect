import './App.css'
import { Timer } from './components/Timer/Timer'

function App() {
  return (
    <main>
      <header>
        <h1>React - useEffect</h1>
        <h2><a href="https://react.dev/reference/react/useEffect">useEffect Docs</a></h2>
      </header>

      <section>
        <h2>Timer Example</h2>
        <Timer />
      </section>
    </main>
  )
}

export default App

import './App.css'
import { CatFacts } from './components/CatFacts/CatFacts'
import { Timer } from './components/Timer/Timer'
import { useToggle } from './hooks/useToggle/useToggle'

function App() {
  const { state, toggle } = useToggle(true)

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
              state &&
              <Timer />
            }
          </div>
        </div>
      </section>

      <section>
        <h2>Fetch Example</h2>
        <CatFacts />
      </section>
    </main>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { api } from './utils/api'

function App() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    api.get(`database/search?title=nirvana`)
      .then(res => setCount(res.data))
  }, [])
  

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          count is {JSON.stringify(count)}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`container ${mounted ? 'mounted' : ''}`}>
      <div className="grid-bg" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <main className="content">
        <div className="terminal-line">
          <span className="prompt">$</span>
          <span className="command">initializing</span>
          <span className="cursor">_</span>
        </div>

        <h1 className="logo">
          intervue<span className="accent">.you</span>
        </h1>

        <div className="status">
          <div className="status-indicator" />
          <span className="status-text">Building something new</span>
        </div>

        <p className="tagline">Coming Soon</p>

        <div className="code-block">
          <div className="code-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <pre className="code-content">
            {`{
  "status": "in_development",
  "version": "0.0.1-alpha",
  "launch": "2026"
}`}
          </pre>
        </div>

        <footer className="footer">
          <span className="footer-text">Stay tuned for updates</span>
        </footer>
      </main>
    </div>
  )
}

export default App

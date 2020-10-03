import React, { useState, useEffect } from 'react';
import Editor from  './Editor';
import useLocalStorage from '../hooks/useLocalStorage'

function App() {
  const [html, setHtml] = useState(`<div class="rectangle"><div>`, '')
  const [css, setCss] = useState(`.rectangle{
    width: 200px;
    height: 100px;
    background-color: black;
  }`, '')
  const [js, setJs] = useState('', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div class="grid">
      <div className="pane result">
        <iframe 
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        />
        </div>
      <div class="container objectifs">
        <div id="app"></div>
      </div>
      </div>
    </>
  )
}

export default App;

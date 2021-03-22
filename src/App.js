import React, { useState, useEffect } from "react";
import ControlledEditor from "./components/ControlledEditor";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html","");
  const [css, setCss] = useLocalStorage("css","");
  const [js, setJs] = useLocalStorage("js","");
  const [srcDoc, setSrcDoc] = useState("")

  useEffect(() => {
    setSrcDoc(`
      <html>${html}</html>
      <style>${css}</style>
      <script>${js}</script>
    `);
  }, [html, css, js]);

  return (
    <div className="App">
      <div className="editors-container">
        <ControlledEditor
          value={html}
          language="xml"
          displayName="html"
          setValue={setHtml}
        />
        <ControlledEditor
          value={css}
          language="css"
          displayName="css"
          setValue={setCss}
        />
        <ControlledEditor
          value={js}
          language="javascript"
          displayName="javascript"
          setValue={setJs}
        />
      </div>
      <div class="iframe-container">
        <iframe title="output web" srcDoc={srcDoc} />
      </div>
    </div>
  );
}

export default App;

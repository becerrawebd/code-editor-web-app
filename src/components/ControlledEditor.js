import React from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as CodeMirror } from "react-codemirror2";

const ControlledEditor = (props) => {

  const {value, language, displayName, setValue} = props

  const handleChange = (editor, data, value) => {
    setValue(value)
  }

  return (  
    <div className="code-container">
        <div className="code-title">{displayName}</div>
        <CodeMirror
          value={value}
          options={{
            mode: language,
            theme: "material",
            lineNumbers: true,
            lineWrapping: true,
            lint: true,
          }}
          onBeforeChange={handleChange}
        />
      </div>
  );
}
 
export default ControlledEditor;
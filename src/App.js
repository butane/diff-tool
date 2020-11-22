import React, { useEffect } from 'react';
import { editor } from 'monaco-editor';
import logo from './logo.svg';
import './App.css';

function App() {
  const originalModel = editor.createModel("Paste original text here", "text/plain");
  const modifiedModel = editor.createModel("Paste updated text here", "text/plain");
  useEffect(() => {
    const diffEditor = editor.createDiffEditor(document.getElementById("container"), {
      originalEditable: true
    });
    diffEditor.setModel({
      original: originalModel,
      modified: modifiedModel
    });
  });

  return (
    <div className="App">
      <div id="container"></div>
    </div>
  );
}

export default App;

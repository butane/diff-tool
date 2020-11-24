import React, { useEffect } from 'react';
import { editor } from 'monaco-editor';
import logo from './logo.svg';
import './App.css';

const createDiffEditor = function (containerId) {
  const originalModel = editor.createModel("Paste original text here", "text/plain");
  const modifiedModel = editor.createModel("Paste updated text here", "text/plain");
  const diffEditor = editor.createDiffEditor(document.getElementById(containerId), {
    originalEditable: true
  });
  diffEditor.setModel({
    original: originalModel,
    modified: modifiedModel
  });
};

function App() {

  useEffect(() => {
    createDiffEditor("diffEditor");
  });

  return (
    <div className="App">
      <div id="diffEditor"></div>
    </div>
  );
}

export default App;

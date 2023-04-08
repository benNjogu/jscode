import MonacoEditor, { OnChange, OnMount } from '@monaco-editor/react';

import './code-editor.style.css';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string | undefined): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const handleOnMount: OnMount = (editor) => {
    editor.getModel()?.updateOptions({ tabSize: 2 });
  };

  const handleOnChange: OnChange = (value) => {
    onChange(value);
  };

  return (
    <div className="editor-wrapper">
      <button className="button button-format is-primary is-small">
        Format
      </button>
      <MonacoEditor
        value={initialValue}
        onChange={handleOnChange}
        onMount={handleOnMount}
        theme="vs-dark"
        language="javascript"
        height="100%"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;

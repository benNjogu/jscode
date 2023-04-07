import { useRef } from 'react';
import MonacoEditor, { OnChange, OnMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

import './code-editor.style.css';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string | undefined): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>();

  const handleOnMount: OnMount = (editor) => {
    editor.getModel()?.updateOptions({ tabSize: 2 });
  };

  const handleOnChange: OnChange = (value) => {
    editorRef.current = value;
    onChange(value);
  };

  const handleFormat = () => {
    console.log(editorRef.current);

    //get current value from editor
    const unformmated = editorRef.current;
    // //format that value
    const formatted = prettier
      .format(unformmated, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, '');
    //set the formated value back in the editor
  };

  return (
    <div className="editor-wrapper">
      <button
        className="button button-format is-primary is-small"
        onClick={handleFormat}
      >
        Format
      </button>
      <MonacoEditor
        value={initialValue}
        onChange={handleOnChange}
        onMount={handleOnMount}
        theme="vs-dark"
        language="javascript"
        height={500}
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

import { useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';

import './text-editor.style.css';

const TextEditor: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState<string | undefined>('**Hello world!!!**');
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (ref.current && e.target && ref.current.contains(e.target as Node)) {
        return;
      }

      setEditing(false);
    };

    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  const handleMarkdownClick = () => {
    setEditing(true);
  };

  const handleValueChange = (v: string | undefined) => {
    setValue(v);
  };

  if (editing) {
    return (
      <div className="text-editor" ref={ref}>
        <MDEditor value={value} onChange={handleValueChange} />
      </div>
    );
  }

  return (
    <div
      className="text-editor markdown-wrapper card"
      onClick={handleMarkdownClick}
    >
      <div className="markdown-container card-content">
        <MDEditor.Markdown source={value} />
      </div>
    </div>
  );
};

export default TextEditor;

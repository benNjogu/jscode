import { useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Cell } from '../../redux';
import { useActions } from '../../hooks/use-actions';

import './text-editor.style.css';

interface PropTypes {
  cell: Cell;
}

const TextEditor: React.FC<PropTypes> = ({ cell }) => {
  const [editing, setEditing] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { updateCell } = useActions();

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
    updateCell(cell.id, v || '');
  };

  if (editing) {
    return (
      <div className="text-editor" ref={ref}>
        <MDEditor value={cell.content} onChange={handleValueChange} />
      </div>
    );
  }

  return (
    <div
      className="text-editor markdown-wrapper card"
      onClick={handleMarkdownClick}
    >
      <div className="markdown-container card-content">
        <MDEditor.Markdown source={cell.content || 'Click to edit.'} />
      </div>
    </div>
  );
};

export default TextEditor;

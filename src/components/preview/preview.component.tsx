import { useEffect, useRef } from 'react';

import './preview.style.css';

interface PreviewProps {
  code: string;
}

const html = `
    <html>
      <head>
        <style>
          html {background-color: wheat;}
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (error) {
              const root = document.querySelector('#root');
              root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>'+ error +'</div>'
              console.error(error);
            }
          }, false);
        </script> 
      </body>
    </html>

  `;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  useEffect(() => {
    iframeRef.current.srcdoc = html;
    setTimeout(() => {
      iframeRef.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  const iframeRef = useRef<any>();

  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        ref={iframeRef}
        sandbox="allow-scripts"
        srcDoc={html}
      />
    </div>
  );
};

export default Preview;

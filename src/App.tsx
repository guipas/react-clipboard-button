import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { CopyToClipboardButton, CopyToClipboardWrapper } from './CopyToClipboard'
import hljs from 'highlight.js';
import { Toast, toast, Toaster} from 'react-hot-toast';

import 'highlight.js/styles/monokai-sublime.css';


function App() {

  return (
    <div className="App container mx-auto">
      <Toaster/>
      <h1 className="text-xl pt-3 pb-1">
        react-clipboard-button demo
      </h1>
      <h2 className="text-lg pb-1">As a single button</h2>
      <div>
        <Code
          lang="tsx"
          code={`
<CopyToClipboardButton 
  text={\`Hello !\`}
  onSuccess={() => console.log('success!')}
  onError={() => console.log('error!')}
>
  <button>Copy To Clipboard !</button>
</CopyToClipboardButton>
          `}
        />
      </div>
      <p>Demo:  </p>
      <CopyToClipboardButton 
        text={`Hello you!`}
        onSuccess={() => toast.success('Success!')}
        onError={() => toast.error('Error!')}
      >
        <button className="p-2 rounded bg-blue-400 text-white">Copy To Clipboard !</button>
      </CopyToClipboardButton>

      <h2 className="text-lg mt-4 pt-4 pb-1">Wrapper component</h2>
      <p className="py-1">
        A bit more convenient if you want to quicly put the button around a `code` tag for example:
      </p>
      <CopyToClipboardWrapper 
        text="hello!" 
        button={
          <button className="p-2 rounded bg-blue-400 text-white">Copy To Clipboard !</button>
        }
      >
      <Code
        lang="tsx"
        code={`
<CopyToClipboardWrapper 
  text="hello!" 
  button={<button>Copy To Clipboard !</button>}
>
  <pre><code>some code</code></pre>
</CopyToClipboardWrapper>
 `}
      />
      </CopyToClipboardWrapper>

    </div>
  )
}

const Code: React.FC<{ code: string; lang: string }> = ({ code, lang }) => {
  return (
    <pre className="hljs p-2 rounded text-sm">
      <code 
        className={`language-${lang}`}
        dangerouslySetInnerHTML={{ __html: hljs.highlight(code.trim(), { language: lang, ignoreIllegals: true }).value }}
      />
    </pre>
  )
}

export default App

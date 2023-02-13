import React from "react";
import { useState } from "react";
import "./App.css";
import { CopyToClipboardButton, CopyToClipboardWrapper } from "./lib";
import hljs from "highlight.js";
import { Toast, toast, Toaster } from "react-hot-toast";

import "highlight.js/styles/monokai-sublime.css";
import { ClipboardIcon } from "./components/ClipboardIcon";

function App() {
  return (
    <div className="App container mx-auto max-w-screen-sm	">
      <Toaster />
      <h1 className="text-2xl pt-3 pb-1">react-clipboard-button</h1>
      <p className="py-3">
        Easily add a <em>copy to clipboard button</em> to your react
        application.
      </p>
      <ul className="list-disc list-inside pb-4">
        <li className="task-list-item pl-3">Very light (~33KB not minified)</li>
        <li className="task-list-item pl-3">
          Only one dependency (
          <a href="https://clipboardjs.com/" rel="nofollow">
            clipboard.js
          </a>
          )
        </li>
        <li className="task-list-item pl-3">Compatible with IE11+</li>
      </ul>
      <h2 className="text-xl pb-2">Usage</h2>

      <h3 className="text-lg pb-1">As a single button:</h3>
      <div>
        <CopyToClipboardWrapper
          text={`
          <CopyToClipboardButton 
          text={\`Hello !\`}
          onSuccess={() => console.log('success!')}
          onError={() => console.log('error!')}
        >
          <button>Copy To Clipboard !</button>
        </CopyToClipboardButton>
         `}
          onSuccess={() => toast.success("Code copied to clipboard!")}
          button={
            <button className="p-2 rounded bg-gray-600 text-white">
              <ClipboardIcon />
            </button>
          }
        >
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
        </CopyToClipboardWrapper>
      </div>
      <p>Result: </p>
      <CopyToClipboardButton
        text={`Hello you!`}
        onSuccess={() => toast.success("Success!")}
        onError={() => toast.error("Error!")}
      >
        <button className="p-2 rounded bg-blue-400 text-white">
          Copy To Clipboard !
        </button>
      </CopyToClipboardButton>

      <h3 className="text-lg mt-4 pt-5 pb-1">Wrapper component</h3>
      <p className="py-1">
        A bit more convenient if you want to quicly put the button around a
        `code` tag for example:
      </p>
      <CopyToClipboardWrapper
        text={`
        <CopyToClipboardWrapper 
          text="hello!" 
          button={<button>Copy To Clipboard !</button>}
        >
          <pre><code>some code</code></pre>
        </CopyToClipboardWrapper>
         `}
        onSuccess={() => toast.success("Code copied to clipboard!")}
        button={
          <button className="p-2 rounded bg-gray-600 text-white">
            <ClipboardIcon />
          </button>
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
      <p>Result: </p>
      <CopyToClipboardWrapper
        text={`
        <CopyToClipboardWrapper 
          text="hello!" 
          button={<button>Copy To Clipboard !</button>}
        >
          <pre>
            <code>
              some code
            </code>
          </pre>
        </CopyToClipboardWrapper>
         `}
        onSuccess={() => toast.success("Success!")}
        button={
          <button className="p-2 rounded bg-blue-400 text-white">
            Copy To Clipboard !
          </button>
        }
      >
        <Code
          lang="tsx"
          code={`<pre>
  <code>
    some code
  </code>
</pre>`}
        />
      </CopyToClipboardWrapper>
    </div>
  );
}

const Code: React.FC<{ code: string; lang: string }> = ({ code, lang }) => {
  return (
    <pre className="hljs p-2 rounded text-sm">
      <code
        className={`language-${lang}`}
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(code.trim(), {
            language: lang,
            ignoreIllegals: true,
          }).value,
        }}
      />
    </pre>
  );
};

export default App;

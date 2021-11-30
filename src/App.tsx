import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { CopyToClipboardButton } from './CopyToClipboard'

function App() {

  return (
    <div className="App">
      Demo (todo)
      <CopyToClipboardButton 
        text={`Test ${new Date()}`}
        onSuccess={() => console.log('success')}
      />
    </div>
  )
}

export default App

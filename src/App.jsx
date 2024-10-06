import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/navigation/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav pirveliXazi="sawyisi" meoreXazi="suratebi" mesameXazi="videos" meotxeXazi="setingebi"/>
      <Nav pirveliXazi="pirveli" meoreXazi="meore" mesameXazi="mesame" meotxeXazi="meotxe"/>
      <Nav pirveliXazi="mexute" meoreXazi="meeqvse" mesameXazi="meshvide" meotxeXazi="merve"/>
      <h1>adhdhdssssh</h1>
    </div>
  )
}

export default App

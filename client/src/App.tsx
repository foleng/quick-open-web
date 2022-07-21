import { useState, useRef } from 'react'
import io from 'socket.io-client'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios"

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef()

  const postUrl = () => {
    const url = ref.current.value
    axios.post("http://192.168.1.104:3000/api/url/add", { url })
  }

  return (
    <div className="App">
      <input ref={ref} placeholder="请输入你的链接" type="text" />
      <button type="submit" onClick={postUrl}>发送</button>
    </div>
  )
}

export default App

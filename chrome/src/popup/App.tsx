import { useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react';
import reactLogo from './assets/react.svg'
import './App.css'

type Tab = {
  id: string;
  url?: string;
}

type Response = {
  kw: string;
}

function App() {
  const [tab, setTab] = useState<Tab>()

  const getTabs = () => {
    window.chrome.tabs.getSelected(null, (tab: Tab) => { //获取当前tab
      //向tab发送请求
      console.log(tab);
      setTab(tab)
    });
  }

  useEffect(() => {
    getTabs();
  }, [])


  return (
    <div className="App" >
      <QRCodeSVG value={tab?.url} />
    </div>
  )
}

export default App

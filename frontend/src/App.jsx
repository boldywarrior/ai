import { useState } from 'react'
export default function App() {
  const [msg,setMsg]=useState('')
  const [out,setOut]=useState('')
  async function send(){
    const r = await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:msg})})
    const j = await r.json(); setOut(j.reply)
  }
  return (<div><h2>AI Agent</h2><textarea onChange={e=>setMsg(e.target.value)} /><button onClick={send}>Send</button><pre>{out}</pre></div>)
}
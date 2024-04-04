import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function fetchPlayerData(username:string){
  console.log(username)
  const resp = fetch('https://api.hypixel.net/v2/player', {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
});
  return resp
}

function App() {
  const [data, setData] = useState({})
  const nameBoxRef = useRef<HTMLInputElement>(null);
  function handleIgnSubmit() {
    if (nameBoxRef.current?.value) {
      setData(fetchPlayerData(nameBoxRef.current?.value))
    }
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleIgnSubmit();
      console.log(data);
    }
  }
  return (
    <>
      <input
        className="nameBoxInput"
        type="text"
        placeholder="IGN"
        ref={nameBoxRef}
        onKeyDown={handleKeyDown}
      />

    </>
  )
}

export default App

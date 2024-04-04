import { useRef, useState } from 'react'
import './App.css'

const apikey = '242df654-364e-4a96-93bf-ac997851cf36'
const uuid = '96337cf6-ad7b-4a4c-9846-9433111a7236'

function fetchPlayerData(username:string){
  console.log(username)
  const resp = fetch(`https://api.hypixel.net/v2/player?uuid=${uuid}&key=${apikey}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'TRUE'
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

import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App(){
  const [name, setName] = useState("")
  return(
    <div>
      <input
      value={name}
      onChange={(e)=>setName(e.target.value)}
      placeholder="Enter name"
      />
      <Button 
      label="submit"
      onClick={()=> alert(name)}
      />
    </div>
  )
}

export default App;
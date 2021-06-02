
import React, {useState}from "react";
import Header from "./components/Header";
import Message from "./components/Message";

function App() {
  const [userinput, setUserinput] = useState("");
  const [result, setResult] = useState("");


  return (
    <React.Fragment>
<Header />
<Message userinput={userinput} setUserinput={setUserinput} 
result={result} setResult={setResult}  />
</React.Fragment>

  );
}

export default App;

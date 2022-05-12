import { Button } from "@mui/material";
import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import WelcomePage from "./components/pages/WelcomePage";

function App() {
  const [name, setName] = useState("Dhiwa")
  // const parentToChild = () => {
  //   setName("My Name");
  // }
  return (
    <div className="App">
      
      <HomePage username={name}/>
      {/* <WelcomePage username={name}/>
      <Button onClick={() => parentToChild()}/> */}
    </div>
  );
}

export default App;

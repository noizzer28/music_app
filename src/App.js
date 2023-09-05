import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./globalstyles";
import { useState } from "react";



function App() {
  const [token, setToken] = useState(null)
  const handleLogin = () => {
    setToken({token: 'someToken'})
console.log(token)}

  return (
    <BrowserRouter>
        <GlobalStyles/>
            <AppRoutes token={token}/>
    </BrowserRouter>


  );
}

export default App;
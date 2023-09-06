import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./globalstyles";
import { useState } from "react";



function App() {
  const [token, setToken] = useState(null)

  return (
    <BrowserRouter>
        <GlobalStyles/>
            <AppRoutes token={token} setToken={setToken}/>
    </BrowserRouter>


  );
}

export default App;
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./globalstyles";
import {  useState } from "react";
import { UserContext } from "./components/context/context";



function App() {
  const [token, setToken] = useState(null)



  return (
    <UserContext.Provider value={{token, setToken}}>
    <BrowserRouter>
        <GlobalStyles/>
            <AppRoutes/>
    </BrowserRouter>
    </UserContext.Provider>


  );
}

export default App;
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./globalstyles";
import {  useState } from "react";
import { UserContext } from "./components/context/context";
import { Provider } from "react-redux";
import store from './store/index'


function App() {
  const [token, setToken] = useState(null)



  return (
    <UserContext.Provider value={{token, setToken}}>
      <Provider store={store}>
        <BrowserRouter >
            <GlobalStyles/>
                <AppRoutes/>
        </BrowserRouter>
      </Provider>
    </UserContext.Provider>


  );
}

export default App;
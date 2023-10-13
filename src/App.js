import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./globalstyles";
import {  useState } from "react";
import { UserContext } from "./components/context/context";
import { Provider } from "react-redux";
import store from './store/index'


function App() {
  const [refreshToken, setRefreshToken] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  const [tokenValidation, setTokenValidation] = useState(0)

  return (
    <UserContext.Provider value={{
      refreshToken,
      setRefreshToken, 
      accessToken, 
      setAccessToken, 
      tokenValidation, 
      setTokenValidation}}>
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
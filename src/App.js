import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./components/protected-routes/routes";
import { GlobalStyles } from "./globalstyles";
import {  useState } from "react";
import { UserContext } from "./components/context/context";
import { Provider } from "react-redux";
import store from './store/index'

// export function clearToken () {
//   setInterval(() => {
//     console.log('interval')
//     setAccessToken(null)
//   }, 200000);
// }
function App() {
  // const [refreshToken, setRefreshToken] = useState(null)
  // const [accessToken, setAccessToken] = useState(null)

  return (
    // <UserContext.Provider value={{
    //   refreshToken,
    //   setRefreshToken, 
    //   accessToken, 
    //   setAccessToken}}>
      <Provider store={store}>
        <BrowserRouter >
            <GlobalStyles/>
                <AppRoutes/>
        </BrowserRouter>
      </Provider>
    // </UserContext.Provider>


  );
}

export default App;
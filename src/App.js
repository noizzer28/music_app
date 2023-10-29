import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./components/protected-routes/routes";
import { GlobalStyles } from "./globalstyles";
import { Provider } from "react-redux";
import store from './store/index'


  function App() {


    return (
        <Provider store={store}>
          <BrowserRouter >
              <GlobalStyles/>
                  <AppRoutes/>
          </BrowserRouter>
        </Provider>


    );
  }

export default App;
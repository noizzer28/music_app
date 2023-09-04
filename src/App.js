import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./globalstyles";

function App() {
  return (
    <BrowserRouter>
        <GlobalStyles/>
            <AppRoutes/>
    </BrowserRouter>


  );
}

export default App;
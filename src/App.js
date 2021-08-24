import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/global";

import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

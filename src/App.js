import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/Global";

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

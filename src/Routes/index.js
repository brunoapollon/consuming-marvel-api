import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Comics from "../pages/Comics";

function redirectoToHome() {
  return <Redirect to="/home" />;
}

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={redirectoToHome} />
      <Route path="/home" component={Home} />
      <Route path="/comics" component={Comics} />
    </Switch>
  );
}

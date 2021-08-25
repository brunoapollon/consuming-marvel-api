import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Comics from "../pages/Comics";

export default function Routes() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/comics" component={Comics} />
    </Switch>
  );
}

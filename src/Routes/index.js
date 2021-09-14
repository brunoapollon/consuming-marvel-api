import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Comics from "../pages/Comics";
import Character from "../pages/Character";
import Event from "../pages/Event";

function redirectoToHome() {
  return <Redirect to="/home" />;
}

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={redirectoToHome} />
      <Route path="/home" component={Home} />
      <Route path="/comics" component={Comics} />
      <Route path="/character/:character_id" component={Character} />
      <Route path="/event/:event_id" component={Event} />
    </Switch>
  );
}

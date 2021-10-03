import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Comics from "../pages/Comics";
import Character from "../pages/Character";
import Event from "../pages/Event";
import Events from "../pages/Events";
import About from "../pages/About";
import Characters from "../pages/Characters";
import Comic from "../pages/Comic";

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
      <Route path="/comic/:comic_id" component={Comic} />
      <Route path="/events" component={Events} />
      <Route path="/characters" component={Characters} />
      <Route path="/about" component={About} />
    </Switch>
  );
}

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Main from "./containers/Main";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path={"/"} component={Main} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

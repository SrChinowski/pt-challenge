import Landing from './pages/landing';
import BankList from './pages/bankList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/navbar';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>

      <Navbar />
      
      <Router>
          <Switch>

            <Route path="/bankList">
              <BankList />
            </Route>

            <Route path="/">
              <Landing />
            </Route>

          </Switch>
      </Router>
      
    </Fragment>
  );
}

export default App;

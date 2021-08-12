import Landing from './pages/landing';
import BankList from './pages/bankList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/common/navbar';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
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

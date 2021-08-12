import Landing from './pages/landing';
import BankList from './pages/bankList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/common/navbar';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
          <Switch>

            <Route path="/bankList">
              <BankList />
            </Route>

            <Route path="/">
              <Landing />
            </Route>

          </Switch>
      </Provider>
    </Router>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Home from './pages/Home';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/page1" exact component={Page1} />
        <Route path="/page2" exact component={Page2} />
        <Route path="/page3" exact component={Page3} />
        <Route path="/" exact component={Home} />
      </Switch>
    </App>
  </Router>
  , 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

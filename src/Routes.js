import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from 'Pages/Main';
import Search from 'Pages/Search';
import Downloads from 'Pages/Downloads/Downloads';
import Blog from 'Pages/Blog/Blog';
import Contact from 'Pages/Contact/Contact';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/downloads" component={Downloads} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

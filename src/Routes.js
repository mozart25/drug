import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Search from 'Pages/Search';
import Downloads from 'Pages/Downloads/Downloads';
import Blog from 'Pages/Blog/Blog';
import Contact from 'Pages/Contact/Contact';
import Acetaminophen from 'Pages/Drug/Acetaminophen';
import Amlodipine from 'Pages/Drug/Amlodipine';
import Escitalopram from 'Pages/Drug/Escitalopram';
import Losartan from 'Pages/Drug/Losartan';
import Olmesartan from 'Pages/Drug/Olmesartan';
import Valsartan from 'Pages/Drug/Valsartan';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/downloads" component={Downloads} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/acetaminophen" component={Acetaminophen} />
          <Route exact path="/amlodipine" component={Amlodipine} />
          <Route exact path="/escitalopram" component={Escitalopram} />
          <Route exact path="/losartan" component={Losartan} />
          <Route exact path="/olmesartan" component={Olmesartan} />
          <Route exact path="/valsartan" component={Valsartan} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

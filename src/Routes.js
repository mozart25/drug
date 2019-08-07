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
import Recommendation from 'Pages/Recommendation/Recommendation';
import Solution from 'Pages/Solution/Solution';
import Sub from 'Pages/Solution/Sub';
import Customization from 'Pages/Customization/Customization';
import Supercomputer from 'Pages/Supercomputer/Supercomputer';
import Interaction from 'Pages/Interaction/Interaction';
import Interaction2 from 'Pages/Interaction/Interaction2';
import SearchAlgorithm from 'Pages/SearchAlgorithm/SearchAlgorithm';

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
          <Route exact path="/recommendation" component={Recommendation} />
          <Route exact path="/solution" component={Solution} />
          <Route exact path="/sub" component={Sub} />
          <Route exact path="/customization" component={Customization} />
          <Route exact path="/supercomputer" component={Supercomputer} />
          <Route exact path="/interaction" component={Interaction} />
          <Route exact path="/interaction2" component={Interaction2} />
          <Route exact path="/searchalgorithm" component={SearchAlgorithm} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

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
          <Route exact path="/services/integration" component={Search} />
          <Route exact path="/downloads" component={Downloads} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services/acetaminophen" component={Acetaminophen} />
          <Route exact path="/services/amlodipine" component={Amlodipine} />
          <Route exact path="/services/escitalopram" component={Escitalopram} />
          <Route exact path="/services/losartan" component={Losartan} />
          <Route exact path="/services/olmesartan" component={Olmesartan} />
          <Route exact path="/services/valsartan" component={Valsartan} />
          <Route exact path="/services/process" component={Recommendation} />
          <Route exact path="/services/solution" component={Solution} />
          <Route exact path="/services/sub" component={Sub} />
          <Route exact path="/services/estimates" component={Customization} />
          <Route exact path="/services/supercomputer" component={Supercomputer} />
          <Route exact path="/services/interaction" component={Interaction} />
          <Route exact path="/services/interaction2" component={Interaction2} />
          <Route exact path="/services/recommendation" component={SearchAlgorithm} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

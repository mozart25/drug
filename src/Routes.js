import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from 'Pages/Search';
import PredictionSolution from 'Pages/PredictionSolution';
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
import WholeSolution from 'Pages/Solution/Wholesolution';
import Sub from 'Pages/Solution/Sub';
import Customization from 'Pages/Customization/Customization';
import Supercomputer from 'Pages/Supercomputer/Supercomputer';
import Interaction from 'Pages/Interaction/Interaction';
import Interaction2 from 'Pages/Interaction/Interaction2';
import InteractionNew from 'Pages/Interaction/Interaction_new';
import InteractionNew2 from 'Pages/Interaction/Interaction2_new';
import SearchAlgorithm from 'Pages/SearchAlgorithm/SearchAlgorithm';
import Etc from 'Pages/Etc/Etc';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/services/integration" component={Search} />
          <Route
            exact
            path="/services/predictionsolution"
            component={PredictionSolution}
          />
          <Route exact path="/downloads" component={Downloads} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/services/acetaminophen"
            component={Acetaminophen}
          />
          <Route exact path="/services/amlodipine" component={Amlodipine} />
          <Route exact path="/services/escitalopram" component={Escitalopram} />
          <Route exact path="/services/losartan" component={Losartan} />
          <Route exact path="/services/olmesartan" component={Olmesartan} />
          <Route exact path="/services/valsartan" component={Valsartan} />
          <Route exact path="/services/process" component={Recommendation} />
          <Route exact path="/services/solution" component={Solution} />
          <Route
            exact
            path="/services/wholesolution"
            component={WholeSolution}
          />
          <Route exact path="/services/sub" component={Sub} />
          <Route exact path="/services/estimates" component={Customization} />
          <Route
            exact
            path="/services/supercomputer"
            component={Supercomputer}
          />
          <Route exact path="/services/interaction" component={Interaction} />
          <Route
            exact
            path="/services/secondinteraction"
            component={Interaction2}
          />
          <Route
            exact
            path="/services/interactionNew"
            component={InteractionNew}
          />
          <Route
            exact
            path="/services/secondinteractionNew"
            component={InteractionNew2}
          />
          <Route
            exact
            path="/services/recommendation"
            component={SearchAlgorithm}
          />
          <Route exact path="/services/wholeprocess" component={Etc} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

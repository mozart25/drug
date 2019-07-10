import React from 'react';
import './Blog.scss';
import { withRouter } from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';

class Blog extends React.Component {

  render() {
    return (
      <div className="search-wrapper">
        <header className="header-bg">
          <Navigation />
        </header>
      </div>
    );
  }
}

export default withRouter(Blog);

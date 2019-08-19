import React from 'react';
import './Header.scss'

class Header extends React.Component {
  render() {
    return (
      <header role="banner" className="NavMain-StyledNavbar-module--cls1--3GekH navbar navbar-expand navbar-dark">
        <img className="header-icon" src={require(`Components/Header/bioai_logo.png`)} style={{width: "67px"}}alt=""/>
        <div className="d-none d-md-flex navbar-nav header-menu" role="navigation" id="top">
          <a href="/" data-rb-event-key="/" className="NavMain-StyledNavLink-module--cls1--3NJV5 nav-link">About</a>
          <a href="/getting-started/introduction" data-rb-event-key="/getting-started/introduction" className="NavMain-StyledNavLink-module--cls1--3NJV5 nav-link">Research</a>
          <a href="/components/alerts" data-rb-event-key="/components/alerts" className="NavMain-StyledNavLink-module--cls1--3NJV5 nav-link">Services</a>
          <a href="/components/alerts" data-rb-event-key="/components/alerts" className="NavMain-StyledNavLink-module--cls1--3NJV5 nav-link">Team</a>
          <a href="/components/alerts" data-rb-event-key="/components/alerts" className="NavMain-StyledNavLink-module--cls1--3NJV5 nav-link">Contact</a>
        </div>
     </header>
    )
  }
}

export default Header;

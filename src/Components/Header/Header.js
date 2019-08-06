import React from 'react';
import './Header.scss'

class Header extends React.Component {
  render() {
    return (
      <header role="banner" className="NavMain-StyledNavbar-module--cls1--3GekH navbar navbar-expand navbar-dark">
        <a href="#rb-docs-content" tabIndex={0} className="NavMain-SkipToContentLink-module--cls2--2gF78 NavMain-SkipToContentLink-module--cls1--3FRsk sr-only sr-only-focusable bg-primary text-white px-4 py-2 mr-2">
          Skip to content
        </a>
       <a href="/" className="navbar-brand" />
        <div className="d-none d-md-flex navbar-nav" role="navigation" id="top">
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


import React from 'react';
import './Search.scss'

class Search extends React.Component {
  render() {
    return (
      <div className="search-wrapper">
        <nav className="navbar fixed-top navbar-expand search-bar justify-content-center justify-content-sm-end align-items-center d-flex">
          <form class="form-inline" action="/unearth/q" accept-charset="UTF-8" method="get">
            <input name="utf8" type="hidden" value="✓" />
            <div class="search-group d-none d-sm-block">
              <select name="searcher" id="searcher" class="form-control input-md">
                <option value="drugs">Drugs</option>
                <option value="bio_entities">Targets</option>
                <option value="pathways">Pathways</option>
                <option value="indications">Indications</option>
              </select>
              <div class="drugbank-icon icon-arrow-down"></div>
            </div>
            <div class="search-group">
              <input type="text" name="query" id="query" class="search-query" />
              <div class="drugbank-icon icon-search"></div>
            </div>
          </form>
        </nav>
      </div>
    )
  }
}

export default Search;

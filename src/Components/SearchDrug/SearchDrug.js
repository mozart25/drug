import React from 'react';
import { MDBCol, MDBIcon } from 'mdbreact';
import './SearchDrug.scss';

const SearchDrug = () => (
  <MDBCol md="6">
    <form className="form-inline mt-4 mb-4">
      <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      <MDBIcon icon="search" />
    </form>
  </MDBCol>
);

export default SearchDrug;

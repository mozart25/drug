import React from 'react';
import { MDBCol, MDBIcon } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import './SearchSolution.scss';

class SearchSolution extends React.Component {
  constructor() {
  super();

  this.state = {
    keyword : '',
    isResultOn : false,
  }
}

  handleKeyPress = (e) => {
    if (e.key === "Enter"){
      this.doSearch();
    }
  }

  keywordChange = (e) => {
  this.setState(
    {
      isResultOn: false,
      keyword: e.target.value
    }
  );
  }

  doSearch = () => {
    if (this.state.keyword.length < 2) {
      alert("2글자 이상 입력해주세요.")
    } else {
      this.setState(
        {
          isResultOn: true
        }
      );
    }
  }

  compareName = () => {
    const solution_list = ["Deep learning Drug-Drug Interaction"];

    for (var i = 0; i < solution_list.length; i++) {
      if (this.state.keyword.toLowerCase().localeCompare(solution_list[i].toLowerCase()) === 0) {
        return solution_list[i]
      }
    }
  }

  movePage = (e) => {
    window.parent.location.href="http://localhost:3000/recommendation"
    console.log(this.compareName)
  }

  render() {

    return (
      <MDBCol md="6">
        <form className="form-inline mt-4 mb-4" style={{marginLeft: "0px"}}>
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Deep learning Drug-Drug Interaction"
            aria-label="Search"
            value={this.state.keyword}
            onChange={this.keywordChange}
            onKeyDown={this.handleKeyPress}
          />
          <MDBIcon icon="search" />
        </form>
        <div className="search-sol-result" onClick = {(e)=>this.movePage(e)} >{this.compareName()}</div>
      </MDBCol>
    )
  }
  }
export default withRouter(SearchSolution);

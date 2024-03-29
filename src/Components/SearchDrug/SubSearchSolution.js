import React from 'react';
import { MDBCol, MDBIcon } from 'mdbreact';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from 'react-router-dom';
import './SearchSolution.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SubSearchSolution extends React.Component {
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
    const solution_list = ["Drug-Drug Interaction"];

    for (var i = 0; i < solution_list.length; i++) {
      if (this.state.keyword.toLowerCase().localeCompare(solution_list[i].toLowerCase()) === 0) {
        return solution_list[i]
      }
    }
  }

  movePage = (e) => {
    window.location.href="https://bioai.kr/services/wholeprocess"
  }

  render() {

    return (
      <MDBCol className="search-sol-wrapper">
        <form className="form-inline mt-4 mb-4 search-sol-form" style={{marginLeft: "0px"}}>
          <input
            className="form-control form-control-sm ml-3 w-75 search-sol-width"
            type="text"
            placeholder="Drug-Drug Interaction"
            aria-label="Search"
            value={this.state.keyword}
            onChange={this.keywordChange}
            onKeyDown={this.handleKeyPress}
          />
          <FontAwesomeIcon icon={faSearch} className="final-icon" style={{ color: 'white' }} onClick = {(e)=>this.movePage(e)} />
        </form>
        <div className="search-sol-result" onClick = {(e)=>this.movePage(e)} >{this.compareName()}</div>
      </MDBCol>
    )
  }
  }
export default withRouter(SubSearchSolution);

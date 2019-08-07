import React from 'react';
import { MDBCol, MDBIcon } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import './SearchDrug.scss';

class SearchDrug extends React.Component {
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
    const drug_list = ["Acetaminophen", "Escitalopram", "Amlodipine", "Valsartan", "Losartan", "Olmesartan"];

    for (var i = 0; i < drug_list.length; i++) {
      if (this.state.keyword.toLowerCase().localeCompare(drug_list[i].toLowerCase()) === 0) {
        return drug_list[i]
      }
    }
  }

  movePage = (e) => {
    this.props.history.push(`/${this.compareName().toLowerCase()}`)
    console.log(this.compareName)
  }

  render() {

    return (
      <MDBCol md="6">
        <form className="form-search-wrapper">
          <input
            className="form-control form-control-sm ml-3 w-76 search1"
            type="text"
            placeholder="Acetaminophen"
            aria-label="Search"
            value={this.state.keyword}
            onChange={this.keywordChange}
            onKeyDown={this.handleKeyPress}
          />
          <input
            className="form-control form-control-sm ml-3 w-76 search2"
            type="text"
            placeholder="Escitalopram"
            aria-label="Search"
            value={this.state.keyword}
            onChange={this.keywordChange}
            onKeyDown={this.handleKeyPress}
          />
          <MDBIcon icon="search" size={100} className="search3"/>
        </form>
        <div className="search-result" onClick = {(e)=>this.movePage(e)} >{this.compareName()}</div>
      </MDBCol>
    )
  }
  }
export default withRouter(SearchDrug);

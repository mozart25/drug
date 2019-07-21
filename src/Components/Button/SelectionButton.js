import React from 'react';
import './SelectionButton.scss'

class SelectionButton extends React.Component {
  render() {
    return (
      <div className="col-md-4 selection_option form-check">
        <label>
          <div className="card-box tilebox-one border rounded p-3 mb-3" id="box-629">
            <div className="float-right" id="form-0">
              <input type="radio" name={this.props.name} id="148_629_0" defaultValue="629[0]" />
              <input type="hidden" name="hidden_148_629[0]" id="hidden_148_629_0" defaultValue="1.0_2" />
              <input type="hidden" name="title" id="title" defaultValue="PC용 웹서비스(반응형웹)" />
            </div>
            <div className="muted font-weight-bold">
              {this.props.service}
            </div>
            <small>
              <span className="badge badge-success">곱하기</span>
              <span className="badge badge-dark text-white">
                1.0배
              </span>
            </small>
            <div className="muted small mt-1">PC와 모바일에서 모두 대응하도록 제작하지만 웹앱과 비교해 모바일에서 사용성이 떨어집니다</div>
          </div>
        </label>
      </div>
    )
  }
}

export default SelectionButton;

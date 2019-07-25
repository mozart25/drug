import React from 'react';
import './FinishButton.scss'
import { FaCheck } from 'react-icons/fa';


class FinishButton extends React.Component {
  render() {
    return (
        <button className="btn-finish"><FaCheck size={40} />Selected</button>
    )
  }
}

export default FinishButton;

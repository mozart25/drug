import React from 'react';
import './loading.scss';
const Loading = () => {
  return (
    <div className="loader">
      <div className="loader_inner"></div>
      <div className="inner_text">calculating..</div>
    </div>
  );
};
export default Loading;
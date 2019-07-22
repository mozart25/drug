import React from 'react';
import './Supercomputer.scss';

class Supercomputer extends React.Component {

  render() {
    return (
      <div className='supercomputer-container'>
        <div className='s-main'>
          <div className='s-main-wrapper'>
            <hr className="s-interior"/>
            <h1> Easy Supercomputer use Service </h1>
          </div>


          <div className='s-main-introduce'>
            <h2>Optimize Parallel Computer Use</h2>
            <p> Deep Learning models uses a lot of computational power. Because training a model with CPU takes such a long time, GPU is widely used. GPU performance has a great impact on the learning speed and performance of the model. However, since GPU's performance cannot grow indefinitely, optimization of performance by using parallel processing technology is in need. In multi-GPU situations, we, BioAI optimizes models through GPU parallel processing technology to maximize time, memory, and efficiency performance compared to single GPUs to maximize efficiency of its operation.</p>
          </div>
        </div>
        <div>

        </div>

        <div className="s-usage">
          <img src={require(`./mac.png`)} alt=""/>
        </div>
      </div>
    );
  }
}

export default Supercomputer;

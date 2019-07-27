import React from 'react';
import './Supercomputer.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import CanvasJSReact from './canvasjs.react';
import Clock from 'react-live-clock';
import Battery from '../../Components/Battery/Battery';
import Battery2 from '../../Components/Battery/Battery2';
import Battery3 from '../../Components/Battery/Battery3';
import Battery4 from '../../Components/Battery/Battery4';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";


var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var updateInterval = 500;

class Supercomputer extends React.Component {

  constructor() {

  super();

  this.state = {
   gpuData:[],
   currentGpuA : null,
   currentGpuB : null,
  };
}
  componentDidMount() {
    setInterval(this.updateChart, updateInterval);

    setInterval( ()=> {
      this.setState({
        currentGpuA: Math.floor((Math.random() * (100-85+1)) + 85),
        currentGpuB: Math.floor((Math.random() * (100-85+1)) + 85)

      })

    }, 1000);
  }


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
            <p> {`Deep Learning models uses a lot of computational power.
                  Because training a model with CPU takes such a long time,
                  GPU is widely used. GPU performance has a great impact on
                  the learning speed and performance of the model. However,
                  since GPU's performance cannot grow indefinitely, optimization
                  of performance by using parallel processing technology is in need.
                  In multi-GPU situations, we, BioAI optimizes models through GPU
                  parallel processing technology to maximize time, memory, and
                  efficiency performance compared to single GPUs to maximize
                  efficiency of its operation.`}</p>
          </div>
        </div>

        <div className="s-usage">
          <img className="final-mac-img" src={require(`./mac.png`)} alt=""/>
            <div className="gpu-total-wrapper">
              <div>gpu </div>
              <div>memory </div>
              <div>usage </div>
          </div>
        </div>


        <div className="s-footer">
          <div className="s-footer-top">
            <span className="s-footer-text"> Parallel Computing Optimization Task </span>
           </div>
          <p>
          {`BioAI performs GPU parallelization optimization in a variety of
            ways to help users work faster. BioAI basically uses Pytorch tool
            and applied data parallelism for work efficiency. In brief, the
            data parallel operation, involves dividing the work by “scatter”
            operation and aggregating the work by “gather” operation. After
            a gather operation, computations performed on a specific GPU results
            in memory imbalance and increases the inefficiency of the operation.
            This will cause inefficiency of work.In order to reduce memory imbalance,
            not perform operations on a specific gpu, but rather to combine them after
            the operation ends on each GPU. Modify loss function will resolve these
            problems. Finally, optimization through distributed learning can be done.
            Distributed learning is optimized in multi-computer environments rather
            than in a single computer environment by utilizing the apex package
            provided by Nvida. BioAi will optimize parallelism in a variety of
            ways to provide users with a pleasant working environment.`}</p>
        </div>
      </div>
    );
  }
}

export default Supercomputer;

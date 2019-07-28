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
   curTime : null,
   currentGpuA : null,
   currentGpuB : null,
  };
}
  componentDidMount() {
    setInterval(this.updateChart, updateInterval);

    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }


  render() {

    const percentage =  Math.floor((Math.random() * (100-85+1)) + 85);

    const efficiency_1 = ((Math.random() * (100-80+1)) + 80).toFixed(2);
    const efficiency_2 = ((Math.random() * (100-80+1)) + 80).toFixed(2);
    const efficiency_3 = ((Math.random() * (100-80+1)) + 80).toFixed(2);
    const efficiency_4 = ((Math.random() * (100-80+1)) + 80).toFixed(2);

    const Example = (props)=> {
      return (
        <div className="s-c-example">
          <div className="gpu-items-wrapper">
            <span id ="gpu-items-text"> {props.value}</span>
            <span id ="gpu-items-digit"> {`${percentage}MB`} </span>
          </div>
          <p>{props.label}</p>
            <div style={{ float:'left', width: 100 }}>{props.children}</div>
            <div className="status-checking-box">
              <div className="status-wrapper">
                <div className="status-box-used"></div> <span>Used </span>
              </div>
              <div className="status-wrapper">
                <div className="status-box-avail"></div> <span>Available </span>
              </div>
            </div>
        </div>
      );
    }

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
              <div className="gpu-total-first">GPU
                <div className="gpu-img">
                  <img src={require(`./gpu.png`)} style={{width: "49%"}} alt=""/>
                  <table>
                    <tr className="eff-gpu">
                      <th colSpan="2">GPU Average</th>
                    </tr>
                    <tr className="eff-gpu">
                      <td> GPU1 </td>
                      <td> {efficiency_1}% </td>
                    </tr>
                    <tr className="eff-gpu">
                      <td> GPU2 </td>
                      <td> {efficiency_2}% </td>
                    </tr>
                    <tr className="eff-gpu">
                      <td> GPU1 </td>
                      <td> {efficiency_3}% </td>
                    </tr>
                    <tr className="eff-gpu">
                      <td> GPU1 </td>
                      <td> {efficiency_4}% </td>
                    </tr>
                  </table>
               </div>
               <div className="gpu-battery-wrapper">
                <Battery
                id="GPU1"
                randValue={efficiency_1}
                />
                <Battery2
                id="GPU2"
                randValue={efficiency_2}
                />
                <Battery3
                id="GPU3"
                randValue={efficiency_3}
                />
                <Battery4
                id="GPU4"
                randValue={efficiency_4}
                />
              </div>

              </div>
              <div className="gpu-total-second">memory
                <div className="s-memory-wrapper">
                  <Example label="GPU1">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        strokeLinecap: "butt"
                      })}
                    />
                  </Example>
                </div>

              </div>





              <div className="gpu-total-third">usage
                <div>
                  <p>{this.state.curTime}</p>
                </div>
              </div>
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

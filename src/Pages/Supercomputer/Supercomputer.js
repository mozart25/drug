import React from 'react';
import './Supercomputer.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Helmet } from 'react-helmet';
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
import ApexCharts from 'apexcharts';
import ReactApexCharts from 'react-apexcharts'

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

     options: {
          plotOptions: {
            bar: {
              horizontal: true,
              distributed: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['GPU1','GPU2','GPU3','GPU4' ],
          },
        },
    series: [{
      data: [null, null, null, null],

  }],
  }
  ;
}
  // componentDidMount() {
  //   setInterval(this.updateChart, updateInterval);
  // 
  //   setInterval( () => {
  //     this.setState({
  //       curTime : new Date().toLocaleString()
  //     })
  //   },1000)
  //
  // }


  render() {

    const percentage =  Math.floor((Math.random() * (100-85+1)) + 85);
    const memoryMult = (percentage/100 * 32480).toFixed(2);
    const percentage2 =  Math.floor((Math.random() * (100-85+1)) + 85);
    const memoryMult2 = (percentage2/100 * 32480).toFixed(2);
    const percentage3 =  Math.floor((Math.random() * (100-85+1)) + 85);
    const memoryMult3 = (percentage3/100 * 32480).toFixed(2);
    const percentage4 =  Math.floor((Math.random() * (100-85+1)) + 85);
    const memoryMult4 = (percentage4/100 * 32480).toFixed(2);

    const battery_1 = ((Math.random() * (100-80+1)) + 80).toFixed(2);
    const battery_2 = ((Math.random() * (100-80+1)) + 80).toFixed(2);
    const battery_3 = ((Math.random() * (100-80+1)) + 80).toFixed(2);
    const battery_4 = ((Math.random() * (100-80+1)) + 80).toFixed(2);

    const efficiency_1 = ((Math.random() * (30-20+1)) + 20).toFixed(2);
    const efficiency_2 = ((Math.random() * (30-20+1)) + 20).toFixed(2);
    const efficiency_3 = ((Math.random() * (30-20+1)) + 20).toFixed(2);
    const efficiency_4 = ((Math.random() * (30-20+1)) + 20).toFixed(2);

    const effMult1 = Math.floor((efficiency_1/100)*827)
    const effMult2 = Math.floor((efficiency_2/100)*827)
    const effMult3 = Math.floor((efficiency_3/100)*827)
    const effMult4 = Math.floor((efficiency_4/100)*827)



    const series = [{
      data: [effMult1, effMult2, effMult3, effMult4],
  }]

    const Example = (props)=> {

      if (props.label ==="GPU1") {

        return (
          <div className="s-c-example">
            <Helmet>
              <title>Easy Supercomputer Use Service-BioAI</title>
            </Helmet>
            <p id="gpu-header">{props.label}</p>
            <div className="gpu-items-wrapper">
              <span id ="gpu-items-text"> {props.value}</span>
              <div>
                <span style={{fontSize:"11px", fontWeight:"800"}}id ="gpu-items-digit"> {`${memoryMult}MB`} </span>
                <p style={{fontSize: "5px", textAlign:"right"}}>/32,480MB</p>
              </div>
            </div>
              <div className="gpu-prog-bar">{props.children}</div>
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
      } else if (props.label ==="GPU2") {
        return (
          <div className="s-c-example">
            <p id="gpu-header">{props.label}</p>
            <div className="gpu-items-wrapper">
              <span id ="gpu-items-text"> {props.value}</span>
              <div>
                <span style={{fontSize:"11px", fontWeight:"800"}}id ="gpu-items-digit"> {`${memoryMult2}MB`} </span>
                <p style={{fontSize: "5px", textAlign:"right"}}>/32,480MB</p>
              </div>
            </div>
              <div className="gpu-prog-bar">{props.children}</div>
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
      } else if (props.label ==="GPU3") {
        return (
          <div className="s-c-example">
            <p id="gpu-header">{props.label}</p>
            <div className="gpu-items-wrapper">
              <span id ="gpu-items-text"> {props.value}</span>
              <div>
                <span style={{fontSize:"11px", fontWeight:"800"}}id ="gpu-items-digit"> {`${memoryMult3}MB`} </span>
                <p style={{fontSize: "5px", textAlign:"right"}}>/32,480MB</p>
              </div>
            </div>
              <div className="gpu-prog-bar">{props.children}</div>
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
      } else {
        return (
          <div className="s-c-example">
            <p id="gpu-header">{props.label}</p>
            <div className="gpu-items-wrapper">
              <span id ="gpu-items-text"> {props.value}</span>
              <div>
                <span style={{fontSize:"11px", fontWeight:"800"}}id ="gpu-items-digit"> {`${memoryMult4}MB`} </span>
                <p style={{fontSize: "5px", textAlign:"right"}}>/32,480MB</p>
              </div>
            </div>
              <div className="gpu-prog-bar">{props.children}</div>
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
                  parallel processing technology to maximize time, memory, and efficiency
                  performance compared to single GPUs to maximize efficiency of its operation.
                `}</p>
            <br/>
            <p>The following graph below represent as follows.</p>
            <br/>
            <p>1. GPU: The GPU utilization rate is displayed in real time with a numeric value and a graph.</p>
            <br/>
            <p>2. MEMORY: Graphs and figures show how memory allocations have become per GPU.</p>
            <br/>
            <p>3. USAGE : Shows the total usage of GPUs that users have used so far.</p>

          </div>
        </div>

        <div className="s-usage">
          <img className="final-mac-img" src={require(`./img_back2.png`)} alt=""/>
            <div className="gpu-total-wrapper">
              <div className="gpu-total-first gpu-header-text"><div id="gpu-temp-header">GPU</div>
              <div className="gpu-img">
                <div>
                  <table>
                    <tr className="eff-gpu">
                      <th colSpan="2">GPU Average</th>
                    </tr>
                    <tr className="eff-gpu-sub">
                      <td> GPU1 </td>
                      <td className="eff-sub-per"> {battery_1}% </td>
                    </tr>
                    <tr className="eff-gpu-sub">
                      <td> GPU2 </td>
                      <td className="eff-sub-per"> {battery_2}% </td>
                    </tr>
                    <tr className="eff-gpu-sub">
                      <td> GPU1 </td>
                      <td className="eff-sub-per"> {battery_3}% </td>
                    </tr>
                    <tr className="eff-gpu-sub">
                      <td> GPU1 </td>
                      <td className="eff-sub-per"> {battery_4}% </td>
                    </tr>
                  </table>
                </div>
                 <div className="gpu-battery-wrapper">
                  <Battery
                  id="GPU1"
                  randValue={battery_1}
                  />
                  <Battery2
                  id="GPU2"
                  randValue={battery_2}
                  />
                  <Battery3
                  id="GPU3"
                  randValue={battery_3}
                  />
                  <Battery4
                  id="GPU4"
                  randValue={battery_4}
                  />
                </div>
              </div>
              <div className="gpu-total-second gpu-header-text"><div id="gpu-temp-header">MEMORY</div>

                <div className="gpu-second-wapper">
                  <Example label="GPU1">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        strokeLinecap: "round",
                        trailColor: '#d6d6d6',
                      })}
                    />
                  </Example>

                  <Example label="GPU2">
                    <CircularProgressbar
                      value={percentage2}
                      text={`${percentage2}%`}
                      styles={buildStyles({
                        strokeLinecap: "round",
                        trailColor: '#d6d6d6',
                      })}
                    />
                  </Example>
                </div>
                <div className="gpu-second-wapper">
                  <Example label="GPU3">
                    <CircularProgressbar
                      value={percentage3}
                      text={`${percentage3}%`}
                      styles={buildStyles({
                        strokeLinecap: "round",
                        trailColor: '#d6d6d6',
                      })}
                    />
                  </Example>

                  <Example label="GPU4">
                    <CircularProgressbar
                      value={percentage4}
                      text={`${percentage4}%`}
                      styles={buildStyles({
                        strokeLinecap: "round",
                        trailColor: '#d6d6d6',
                      })}
                    />
                  </Example>
                </div>
              </div>

              </div>


              <div className="gpu-total-third gpu-header-text"><div id="gpu-temp-header">USAGE</div>
                <div style={{width:"100%"}}>
                  <div id="chart">
                    <ReactApexCharts options={this.state.options} series={series} type="bar" height="315" />
                  </div>
                </div>
                <div className="third-total-usage">
                  <div id="third-status-final"> Total Usage </div>
                  <p id="check-time-style"> {effMult1+effMult2+effMult3+effMult4}GB</p>
                  <p id="checking-time">{this.state.curTime}</p>
                </div>
                <div className="third-total-usage">

                  <table id="third-status">
                    <tr>
                      <td> GPU1 </td>
                      <td className="eff-sub-per-third"> {effMult1}GB /827GB </td>
                    </tr>
                    <tr>
                      <td> GPU2 </td>
                      <td className="eff-sub-per-third"> {effMult2}GB /827GB  </td>
                    </tr>
                    <tr>
                      <td> GPU3 </td>
                      <td className="eff-sub-per-third"> {effMult3}GB /827GB  </td>
                    </tr>
                    <tr>
                      <td> GPU4 </td>
                      <td className="eff-sub-per-third"> {effMult4}GB /827GB  </td>
                    </tr>
                  </table>


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

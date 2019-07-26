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

  this.updateChart = this.updateChart.bind(this);

  this.state = {
   gpuData:[],
  };
}
  componentDidMount() {
    setInterval(this.updateChart, updateInterval);
  }

  updateChart() {
    var temp =[];
    var dpsColor, dpsTotal = 0, deltaY, yVal;
    var dps = this.chart.options.data[0].dataPoints;
    var chart = this.chart;
    for (var i = 0; i < dps.length; i++) {
      deltaY = Math.round(2 + Math.random() *(-2-2));
      yVal = deltaY + dps[i].y > 0 ? (deltaY + dps[i].y < 500 ? dps[i].y + deltaY : 500) : 0;
      dpsColor = yVal >= 220 ? "#FD0E35" : yVal >= 210 ? "#FF6037" : yVal >= 200 ? "#00FEFE" : "#00e640";
      dps[i] = {label: "GPU "+(i+1) , y: yVal, color: dpsColor};
      dpsTotal += yVal;
    }

    chart.options.data[0].dataPoints = dps;
    chart.options.title.text = `Total Usage ${dpsTotal}GB`

    console.log("check dpsTotal", dpsTotal)
    console.log("chart.options.data[0].dataPoints", chart.options.data[0].dataPoints)
    console.log("dpsdpsdps", dps)
    console.log("gpudatagpudata", this.state.gpuData)
    chart.render()

  }


  render() {

    const percentage_a = 64;
    const percentage_b = 53;
    const percentage_c = 85;
    const percentage_d = 77;

    const efficiency_1 = ((Math.random() * (100-80+1)) + 80).toFixed(2);
    const efficiency_2 = ((Math.random() * (100-80+1)) + 80).toFixed(2);
    const efficiency_3 = ((Math.random() * (100-80+1)) + 80).toFixed(2);
    const efficiency_4 = ((Math.random() * (100-80+1)) + 80).toFixed(2);

    const temp_a1 = Math.floor((Math.random() * (100-85+1)) + 85);
    const temp_a2 = Math.floor((Math.random() * (100-85+1)) + 85);
    const temp_b1 = Math.floor((Math.random() * (100-85+1)) + 85);
    const temp_b2 = Math.floor((Math.random() * (100-85+1)) + 85);
    const temp_c1 = Math.floor((Math.random() * (100-85+1)) + 85);
    const temp_c2 = Math.floor((Math.random() * (100-85+1)) + 85);
    const temp_d1 = Math.floor((Math.random() * (100-85+1)) + 85);
    const temp_d2 = Math.floor((Math.random() * (100-85+1)) + 85);



    const Example = (props)=> {
      return (
          <div className="s-c-example">
            <div className="gpu-items-wrapper">
              <span id ="gpu-items-text"> {props.value}</span>
              <span id ="gpu-items-digit"> {`${percentage_a}MB`} </span>
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

    const options = {
      backgroundColor: null,
      width: 310,
      height:380,
			theme: "light1",
			title: {
				text: "CPU Usage",
        verticalAlign: "bottom",
        horizontalAlign: "center",
			},
			axisY: {
				suffix: "GB",
        gridThickness: 0,
			maximum: 500
			},
			data: [{
				type: "column",
				yValueFormatString: "#,###'GB'",
				indexLabel: "{y}",
				dataPoints: [
					{ label: "GPU 1", y: 206 },
					{ label: "GPU 2", y: 200 },
					{ label: "GPU 3", y: 190 },
					{ label: "GPU 4", y: 231 },
				]
			}]
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
          <div className="s-gpu-wrapper">
            <p className="s-gpu-service"> GPU </p>
            <div className="gpu-status-wrapper">
              <img src={require(`./gpu.png`)} alt=""/>
              <div className="temp-wrapper">
                <p style={{marginBottom: "20px", fontColor: "#fff"}}> GPU Average </p>
                <p>{`GPU1 ${efficiency_1}%`}</p>
                <p>{`GPU2 ${efficiency_2}%`}</p>
                <p>{`GPU3 ${efficiency_3}%`}</p>
                <p>{`GPU4 ${efficiency_4}%`}</p>
             </div>
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

          <img src={require(`./mac.png`)} alt=""/>
          <div className="s-memory-wrapper">
            <p className="s-m-service"> Memory </p>
            <div className="s-m-progress-bar">
              <Example value="GPU1">
                <AnimatedProgressProvider
                  valueStart={temp_a1}
                  valueEnd={temp_a2}
                  duration={0.7}
                  easingFunction={easeQuadInOut}
                  repeat
                >
                  {value => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        styles={buildStyles(
                          {
                            pathTransition: "none",
                            pathColor: `rgba(0, 230, 64, 1)`,
                            textColor: `rgba(0, 230, 64, 1)`
                          }
                        )
                      }
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </Example>
              <Example value="GPU2">
                <AnimatedProgressProvider
                  valueStart={temp_b1}
                  valueEnd={temp_b2}
                  duration={0.7}
                  easingFunction={easeQuadInOut}
                  repeat
                >
                  {value => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        styles={buildStyles(
                          {
                            pathTransition: "none",
                            pathColor: `rgba(0, 230, 64, 1)`,
                            textColor: `rgba(0, 230, 64, 1)`
                          }
                        )
                      }
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </Example>
              <Example value="GPU3">
                <AnimatedProgressProvider
                  valueStart={temp_c1}
                  valueEnd={temp_c2}
                  duration={0.7}
                  easingFunction={easeQuadInOut}
                  repeat
                >
                  {value => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        styles={buildStyles(
                          {
                            pathTransition: "none",
                            pathColor: `rgba(0, 230, 64, 1)`,
                            textColor: `rgba(0, 230, 64, 1)`
                          }
                        )
                      }
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </Example>
              <Example value="GPU4">
                <AnimatedProgressProvider
                  valueStart={temp_d1}
                  valueEnd={temp_d2}
                  duration={0.7}
                  easingFunction={easeQuadInOut}
                  repeat
                >
                  {value => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        styles={buildStyles(
                          {
                            pathTransition: "none",
                            pathColor: `rgba(0, 230, 64, 1)`,
                            textColor: `rgba(0, 230, 64, 1)`
                          }
                        )
                      }
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </Example>
            </div>
          </div>
          <div className="s-usage-wrapper">
            <p className="s-m-service"> Usage </p>
            <CanvasJSChart options = {options}
  					 onRef={ref => this.chart = ref}
            />
            <div className="s-m-u-status-wapper">
                <Clock style={{fontFamily: 'Oswald',color:'#FF8C00'}}format={'YYYY/MM/DD HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />
            </div>
          </div>
        </div>

        <div className="s-footer">
          <div className="s-footer-top">
            <span className="s-footer-text"> BioAI</span>
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

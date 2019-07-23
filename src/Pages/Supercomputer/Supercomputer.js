import React from 'react';
import './Supercomputer.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import CanvasJSReact from './canvasjs.react';
import Clock from 'react-live-clock';
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
      yVal = deltaY + dps[i].y > 0 ? (deltaY + dps[i].y < 827 ? dps[i].y + deltaY : 827) : 0;
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
			maximum: 827
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
          <img src={require(`./mac.png`)} alt=""/>
          <div className="s-memory-wrapper">
            <p className="s-m-service"> Memory </p>
            <div className="s-m-progress-bar">
              <Example value="GPU1">
                <CircularProgressbar
                  value={percentage_a}
                  text={`${percentage_a}%`}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `rgba(0, 230, 64, 1)`,
                    textColor: `rgba(0, 230, 64, 1)`
                  })}
                />
              </Example>
              <Example value="GPU2">
                <CircularProgressbar
                  value={percentage_b}
                  text={`${percentage_b}%`}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `rgba(0, 230, 64, 1)`,
                    textColor: `rgba(0, 230, 64, 1)`
                  })}
                />
              </Example>
              <Example value="GPU3">
                <CircularProgressbar
                  value={percentage_c}
                  text={`${percentage_c}%`}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `rgba(0, 230, 64, 1)`,
                    textColor: `rgba(0, 230, 64, 1)`
                  })}
                />
              </Example>
              <Example value="GPU4">
                <CircularProgressbar
                  value={percentage_d}
                  text={`${percentage_d}%`}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `rgba(0, 230, 64, 1)`,
                    textColor: `rgba(0, 230, 64, 1)`
                  })}
                />
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

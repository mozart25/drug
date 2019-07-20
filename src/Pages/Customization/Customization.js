import React from 'react';
import './Customization.scss';


class Customization extends React.Component {

  render() {
    return (
      <div className="custom-wrapper">
        <div className="custom-main">
          <div className="c-main-wrapper">
            <h1>BioAI </h1>
            <h2>Estimate your cost on Drug AI study </h2>
            <p>Choose the category you need to make a rough estimate. </p>
          </div>
        </div>

        <div className="custom-survey">
          <div className="s-wapper">
            <section>
              <h2> AI development from start to finish </h2>
              <p>{`Our service will guide you to apply AI to your current
                  drug studies from the beginning to the end.`} </p>
              <ul>
                <li>{`Our service will help you if you do not know
                      AI or cannot use it properly.`} </li>
                <li>{`You can estimate the approximate cost of development
                      by following the process below. Because this estimate
                      is approximate, the actual cost may vary depending on
                      development time and difficulty.`} </li>
                <li>{`Total estimated time for project completion is about 2~3 months,
                      which can vary depending on the component of the project. You can
                      always discuss with use the progress and timeline.`}</li>
                <li>{`We typically use a Python programming language with scikit-learn
                      for machine learning and PyTorch as deep learning platform.`}</li>
              </ul>

             </section>

             <section>
              <p>what is your current occupation?</p>
             </section>

             <section>
              <p>What is the purpose of your AI development? </p>
             </section>

             <section>
              <p>Do you have any data for analysis?</p>
             </section>

             <section>
              <p> What type of data do you want to analyze? </p>
             </section>

             <section>
              <p> What is the size of your data? </p>
             </section>

             <section>
              <p>  Have you preprocessed your data?  </p>
             </section>

             <section>
              <p>  Which model do you want to use?  </p>
             </section>

             <section>
              <p>  Do you want to get results compared to other models? </p>
             </section>

             <section>
              <p>  Do you want to receive graphs that visualize data and model?  </p>
             </section>

             <section>
              <p>  Do you want to receive a report including the analysis results?  </p>
             </section>



          </div>
        </div>

      </div>
    );
  }
}

export default Customization;

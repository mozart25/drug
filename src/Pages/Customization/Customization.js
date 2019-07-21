import React from 'react';
import './Customization.scss';
import SelectionButton from '../../Components/Button/SelectionButton'


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
              <h2 className="s-m-header"> AI development from start to finish </h2>
              <p id="header-explain">{`Our service will guide you to apply AI to your current
                  drug studies from the beginning to the end.`} </p>
              <ul className="s-m-list">
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
             <div className="question-container">
               <section className="q-quatro">
                  <h3 style={{marginBottom:'30px'}}>What is your current occupation?</h3>
                  <SelectionButton
                  service="Pharmaceutical industry researcher"
                  name='100'/>
                  <SelectionButton
                  service="Academic researcher at university or colleges"
                  name="100"/>
                  <SelectionButton
                  service="Student"
                  name="100"/>
                  <SelectionButton
                  service="Others"
                  name="100"/>
               </section>

               <section>
                <h3 style={{marginBottom: '30px'}}>What is the purpose of your AI development? </h3>
                <SelectionButton
                service="Commercial use"
                name='101'/>
                <SelectionButton
                service="Research"
                name="101"/>
               </section>

               <section>
                <h3 style={{marginBottom: '30px'}}>Do you have any data for analysis?</h3>
                <SelectionButton
                service="Yes"
                name='102'/>
                <SelectionButton
                service="No"
                name="102"
                addition="$700"
                />
               </section>

               <section>
                <h3 style={{marginBottom: '30px'}}> What type of data do you want to analyze? </h3>
                <SelectionButton
                service="Structured data"
                name='103'
                addition="$300"
                />
                <SelectionButton
                service="Image data"
                name="103"
                addition="$900"
                />
                <SelectionButton
                service="Text data"
                name="103"
                addition="$700"
                />
               </section>

               <section>
                <h3 style={{marginBottom: '30px'}}> What is the size of your data? </h3>
                <SelectionButton
                service="x < 10GB"
                name='104'/>
                <SelectionButton
                service="10GB <= x < 100GB"
                name="104"
                addition="$300"
                />
                <SelectionButton
                service="100GB <= x"
                name="104"
                addition="$600"
                />
               </section>

               <section>
                <h3 style={{marginBottom: '30px'}}>  Have you preprocessed your data?  </h3>
                <p style={{fontSize: '17px', marginBottom: '30px'}}>Data preprocessing usually takes such a long time. If you already have techniques to preprocess, we can help with that. Also, we will find right techniques for you if you don’t have. </p>
                <ul className='preprocess-list'>
                  <li>
                    <h3 style={{marginBottom: '30px', marginTop: '20px'}}> Do you need data cleansing? </h3>
                    <p>Let’s assume that you have text data. Your data include the dirty parts caused grammatical errors or typos. We help you with detecting and correcting corrupt and inaccurate data and replace with accurate and validate data. </p>
                    <SelectionButton
                    service="Yes"
                    name="105"
                    addition="$700-$1000"
                    />
                    <SelectionButton
                    service="No"
                    name="105"/>
                  </li>
                  <li>
                    <h3 style={{marginBottom: '30px'}}> Do you need to deal with the missing values? </h3>
                    <p>Although your data contain the missing values, we will provide an optimal solution to deal with them. This process might increase the accuracy of model.</p>
                    <SelectionButton
                    service="Yes"
                    name="106"
                    addition="$100-$400"
                    />
                    <SelectionButton
                    service="No"
                    name="106"/>
                  </li>
                </ul>
               </section>

               <section>
                <h3 style={{marginBottom: '30px'}}>  Which model do you want to use?  </h3>
                <p>Machine learning and deep learning are two main categories of AI model.</p>
                <p>Machine learning : The methods which give power to the systems to automatically determine and boost from experience without being particularly programmed.</p>
                <p>Deep learning : The methods which  automatically acquires representation of information from datasets which contain images, video or text, without recommending well-programmed rules or human domain expertise.</p>
                <p>With our experiences and know-how, we will provide the best learning model according to your study. Also, the related materials such as code, preliminary research paper will be provided.</p>
               </section>
               <SelectionButton
               service="Machine learning only"
               name="107"
               />
               <SelectionButton
               service="Both"
               addition="$500"
               name="107"/>

               <section>
                <h3 style={{marginBottom: '30px'}}> Do you want us to fit the model?</h3>
                <p>This process is called “model training”. We will provide fitting and result from model selection.</p>
                <SelectionButton
                service="Yes"
                name="108"
                addition="$600-$800"
                />
                <SelectionButton
                service="No"
                name="108"/>
               </section>

               <section>
                <h3 style={{marginBottom: '30px'}}>  Do you want us to validate & verify your model?  </h3>
                <p>This process is called “model verification”. We will provide a robust model through work such as hyperparameter tuning, ensemble, optimization, etc.</p>
                <SelectionButton
                service="Yes"
                name="113"
                addition="$200-$300"/>
                <SelectionButton
                service="No"
                name="113"/>
               </section>

               <section>
                <h3 style={{marginBottom: '30px'}}>  Do you want to get results compared to other models?  </h3>
                <SelectionButton
                service="Yes"
                name="109"
                addition="$500"
                />
                <SelectionButton
                service="No"
                name="109"/>
               </section>

               <section>
                <h3 style={{marginBottom: '30px'}}>  Do you want to receive graphs that visualize data and model?  </h3>
                <SelectionButton
                service="Yes"
                name="110"
                addition="$400-$600"/>
                <SelectionButton
                service="No"
                name="110"/>
               </section>

               <section>
                <h3 style={{marginBottom: '30px'}}>  Do you want to receive a report including the analysis results?   </h3>
                <SelectionButton
                service="Yes"
                name="112"
                addition="$200"/>
                <SelectionButton
                service="No"
                name="112"/>
               </section>
             </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Customization;

import React from 'react';
import './Customization.scss';
import SelectionButton from '../../Components/Button/SelectionButton'

class Customization extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    q: false,
    q2: false,
    q5: false,
    selectedList: [],
    totalAmount: 0,
  };
}

  handleClick=(e)=> {
    console.log("e.target.id", e.target.id)
    if (e.target.id === "1") {
      this.setState(
        {
          q: !this.state.q
        }
        ,()=> console.log("check id 1", this.state.q)
      )
      console.log("e.target.id", this.state.q)
    } else if (e.target.id === "2") {
      this.setState(
        {q2: !this.state.q2}
        ,()=> console.log("check id 2", this.state.q2)
      )
      console.log("e.target.id", this.state.q2)
    } else if (e.target.id === "5") {
    this.setState(
      {q5: !this.state.q5}
      ,()=> console.log(this.state.q5)
    )
    console.log(this.state.q5)
  }
  console.log("ID: 1", this.state.q,"ID: 2", this.state.q2,"ID: 5", this.state.q5)

}



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

             <hr/>

               <section className="q-quatro">
                  <h3 style={{marginBottom:'12px'}}>What is your current occupation?</h3>
                  <SelectionButton
                  id={1}
                  action={this.handleClick}
                  service="Pharmaceutical industry researcher"
                  name='100'/>
                  <SelectionButton
                  id={2}
                  action={this.handleClick}
                  service="Academic researcher at university or colleges"
                  name="100"/>
                  <SelectionButton
                  id={3}
                  service="Student"
                  name="100"/>
                  <SelectionButton
                  id={4}
                  service="Others"
                  name="100"/>
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}>What is the purpose of your AI development? </h3>
                <SelectionButton
                id={5}
                action={this.handleClick}
                service="Commercial use"
                name='101'/>
                <SelectionButton
                service="Research"
                name="101"/>
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}>Do you have any data for analysis?</h3>
                <p id="header-explain">If you don’t, we can find data for your study.</p>
                <SelectionButton
                service="Yes"
                name='102'/>
                <SelectionButton
                service="No"
                name="102"
                addition="$500~$800"
                period="1 weeks"
                />
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}> What type of data do you want to analyze? </h3>
                <p id="header-explain">Because the analysis time depends on the type of data, the price will vary.</p>
                <SelectionButton
                service="Structured data"
                name='103'
                addition="$700"
                />
                <SelectionButton
                service="Image data"
                name="103"
                addition="$1400"
                period="3 weeks"
                />
                <SelectionButton
                service="Text data"
                name="103"
                addition="$1000"
                period="2 weeks"
                />
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}> What is the size of your data? </h3>
                <p id="header-explain">Because the analysis time depends on the size of data, the price will vary. </p>
                <SelectionButton
                service="x < 10GB"
                name='104'/>
                <SelectionButton
                service="10GB ≤ x < 100GB"
                name="104"
                addition="$600"
                period="1 weeks"
                />
                <SelectionButton
                service="100GB ≤ x"
                name="104"
                addition="$1200"
                period="2 weeks"
                />
               </section>

               <hr/>

               <section>
                <h3 style={{marginBottom: '12px'}}>  Have you preprocessed your data?  </h3>
                <p id="header-explain">Data preprocessing usually takes such a long time. If you already have techniques to preprocess, we can help with that. Also, we will find right techniques for you if you don’t have. </p>
                <ul className='preprocess-list'>
                  <li className="q-quatro">
                    <h3 style={{marginBottom: '12px', marginTop: '20px'}}> Do you need data cleansing? </h3>
                    <p id="header-explain">Let’s assume that you have text data. Your data include the dirty parts caused grammatical errors or typos. We help you with detecting and correcting corrupt and inaccurate data and replace with accurate and validate data. </p>
                    <SelectionButton
                    service="Yes"
                    name="105"
                    addition="$1,000-$1,500"
                    period="2-3 weeks"
                    />
                    <SelectionButton
                    service="No"
                    name="105"/>
                  </li>
                  <li className="q-quatro">
                    <h3 style={{marginBottom: '12px'}}> Do you need to deal with the missing values? </h3>
                    <p id="header-explain">Although your data contain the missing values, we will provide an optimal solution to deal with them. This process might increase the accuracy of model.</p>
                    <SelectionButton
                    service="Yes"
                    name="106"
                    addition="$200-$500"
                    period="1 weeks"
                    />
                    <SelectionButton
                    service="No"
                    name="106"/>
                  </li>
                </ul>
               </section>

               <hr/>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}>  Which model do you want to use?  </h3>
                <p id="header-explain">Machine learning and deep learning are two main categories of AI model.</p>
                <p id="header-explain"><span id='h-e-bold'>Machine learning</span> : The methods which give power to the systems to automatically determine and boost from experience without being particularly programmed.</p>
                <p id="header-explain"><span id='h-e-bold'>Deep learning</span> : The methods which  automatically acquires representation of information from datasets which contain images, video or text, without recommending well-programmed rules or human domain expertise.</p>
                <p id="header-explain">With our experiences and know-how, we will provide the best learning model according to your study. Also, the related materials such as code, preliminary research paper will be provided.</p>
                 <SelectionButton
                 service="Machine learning only"
                 name="107"
                 />
                 <SelectionButton
                 service="Both"
                 addition="$500"
                 period="1 weeks"
                 name="107"/>
               </section>


               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}> Do you want us to fit the model?</h3>
                <p id="header-explain">This process is called “model training”. We will provide fitting and result from model selection.</p>
                <SelectionButton
                service="Yes"
                name="108"
                addition="$800-$1,600"
                period="2-3 weeks"
                />
                <SelectionButton
                service="No"
                name="108"/>
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}>  Do you want us to validate & verify your model?  </h3>
                <p id="header-explain">This process is called “model verification”. We will provide a robust model through work such as hyperparameter tuning, ensemble, optimization, etc.</p>
                <SelectionButton
                service="Yes"
                name="113"
                addition="$500-$900"
                period="1-2 weeks"
                />
                <SelectionButton
                service="No"
                name="113"/>
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}>  Do you need a comparison of your model performance?  </h3>
                <p id="header-explain">We can compare results with other models to validate the performance of your model. These can be used in a thesis or elsewhere to explain various reasons for your model selection.</p>
                <SelectionButton
                service="Yes"
                name="109"
                addition="$1,000"
                period="2 weeks"
                />
                <SelectionButton
                service="No"
                name="109"/>
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}>  Do you need visualization of data and model?  </h3>
                <p id="header-explain">We can provide not only plots for exploratory data analysis but plots for your model results such as ROC curve and accuracy plot.</p>
                <SelectionButton
                service="Yes"
                name="110"
                addition="$500-$800"
                period="1-2 weeks"
                />
                <SelectionButton
                service="No"
                name="110"/>
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}>  Do you need an analysis final report?  </h3>
                <p id="header-explain">We can provide a clear report that summarizes the above processes.</p>
                <SelectionButton
                service="Yes"
                name="112"
                addition="$600"
                period="1 weeks"
                />
                <SelectionButton
                service="No"
                name="112"/>
               </section>
               <div className="calculation-box" style={{padding: '15px', fontWeight: '400'}}>
                 예상 견적 :
                 <span id="price">{this.state.q} ~ ,000</span> 원
                 <small style={{color: 'gray'}}>(예상 기간: <span id="period_month">1</span>개월)</small>
                 <br />
                 <div style={{lineHeight: '20px'}}>
                   <a className="btn btn-primary new_contact_button" href="#">견적과 함께 문의하기</a>
                   <div style={{fontWeight: '400', fontSize: '14px', color: 'light-gray', marginTop: '5px'}}>문의를 남기시면 견적서 PDF를 보내드립니다</div>
                 </div>
               </div>
             </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Customization;

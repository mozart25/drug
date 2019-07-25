import React from 'react';
import './Customization.scss';
import SelectionButton from '../../Components/Button/SelectionButton';
import Contact from '../../Components/Contact/Contact';
class Customization extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    q7: false,
    q7_count: 0,
    q8: false,
    q9: false,
    q10: false,
    q11: false,
    q12: false,
    q13: false,
    q14: false,
    q15: false,
    q16: false,
    q17: false,
    q18: false,
    q19: false,
    q20: false,
    q21: false,
    q22: false,
    q23: false,
    q24: false,
    q25: false,
    q26: false,
    q27: false,
    q28: false,
    q29: false,
    q30: false,
    totalAmount: 0,
    totalPeriod: 0,
    contactStatus: false,
  };
}

  contactClick=()=> {
    console.log("i clicked that contact")
    this.setState(
      {
        contactStatus: !this.state.contactStatus
      }, ()=> console.log(this.state.contactStatus)
    )
  }

  handleClick=(e)=> {
    // Do you have any data for analysis?
    if (e.target.id ==="7" && this.state.q8 === false) {
      return
    } else if (e.target.id === "8" && this.state.q8 === false) {
      this.setState(
        {
          q8: !this.state.q8,
          totalAmount: this.state.totalAmount + 700,
          q7: false,
          totalPeriod: this.state.totalPeriod + 1
        }
      )
    } else if (e.target.id === "7" && this.state.q7 === false) {
      this.setState(
        {
          q7: !this.state.q7,
          totalAmount: this.state.totalAmount - 700,
          totalPeriod: this.state.totalPeriod - 1,
          q8: false,
        }
      )
    }
    // Do you need data cleansing?
    if (e.target.id ==="16" && this.state.q15 === false) {
      return
    } else if (e.target.id === "15" && this.state.q15 === false) {
      this.setState(
        {
          q15: !this.state.q15,
          totalAmount: this.state.totalAmount + 1300,
          totalPeriod: this.state.totalPeriod + 2,
          q16: false
        }
      )
    } else if (e.target.id === "16" && this.state.q16 === false) {
      this.setState(
        {
          q16: !this.state.q16,
          totalAmount: this.state.totalAmount - 1300,
          totalPeriod: this.state.totalPeriod - 2,
          q15: false
        }
      )
    }
    // Do you need to deal with the missing values?
    if (e.target.id ==="18" && this.state.q17 === false) {
      return
    } else if (e.target.id === "17" && this.state.q17 === false) {
      this.setState(
        {
          q17: !this.state.q17,
          totalAmount: this.state.totalAmount + 400,
          totalPeriod: this.state.totalPeriod + 1,
          q18: false
        }
      )
    } else if (e.target.id === "18" && this.state.q18 === false) {
      this.setState(
        {
          q18: !this.state.q18,
          totalAmount: this.state.totalAmount - 400,
          totalPeriod: this.state.totalPeriod - 1,
          q17: false
        }
      )
    }
    // which model do you want to use?
    if (e.target.id ==="19" && this.state.q20 === false) {
      return
    } else if (e.target.id === "20" && this.state.q20 === false) {
      this.setState(
        {
          q20: !this.state.q20,
          totalAmount: this.state.totalAmount + 500,
          totalPeriod: this.state.totalPeriod + 1,
          q19: false
        }
      )
    } else if (e.target.id === "19" && this.state.q19 === false) {
      this.setState(
        {
          q19: !this.state.q19,
          totalAmount: this.state.totalAmount - 500,
          totalPeriod: this.state.totalPeriod - 1,
          q20: false
        }
      )
    }

    // Do you want us to fit the model?
    if (e.target.id ==="22" && this.state.q21 === false) {
      return
    } else if (e.target.id === "21" && this.state.q21 === false) {
      this.setState(
        {
          q21: !this.state.q21,
          totalAmount: this.state.totalAmount + 1200,
          totalPeriod: this.state.totalPeriod + 2,
          q22: false
        }
      )
    } else if (e.target.id === "22" && this.state.q22 === false) {
      this.setState(
        {
          q22: !this.state.q22,
          totalAmount: this.state.totalAmount - 1200,
          totalPeriod: this.state.totalPeriod - 2,
          q21: false
        }
      )
    }

    // Do you want us to validate & verify your model?
    if (e.target.id ==="24" && this.state.q23 === false) {
      return
    } else if (e.target.id === "23" && this.state.q23 === false) {
      this.setState(
        {
          q23: !this.state.q23,
          totalAmount: this.state.totalAmount + 700,
          totalPeriod: this.state.totalPeriod + 1,
          q24: false
        }
      )
    } else if (e.target.id === "24" && this.state.q24 === false) {
      this.setState(
        {
          q24: !this.state.q24,
          totalAmount: this.state.totalAmount - 700,
          totalPeriod: this.state.totalPeriod - 1,
          q23: false
        }
      )
    }

    // Do you need a comparison of your model performance?
    if (e.target.id ==="26" && this.state.q25 === false) {
      return
    } else if (e.target.id === "25" && this.state.q25 === false) {
      this.setState(
        {
          q25: !this.state.q25,
          totalAmount: this.state.totalAmount + 1000,
          totalPeriod: this.state.totalPeriod + 2,
          q26: false
        }
      )
    } else if (e.target.id === "26" && this.state.q26 === false) {
      this.setState(
        {
          q26: !this.state.q26,
          totalAmount: this.state.totalAmount - 1000,
          totalPeriod: this.state.totalPeriod - 2,
          q25: false
        }
      )
    }

    // Do you need visualization of data and model?
    if (e.target.id ==="28" && this.state.q27 === false) {
      return
    } else if (e.target.id === "27" && this.state.q27 === false) {
      this.setState(
        {
          q27: !this.state.q27,
          totalAmount: this.state.totalAmount + 700,
          totalPeriod: this.state.totalPeriod + 1,
          q28: false
        }
      )
    } else if (e.target.id === "28" && this.state.q28 === false) {
      this.setState(
        {
          q28: !this.state.q28,
          totalAmount: this.state.totalAmount - 700,
          totalPeriod: this.state.totalPeriod - 1,
          q27: false
        }
      )
    }

    // Do you need an analysis final report?
    if (e.target.id === "9" && this.state.q9 === false && this.state.q10 === true){
      this.setState(
        {
          q9: !this.state.q9,
          totalAmount: this.state.totalAmount - 700,
          totalPeriod: this.state.totalPeriod - 3,
          q10: false,
          q11: false
        }
      )
    } else if (e.target.id === "9" && this.state.q9 === false && this.state.q11 === true){
      this.setState(
        {
          q9: !this.state.q9,
          totalAmount: this.state.totalAmount - 300,
          totalPeriod: this.state.totalPeriod - 2,
          q10: false,
          q11: false
        }
      )
    } else if (e.target.id === "10" && this.state.q10 === false && this.state.q9 === true){
      this.setState(
        {
          q10: !this.state.q10,
          totalAmount: this.state.totalAmount + 700,
          totalPeriod: this.state.totalPeriod + 3,
          q9: false,
          q11: false
        }
      )
    } else if (e.target.id === "10" && this.state.q10 === false && this.state.q11 === true){
      this.setState(
        {
          q10: !this.state.q10,
          totalAmount: this.state.totalAmount + 400,
          totalPeriod: this.state.totalPeriod + 1,
          q9: false,
          q11: false
        }
      )
    } else if (e.target.id === "11" && this.state.q11 === false && this.state.q9 === true){
      this.setState(
        {
          q11: !this.state.q11,
          totalAmount: this.state.totalAmount + 300,
          totalPeriod: this.state.totalPeriod + 2,
          q9: false,
          q10: false
        }
      )
    } else if (e.target.id === "11" && this.state.q11 === false && this.state.q10 === true){
      this.setState(
        {
          q11: !this.state.q11,
          totalAmount: this.state.totalAmount - 400,
          totalPeriod: this.state.totalPeriod - 1,
          q9: false,
          q10: false
        }
      )
    } else if (e.target.id === "9" && this.state.q9 === false) {
      this.setState(
        {
          q9: !this.state.q9,
          totalAmount: this.state.totalAmount + 700,
          q10: false,
          q11: false
        }
      )
    }

    else if (e.target.id === "10" && this.state.q10 === false) {
      this.setState(
        {
          q10: !this.state.q10,
          totalAmount: this.state.totalAmount + 1400,
          totalPeriod: this.state.totalPeriod + 3,
          q9: false,
          q11: false
        }
      )
    } else if (e.target.id === "11" && this.state.q11 === false) {
      this.setState(
        {
          q11: !this.state.q11,
          totalAmount: this.state.totalAmount + 1000,
          totalPeriod: this.state.totalPeriod + 2,
          q9: false,
          q10: false
        }
      )
    }

    // What type of data do you want to analyze?
    if (e.target.id ==="12" && this.state.q13 === false && this.state.q14 === false ) {
      return

    }  else if (e.target.id ==="12"  && this.state.q13 === true){
      this.setState(
        {
          q12: !this.state.q12,
          totalAmount: this.state.totalAmount - 600,
          totalPeriod: this.state.totalPeriod - 1,
          q13: false,
          q14: false
        }
      )
    } else if (e.target.id === "12" && this.state.q14 === true) {
      this.setState(
        {
          q12: !this.state.q12,
          totalAmount: this.state.totalAmount - 1200,
          totalPeriod: this.state.totalPeriod - 2,
          q13: false,
          q14: false
        }
      )
    } else if (e.target.id === "13" && this.state.q14 === true) {
      this.setState(
        {
          q13: !this.state.q13,
          totalAmount: this.state.totalAmount - 600,
          totalPeriod: this.state.totalPeriod - 1,
          q12: false,
          q14: false
        }
      )
    } else if (e.target.id === "14" && this.state.q13 === true) {
      this.setState(
        {
          q14: !this.state.q14,
          totalAmount: this.state.totalAmount + 600,
          totalPeriod: this.state.totalPeriod + 1,
          q12: false,
          q13: false
        }
      )
    } else if (e.target.id === "13" && this.state.q13 === false) {
      this.setState(
        {
          q13: !this.state.q13,
          totalAmount: this.state.totalAmount + 600,
          totalPeriod: this.state.totalPeriod + 1,
          q12: false,
          q14: false,
        }
      )
    } else if (e.target.id === "14" && this.state.q14 === false) {
      this.setState(
        {
          q14: !this.state.q14,
          totalAmount: this.state.totalAmount + 1200,
          totalPeriod: this.state.totalPeriod + 2,
          q13: false,
          q12: false,
        }
      )
    }

    // Do you need an analysis final report?
    if (e.target.id ==="30" && this.state.q29 === false) {
      return
    } else if (e.target.id === "29" && this.state.q29 === false) {
      this.setState(
        {
          q29: !this.state.q29,
          totalAmount: this.state.totalAmount + 600,
          totalPeriod: this.state.totalPeriod + 1,
          q30: false
        }
      )
    } else if (e.target.id === "30" && this.state.q30 === false) {
      this.setState(
        {
          q30: !this.state.q30,
          totalAmount: this.state.totalAmount - 600,
          totalPeriod: this.state.totalPeriod - 1,
          q29: false
        }
      )
    }
  }



  render() {
    let regex = /\B(?=(\d{3})+(?!\d))/g;
    let months = this.state.totalPeriod / 4

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
                id={6}
                service="Research"
                name="101"/>
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}>Do you have any data for analysis?</h3>
                <p id="header-explain">If you don’t, we can find data for your study.</p>
                <SelectionButton
                id={7}
                action={this.handleClick}
                service="Yes"
                name='102'/>
                <SelectionButton
                id={8}
                action={this.handleClick}
                service="No"
                name="102"
                addition="$500~$900"
                period="1 weeks"
                />
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}> What type of data do you want to analyze? </h3>
                <p id="header-explain">Because the analysis time depends on the type of data, the price will vary.</p>
                <SelectionButton
                id={9}
                action={this.handleClick}
                service="Structured data"
                name='103'
                addition="$700"
                />
                <SelectionButton
                id={10}
                action={this.handleClick}
                service="Image data"
                name="103"
                addition="$1400"
                period="3 weeks"
                />
                <SelectionButton
                id={11}
                action={this.handleClick}
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
                id={12}
                action={this.handleClick}
                service="x < 10GB"
                name='104'/>
                <SelectionButton
                id={13}
                action={this.handleClick}
                service="10GB ≤ x < 100GB"
                name="104"
                addition="$600"
                period="1 weeks"
                />
                <SelectionButton
                id={14}
                action={this.handleClick}
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
                    id={15}
                    action={this.handleClick}
                    service="Yes"
                    name="105"
                    addition="$1,000-$1,600"
                    period="2 weeks"
                    />
                    <SelectionButton
                    id={16}
                    action={this.handleClick}
                    service="No"
                    name="105"/>
                  </li>
                  <li className="q-quatro">
                    <h3 style={{marginBottom: '12px'}}> Do you need to deal with the missing values? </h3>
                    <p id="header-explain">Although your data contain the missing values, we will provide an optimal solution to deal with them. This process might increase the accuracy of model.</p>
                    <SelectionButton
                    id={17}
                    action={this.handleClick}
                    service="Yes"
                    name="106"
                    addition="$200-$600"
                    period="1 weeks"
                    />
                    <SelectionButton
                    id={18}
                    action={this.handleClick}
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
                 id={19}
                 action={this.handleClick}
                 service="Machine learning only"
                 name="107"
                 />
                 <SelectionButton
                 id={20}
                 action={this.handleClick}
                 service="Both"
                 addition="$500"
                 period="1 weeks"
                 name="107"/>
               </section>


               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}> Do you want us to fit the model?</h3>
                <p id="header-explain">This process is called “model training”. We will provide fitting and result from model selection.</p>
                <SelectionButton
                id={21}
                action={this.handleClick}
                service="Yes"
                name="108"
                addition="$800-$1,600"
                period="2-3 weeks"
                />
                <SelectionButton
                id={22}
                action={this.handleClick}
                service="No"
                name="108"/>
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}>  Do you want us to validate & verify your model?  </h3>
                <p id="header-explain">This process is called “model verification”. We will provide a robust model through work such as hyperparameter tuning, ensemble, optimization, etc.</p>
                <SelectionButton
                id={23}
                action={this.handleClick}
                service="Yes"
                name="113"
                addition="$500-$900"
                period="1-2 weeks"
                />
                <SelectionButton
                id={24}
                action={this.handleClick}
                service="No"
                name="113"/>
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}>  Do you need a comparison of your model performance?  </h3>
                <p id="header-explain">We can compare results with other models to validate the performance of your model. These can be used in a thesis or elsewhere to explain various reasons for your model selection.</p>
                <SelectionButton
                id={25}
                action={this.handleClick}
                service="Yes"
                name="109"
                addition="$1,000"
                period="2 weeks"
                />
                <SelectionButton
                id={26}
                action={this.handleClick}
                service="No"
                name="109"/>
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}>  Do you need visualization of data and model?  </h3>
                <p id="header-explain">We can provide not only plots for exploratory data analysis but plots for your model results such as ROC curve and accuracy plot.</p>
                <SelectionButton
                id={27}
                action={this.handleClick}
                service="Yes"
                name="110"
                addition="$500-$800"
                period="1-2 weeks"
                />
                <SelectionButton
                id={28}
                action={this.handleClick}
                service="No"
                name="110"/>
               </section>

               <section className="q-quatro">
                <h3 style={{marginBottom: '12px'}}>  Do you need an analysis final report?  </h3>
                <p id="header-explain">We can provide a clear report that summarizes the above processes.</p>
                <SelectionButton
                id={29}
                action={this.handleClick}
                service="Yes"
                name="112"
                addition="$600"
                period="1 weeks"
                />
                <SelectionButton
                id={30}
                action={this.handleClick}
                service="No"
                name="112"/>
               </section>
               <div className="calculation-box" style={{padding: '15px', fontWeight: '400'}}>
                 Average expected cost :
                 <span id="price">${this.state.totalAmount.toString().replace(regex, ',')}</span>
                 <small style={{color: 'gray'}}> (Average expected time: <span id="period_month">{months}</span> months)</small>
                 <br />
                 <div style={{lineHeight: '20px'}}>
                   <a className="btn btn-primary-cost new_contact_button" onClick={this.contactClick}>Contact Us with Estimated Cost </a>
                 </div>
               </div>
             </div>
          </div>
          <Contact
          {...this.state}
          contactStatus={this.state.contactStatus}
          total = {`$${this.state.totalAmount.toString().replace(regex, ',')}`}
          />
        </div>

      </div>
    );
  }
}

export default Customization;

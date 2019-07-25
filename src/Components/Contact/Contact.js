import React from 'react';
import './Contact.scss'

class Contact extends React.Component {



  getContactMessage= () => {
    if (this.props.contactStatus === true) {
      return (
        `■ Data preparation
    Finding data(${this.props.q7 === false ? (this.props.q8 === false ? "" : "No") : "yes"}): ${this.props.q7 === false ? (this.props.q8 === false ? "Unselected" : "$700") : "$0"}
    Data type(${this.props.q9 === false ? (this.props.q10 === false ? (this.props.q11 === false ? "" : "Text data") : "Image data") : "Structured data"}): ${this.props.q9 === false ? (this.props.q10 === false ? (this.props.q11 === false ? "Unselected" : "$1,000") : "$1,400") : "$700"}
■ Total: ${this.props.total}
        `
      )

    }
  }

  // Data type(${this.props.q9 === false ? (this.props.q10 === false ? "" : "No") : "yes"}): ${this.props.q7 === false ? (this.props.q8 === false ? "Unselected" : "$700") : "$0"}


  render() {
    return (
      <section className="page-section" id="contact">
        <div className="contact-container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted"> With the estimation of cost contact us for more inquiry.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" noValidate="novalidate">

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group string required contact_name">
                      <label className="control-label string required textLabel" htmlFor="contact_name"> Name *</label>
                      <input className="form-control string required" type="text" name="contact[name]" id="contact_name" />
                      <label className="control-label string required textLabel-sub" htmlFor="contact_name"> First Name</label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group string optional contact_company_name">
                      <label style={{height: "18px"}} className="control-label string optional textLabel" htmlFor="contact_company_name">  </label>
                      <input className="form-control string optional" type="text" name="contact[company_name]" id="contact_company_name" />
                      <label className="control-label string required textLabel-sub" htmlFor="contact_name"> Last Name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group tel required contact_phone">
                      <label className="control-label tel required textLabel" htmlFor="contact_phone">Company/ Institution *</label>
                      <input className="form-control string tel required" type="tel" name="contact[phone]" id="contact_phone" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group email required contact_email">
                      <label className="control-label email required textLabel" htmlFor="contact_email"> Position *</label>
                      <input className="form-control string email required" type="email" name="contact[email]" id="contact_email" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group tel required contact_phone">
                      <label className="control-label tel required textLabel" htmlFor="contact_phone">Email Address *</label>
                      <input className="form-control string tel required" type="tel" name="contact[phone]" id="contact_phone" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group email required contact_email">
                      <label className="control-label email required textLabel" htmlFor="contact_email">Phone number *</label>
                      <input className="form-control string email required" type="email" name="contact[email]" id="contact_email" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group text required contact_body focused">
                      <label className="control-label text required textLabel" htmlFor="contact_body"> Message </label>
                      <textarea className="form-control text required" rows={10} name="contact[body]" id="contact_body" value={this.getContactMessage()} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 text-center-submit">
                  <div id="success" />
                  <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Submit</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;

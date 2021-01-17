import React, { Component } from "react";

class Contact extends Component {
  render() {
    const ind = [
      "A-502 Satyamev Royal",
      <br />,
      "TP-9 Sargasan",
      <br />,
      "Gandhinagar - 382421",
    ];
    const uk = [
      "11 Black Rod Close",
      <br />,
      "Hayes",
      <br />,
      "London - UB3 4QJ",
    ];

    return (
      <section id="contact">
        <div className="row">
          <div className="twelve columns main-col">
            <h2>Offices</h2>
            <div className="row">
              <div className="twelve columns">
                <div className="row">
                  <div className="four columns">
                    <h3>India</h3>
                    <p>{ind}</p>
                  </div>
                  <div className="four columns">
                    <h3>United Kingdom</h3>
                    <p>{uk}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

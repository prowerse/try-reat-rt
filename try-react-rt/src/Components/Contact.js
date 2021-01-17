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

    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <section id="contact">
        <div className="row">
          <div className="twelve columns main-col">
            <h2>Contact Us</h2>
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

                
                <div className="row">
                  <div className="twelve columns">
                    <ul>
                      <h3>Connect</h3>
                    </ul>
                    <ul className="social-links">{networks}</ul>
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

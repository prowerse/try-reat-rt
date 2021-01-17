import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (
        testimonials
      ) {
        return (
          <div key={testimonials.user}>
            <p className="justified">
              {testimonials.text}
              <br></br>
              <b>{testimonials.user}</b>
            </p>
          </div>
        );
      });
    }

    return (
      <section id="testimonials">
        <div className="row">
          <div className="nine columns main-col">
            <br />
            <h2>Testimonials</h2>
            <div className="row item">
              <div className="twelve columns">{testimonials}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;

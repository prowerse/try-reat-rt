import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var bio = this.props.data.bio;
      var people = this.props.data.companyvalues.people;
      var journey = this.props.data.companyvalues.journey;
      var progress = this.props.data.companyvalues.progress;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="twelve columns main-col">
            <h2>About Prowerse</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="twelve columns">
                <h2>Prowerse Values</h2>
                <div className="row">
                  <div className="four columns">
                    <h3>People</h3>
                    <p>{people}</p>
                  </div>
                  <div className="four columns">
                    <h3>Journey</h3>
                    <p>{journey}</p>
                  </div>
                  <div className="four columns">
                    <h3>Progress</h3>
                    <p>{progress}</p>
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

export default About;

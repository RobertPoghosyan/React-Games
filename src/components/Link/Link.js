import React, { Component } from "react";

//import "./Link.scss";

class Link extends Component {
  render() {
    const { imgSrc, onClick } = this.props;

    return (
      <a href="/#" >
        <div className="app-link">
          <img src={imgSrc} alt={imgSrc} />
        </div>
      </a>
    );
  }
}

export default Link;
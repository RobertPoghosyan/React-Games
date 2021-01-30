import React,{Component} from "react";

import {images} from "../../data-mockup/image-mockup";

import triangle from "../../assets/triangle.svg";
import Link from "../../components/Link/Link";



class Homepage extends Component {
    render() {
      return (
        <div className="section-home-content">
          <img className="triangleImg" src={triangle} alt="triangle" />
          {images.map((el) => {
            return (
              <div key={el.id} className="section-home-item">
                <Link key={el.id}  onClick={this.props.onClick} />
              </div>
            );
          })}
        </div>
      );
    }
  }
  
  export default Homepage;
import React, { useState } from "react";
import './Torekko.css'

class Torekko extends React.Component {
  

  render(){
  return (
    <div className="Torekko">
        <video width="320" height="240" autoPlay loop className="video">
            <source src="https://storage.opensea.io/files/0fe2e038d7411ebabf5de38989f09e0c.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div>
            <span className="name">{this.props.torekkoInfo.name}</span>
            <p>{this.props.torekkoInfo.attributes[1].trait_type} {this.props.torekkoInfo.attributes[1].value}</p>
        </div>
        
      
    </div>
  );
  }
}

export default Torekko;




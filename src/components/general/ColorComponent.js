import React, { Component } from "react";

// import Npm randomcolor Package
import randomColor from "randomcolor";

// import Npm clipboard-copy Package
import copy from 'clipboard-copy'

// some css
import "./styles.css";

export default class Color extends Component {
  constructor(props) {
    super(props);
    // React state
    this.state = {
      bgColor: "",
      display:false
    };
  }
//  Click Function  Working Olny  When Click on Screen
  clickHandler=(event)=>{
    copy(this.state.bgColor)

//  Show Suceess Full Message On Your Screen
    this.setState({display:true})
  }

// clickHideHandler Function Hide Suceess Full Message On Your Screen
  clickHideHandler=(event)=>{
    this.setState({display:false})
  }



// MouseHover Function Work only Mouse Hovering
  MouseHover = e => {
    // call Function Inside Mouse Hover  Event
    let color = randomColor();
    this.setState({
      bgColor: color
    });
  };



  render() {
    return (
      <>
      {/*  Sucessfull Message Show block Inside Your Screen*/}
      <div  onClick={this.clickHideHandler} style={{ display: this.state.display?"":"none" ,  backgroundColor:"black", height:'30px', width:'100%'}}>
        <h5 style={{color:"white" , cursor: 'pointer' , margin:"auto 0px"}}> You Sucessfull Copy  Color Code  </h5>
      </div>
      {/* Mouse Hover color Change Inside You Screen */}
      <div className="divOuter">
        <div
          onClick={this.clickHandler}
          style={{
            backgroundColor: this.state.bgColor
          }}
          onMouseMove={this.MouseHover}
          className="App"
        />
      </div>
      </>
    );
  }
}
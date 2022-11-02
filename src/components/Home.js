import React, { Component } from 'react';
import imgFondo from '../assets/images/15841914561512.jpg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src={imgFondo} style={{margin: "50px auto"}}/>
      </div>
    )
  }
}

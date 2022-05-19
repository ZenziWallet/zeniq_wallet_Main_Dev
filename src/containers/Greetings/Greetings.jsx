/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import icon from '../../assets/img/icon-128.png';
import '../../pages/Popup/Popup';

class GreetingComponent extends Component {
  state = {
    name: 'User',
  };

  render() {
    return (
      <div className="middle">
        <img src={icon} alt="extension icon" />
        <p className="tag">Hello, {this.state.name} !</p>
        <input className="form" type="password" placeholder="Password" />

        <a href="www.youtube.com">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          UNLOCK
        </a>

        <> Forgot Password ?</>
      </div>
    );
  }
}

export default GreetingComponent;

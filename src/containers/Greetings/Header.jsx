import React, { Component } from 'react';
import icon from '../../assets/img/icon-34.png';
import '../../pages/Popup/Popup';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="imgH">
        <img src={icon} alt="extension icon" />
        <div></div>
      </div>
    );
  }
}

export default HeaderComponent;

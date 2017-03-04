'use strict';

import React from 'react';
import {
  asset,
  Text,
  View,
  VrButton,
} from 'react-vr';

class Button extends React.Component {

  static defaultProps = {
    delay: 2000,
  }

  constructor(props) {
    super();

    this.state = {
      buttonColor: 0x9CCECC80,
      hasFocus: false,
      lastTimeoutId: 0,
      scrolling: false,
      buttonClickOn: false,
      buttonGazeOn: false,
    }
  }

  _onButtonClicked() {
    if (this.state.buttonClickOn === false) {
      this.state.buttonClickOn = true;
      this._selected();
    } else if (this.state.buttonClickOn === true &&
          this.state.buttonGazeOn === false) {
      this.state.buttonClickOn = false;
      this._unselected();
    }
    // console.log('Button click. buttonClickOn = ', this.state.buttonClickOn);
  }

  _onButtonEntered() {
    this.setState({hasFocus: true});
    this.setState({buttonColor: 0x9CCECCFF});
    const id = setTimeout(() => this._selected(), this.props.delay);
    this.state.lastTimeoutId = id;
    // console.log('Button enter');
  }

  _onButtonExit() {
    // console.log('Button exit');
    if(this.state.buttonClickOn === false) {
      this.state.buttonClickOn = false;
      this.state.buttonGazeOn = false;
      this._unselected();
    }
    this.setState({hasFocus: false});
    this.setState({buttonColor: 0x9CCECC80});
    clearTimeout(this.state.lastTimeoutId);
    this.state.lastTimeoutId = this.id;
  }

  _selected() {
    this.props.onClick();
    // console.log('Selected');
  }

  _unselected() {
    this.props.onInteractionEnd();
    // console.log('Unselected');
  }

  render() {
    let alignment = this.props.alignment;

    return(
      <VrButton
        onClick={()=>this._onButtonClicked()}
        onEnter={()=>this._onButtonEntered()}
        onExit={()=>this._onButtonExit()}
        style={{
          backgroundColor: this.state.buttonColor,
          width: 1,
          margin: 0.1,
        }} >
        <Text style={{
            color: '#618785',
            fontSize: 0.1,
            textAlign: 'center',
          }} >Scroll {this.props.alignment}</Text>
      </VrButton>
    );
  }
}

module.exports = Button;

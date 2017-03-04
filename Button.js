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
    const id = setTimeout(() => this._selected(), this.props.delay);
    this.state.lastTimeoutId = id;
    this._startEnterAnimation();
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
    clearTimeout(this.state.lastTimeoutId);
    this.state.lastTimeoutId = this.id;
    this._startExitAnimation();
  }

  _selected() {
    this.props.onClick();
    // console.log('Selected');
  }

  _unselected() {
    this.props.onInteractionEnd();
    // console.log('Unselected');
  }

  _startEnterAnimation() {

  }

  _startExitAnimation() {

  }

  render() {
    let alignment = this.props.alignment;

    return(
      <VrButton
        onClick={()=>this._onButtonClicked()}
        onEnter={()=>this._onButtonEntered()}
        onExit={()=>this._onButtonExit()}
        style={{
          backgroundColor: 0x9ccecc70,
          width: 1,
          margin: 0.1,
        }} >
        <Text style={{
            fontSize: 0.1,
            textAlign: 'center',
          }} >Scroll {this.props.alignment}</Text>
      </VrButton>
    );
  }
}

module.exports = Button;

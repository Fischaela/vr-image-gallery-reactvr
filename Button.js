'use strict';

import React from 'react';
import {
  asset,
  Mesh,
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
    }
  }

  _onButtonClicked() {
    this._selected();
  }

  _onButtonEntered() {
    this.setState({hasFocus: true});
    const id = setTimeout(() => this._selected(), this.props.delay);
    this.state.lastTimeoutId = id;
    this._startEnterAnimation();
  }

  _onButtonExit() {
    console.log('VrButton exit.');
  }

  _onButtonLongClick() {
    console.log('VrButton long click.');
  }

  _selected() {
    this.props.onClick();
  }

  _startEnterAnimation() {

  }

  render() {
    let alignment = this.props.alignment,
      translateX = -0.1;

    if (alignment === 'right') {
      translateX = 0.1;
    }

    return(
      <VrButton
        onClick={()=>this._onButtonClicked()}
        onEnter={()=>this._onButtonEntered()}
        onExit={()=>this._onButtonExit()}
        onLongClick={()=>this._onButtonLongClick()}
        style={{
          backgroundColor: 'red',
          width: 0.141,
          margin: 0.003,
        }} >
        <Text style={{
            fontSize: 0.015,
            paddingTop: 0.001,
            paddingBottom: 0.0025,
            paddingLeft: 0.005,
            paddingRight: 0.005,
            textAlign: 'center',
            textAlignVertical: 'center',
          }} >Scroll {this.props.alignment}</Text>
      </VrButton>
    );
  }
}

module.exports = Button;

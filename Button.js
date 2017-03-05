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
      buttonClickOn: false,
      buttonColor: 0x9CCECC80,
      buttonGazeOn: false,
      hasFocus: false,
      lastTimeoutId: 0,
      scrolling: false,
    }
  }

  onButtonClicked() {
    if (this.state.buttonClickOn === false) {
      this.state.buttonClickOn = true;
      this.selected();
    } else if (this.state.buttonClickOn === true &&
          this.state.buttonGazeOn === false) {
      this.state.buttonClickOn = false;
      this.unselected();
    }
    // console.log('Button click. buttonClickOn = ', this.state.buttonClickOn);
  }

  onButtonEntered() {
    this.setState({hasFocus: true});
    this.setState({buttonColor: 0x9CCECCFF});
    const id = setTimeout(() => this.selected(), this.props.delay);
    this.state.lastTimeoutId = id;
    // console.log('Button enter');
  }

  onButtonExit() {
    // console.log('Button exit');
    if (this.state.buttonClickOn === false) {
      this.state.buttonClickOn = false;
      this.state.buttonGazeOn = false;
      this.unselected();
    }
    this.setState({hasFocus: false});
    this.setState({buttonColor: 0x9CCECC80});
    clearTimeout(this.state.lastTimeoutId);
    this.state.lastTimeoutId = this.id;
  }

  selected() {
    this.props.onClick();
    // console.log('Selected');
  }

  unselected() {
    this.props.onInteractionEnd();
    // console.log('Unselected');
  }

  render() {
    let alignment = this.props.alignment;

    return(
      <VrButton
        onClick={()=>this.onButtonClicked()}
        onEnter={()=>this.onButtonEntered()}
        onExit={()=>this.onButtonExit()}
        style={{
          backgroundColor: this.state.buttonColor,
          width: 1,
          margin: 0.1,
        }}
      >
        <Text
          style={{
            color: '#618785',
            fontSize: 0.0875,
            textAlign: 'center',
          }}
        >
          Scroll {this.props.alignment}
        </Text>
      </VrButton>
    );
  }
}

module.exports = Button;

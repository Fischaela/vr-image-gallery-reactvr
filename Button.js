'use strict';

import React from 'react';
import {
  View,
  Mesh,
  asset,
  VrButton,
} from 'react-vr';

class Button extends React.Component {

  _onButtonClicked() {
    console.log('VrButton click.');
  }

  _onButtonEntered() {
    console.log('VrButton enter.');
  }

  _onButtonExit() {
    console.log('VrButton exit.');
  }

  _onButtonLongClick() {
    console.log('VrButton long click.');
  }

  render() {
    let alignment = this.props.alignment,
      translateX = -0.2;

    if (alignment === 'right') {
      translateX = 0.2;
    }

    return(
      <VrButton
        onClick={()=>this._onButtonClicked()}
        onEnter={()=>this._onButtonEntered()}
        onExit={()=>this._onButtonExit()}
        onLongClick={()=>this._onButtonLongClick()} >
        <Mesh
        style={{
          transform: [
            {translate: [translateX, 0, -0.4]},
            {scale: [0.075, 0.3, 0.001]},
          ]
        }}
        source={{mesh:asset('cube_idle.obj'), mtl:asset('cube_idle.mtl'), lit: true}} />
      </VrButton>
    );
  }
}

module.exports = Button;

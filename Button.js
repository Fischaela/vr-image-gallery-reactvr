'use strict';

import React from 'react';
import {
  View,
  Mesh,
  asset,
  VrButton,
} from 'react-vr';

class Button extends React.Component {

  _onViewClicked() {
    console.log('VrButton was clicked.');
  }

  render() {
    let alignment = this.props.alignment,
      translateX = -0.2;

    if (alignment === 'right') {
      translateX = 0.2;
    }

    return(
      <VrButton
        onClick={()=>this._onViewClicked()} >
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

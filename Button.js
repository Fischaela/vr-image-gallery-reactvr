'use strict';

import React from 'react';
import {
  View,
  Mesh,
  asset,
} from 'react-vr';

class Button extends React.Component {

  render() {
    let alignment = this.props.alignment,
      translateX = -0.2;

    if (alignment === 'right') {
      translateX = 0.2;
    }

    return(
      <Mesh
        style={{
          transform: [
            {translate: [translateX, 0, -0.4]},
            {scale: [0.075, 0.3, 0.001]},
          ]
        }}
        source={{mesh:asset('cube_idle.obj'), mtl:asset('cube_idle.mtl'), lit: true}} />
    );
  }
}

module.exports = Button;

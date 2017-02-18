'use strict';

import React from 'react';
import {
  View,
  Mesh,
  asset,
} from 'react-vr';

class Button extends React.Component {

  render() {

    return(
      <Mesh
        style={{
          transform: [
            {translate: [-0.2, 0, -0.4]},
            {scale: [0.075, 0.3, 0.001]},
          ]
        }}
        source={{mesh:asset('cube_idle.obj'), mtl:asset('cube_idle.mtl'), lit: true}}/>
    );
  }
}

module.exports = Button;

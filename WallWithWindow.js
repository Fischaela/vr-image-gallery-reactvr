'use strict';

import React from 'react';
import {
  View,
  Mesh,
  asset,
} from 'react-vr';

class WallWithWindow extends React.Component {

  render() {
    return (
      <Mesh
        style={{
          transform: [
            {translate: [0, 0.2, -1]},
            {scale: [1, 0.4, 0.001]},
          ],
        }}
        source={{mesh:asset('cube_wall.obj'), mtl:asset('cube_wall.mtl'), lit: true}} />
    );
  }
}

module.exports = WallWithWindow;

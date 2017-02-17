'use strict';

import React from 'react';
import {
  View,
  Mesh,
  asset,
} from 'react-vr';

class Wall extends React.Component {

  render() {
    return (
      <Mesh
        style={{
          transform: [
            {translate: this.props.translate},
            {scale: this.props.scale},
          ],
        }}
        source={{mesh:asset('cube_wall.obj'), mtl:asset('cube_wall.mtl'), lit: true}} />
    );
  }
}

module.exports = Wall;

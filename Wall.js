'use strict';

import React from 'react';
import {
  View,
  Mesh,
  asset,
} from 'react-vr';

class Wall extends React.Component {

  render() {

    let scale = this.props.scale,
      src = {mesh:asset('cube_wall.obj'), mtl:asset('cube_wall.mtl'), lit: true},
      translate = this.props.translate,
      wall = null;

    if (this.props.hasWindow && this.props.hasWindow === true) {
      wall = <Mesh
        style={{
          transform: [
            {translate: translate},
            {scale: scale},
          ],
        }}
        source={src} />;
    } else {
      wall = <Mesh
        style={{
          transform: [
            {translate: translate},
            {scale: scale},
          ],
        }}
        source={src} />;
    }

    return (
      wall
    );
  }
}

module.exports = Wall;

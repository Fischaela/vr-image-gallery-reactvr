'use strict';

import React from 'react';
import {
  asset,
  Mesh,
  View,
} from 'react-vr';

class Wall extends React.Component {

  render() {

    let scale = this.props.scale,
      srcWallMat = {mesh:asset('cube_wall.obj'), mtl:asset('cube_wall.mtl'), lit: true},
      srcWindowMat = {mesh:asset('cube_window.obj'), mtl:asset('cube_window.mtl'), lit: true},
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
          source={srcWindowMat}
        />;
    } else {
      wall = <Mesh
          style={{
            transform: [
              {translate: translate},
              {scale: scale},
            ],
          }}
          source={srcWallMat}
        />;
    }

    return (
      wall
    );
  }
}

module.exports = Wall;

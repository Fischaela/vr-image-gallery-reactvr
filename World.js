'use strict';

import React from 'react';
import {
  asset,
  Mesh,
  Pano,
  View,
} from 'react-vr';

class World extends React.Component {

  render() {

    return(
      <View>
        <Pano source={asset('sky_1_by_nic4las-d931tya.png')} />
        <Mesh
          style={{
            transform: [
              {translate: [0, -2.8, 0]},
              {scale: [100, 0.001, 100]},
            ]
          }}
          source={{mesh:asset('cylinder_earth.obj'), mtl:asset('cylinder_earth.mtl'), lit: true}}
        />
      </View>
    );
  }
}

module.exports = World;

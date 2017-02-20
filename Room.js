'use strict';

import React from 'react';
import {
  View,
  Mesh,
  asset,
} from 'react-vr';
import Wall from './Wall';

class Room extends React.Component {

  render() {

    return(
      <View>
        <Mesh
          style={{
            transform: [
              {scale: [1, 1, 1]},
            ],
          }}
          source={{mesh:asset('cube_sky.obj'), mtl:asset('cube_sky.mtl'), lit: true}} />
        <Wall
          translate={[0, 0.2, -1]}
          scale={[1, 0.4, 0.001]} />
        <Wall
          translate={[-1, 0.2, 0]}
          scale={[0.001, 0.4, 1]}
          hasWindow={true} />
        <Wall
          translate={[1, 0.2, 0]}
          scale={[0.001, 0.4, 1]}
          hasWindow={true} />
        <Wall
          translate={[0, 0.2, 1]}
          scale={[1, 0.4, 0.001]}
          hasWindow={true} />
        <Wall
          translate={[0, -0.2, 0]}
          scale={[1, 0.001, 1]} />
      </View>
    );
  }
}

module.exports = Room;

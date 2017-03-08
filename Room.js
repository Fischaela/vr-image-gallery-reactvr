'use strict';

import React from 'react';
import {
  asset,
  View,
} from 'react-vr';
import Wall from './Wall';

class Room extends React.Component {

  render() {

    return(
      <View>
        <Wall
          scale={[5, 3, 0.2]}
          translate={[0, 0, -5]}
        />
        <Wall
          hasWindow
          scale={[5, 3, 0.02]}
          translate={[0, 0, 4.98]}
        />
        <Wall
          scale={[5, 0.2, 10]}
          translate={[0, -2.9, -5.02]}
        />
        <Wall
          hasWindow
          scale={[0.02, 3, 10]}
          translate={[-5.03, 0, -5.02]}
        />
        <Wall
          hasWindow
          scale={[0.02, 3, 10]}
          translate={[5.03, 0, -5.02]}
        />
        <Wall
          scale={[50, 3, 0.2]}
          translate={[-55, 0, -4.8]}
        />
        <Wall
          scale={[50, 3, 0.2]}
          translate={[55, 0, -4.8]}
        />
      </View>
    );
  }
}

module.exports = Room;

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
        <Wall scale={[5, 3, 0.2]}
          translate={[0, 0, -5]} />
        <Wall hasWindow={true}
          scale={[5, 3, 0.2]}
          translate={[0, 0, 5]} />
        <Wall scale={[5, 0.2, 10]}
          translate={[0, -2.9, -5.2]} />
        <Wall hasWindow={true}
          scale={[0.2, 3, 10]}
          translate={[-5.2, 0, -5.2]} />
        <Wall hasWindow={true}
          scale={[0.2, 3, 10]}
          translate={[5.2, 0, -5.2]} />
      </View>
    );
  }
}

module.exports = Room;

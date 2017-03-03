'use strict';

import React from 'react';
import {
  asset,
  Pano,
  View,
} from 'react-vr';

class World extends React.Component {

  render() {

    return(
      <View>
        <Pano source={asset('R0010207_20160711145528.JPG')} />
      </View>
    );
  }
}

module.exports = World;

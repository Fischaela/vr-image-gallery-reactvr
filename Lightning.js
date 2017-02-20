'use strict';

import React from 'react';
import {
  AmbientLight,
  PointLight,
  View,
} from 'react-vr';

class Lightning extends React.Component {

  render() {

    return(
      <View>
        <AmbientLight intensity={ 1.2 }/>
        <PointLight intensity={0.25}
          style={{
            color:'#ffffff',
            transform:[{translate : [0, 4, 0.25]}]}} />
      </View>
    );
  }
}

module.exports = Lightning;

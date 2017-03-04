'use strict';

import React from 'react';
import {
  asset,
  Image,
  Mesh,
  View,
} from 'react-vr';

class GdImage extends React.Component {

  render() {
    let index = this.props.index,
      length = this.props.length,
      texture = this.props.texture,
      imageWidth = this.props.width;

    return(
      <View
        style={{
          transform: [
            {translate: [0, 0, 0]},
          ]
        }}>
        <Image
          style={{
            margin: 0.05,
            width: imageWidth,
            height: imageWidth,
          }}
          source={texture} />
      </View>
    );
  }
}

module.exports = GdImage;

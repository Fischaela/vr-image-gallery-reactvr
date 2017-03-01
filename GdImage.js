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
      imageGroupWidth = 0,
      imageWidth = 0.15,
      gutterWidth = 0.03,
      xOffset = 0;

    // Calculation of position.x of each image
    // depending on image width, gutter between the images,
    // length of images array and its index.
    imageGroupWidth = length * imageWidth * 2 + (length - 1) * gutterWidth;
    xOffset = imageWidth * 2 * index + gutterWidth * index + imageWidth - imageGroupWidth / 2;

    return(
      <Image
        style={{width: 1, height: 1}}
        source={require('./static_assets/IGtoGD_0.jpg')} />
    );
  }
}

module.exports = GdImage;

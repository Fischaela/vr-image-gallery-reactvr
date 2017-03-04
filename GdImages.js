'use strict';

import React from 'react';
import {
  Animated,
  asset,
  Mesh,
  View,
} from 'react-vr';
import GdImage from './GdImage';

const Easing = require('Easing');

class GdImages extends React.Component {

  constructor(props) {
    super();

    this.state = {
      scrollValue: new Animated.Value(0),
      scrolling: false,
      translation: 0,
    };
    this.numberOfImages = 19;
    this.imageWidth = 3.2;
    this.imageGutter = 0.1;
    this.offsetX = (this.numberOfImages * this.imageWidth + this.numberOfImages * this.imageGutter) / 2;
    this.duration = this.numberOfImages * 750;
  }

  componentWillReceiveProps(nextProps) {
    // currently not scrolling, but should be scrolling
    if (this.state.scrolling === false && nextProps.scrolling !== 'none') {
      this.setState({scrolling: true});
      if (nextProps.scrolling === 'right') {
        this.scrollRight();
      } else if (nextProps.scrolling === 'left') {
        this.scrollLeft();
      }
    } else {
      this.setState({scrolling: false});
      this.stopScrolling();
    }
  }

  scrollLeft() {
    Animated.timing(
      this.state.scrollValue,
      {
        toValue: this.offsetX,
        duration: this.duration,
        easing: Easing.linear,
      }
    ).start();
  }


  scrollRight() {
    Animated.timing(
      this.state.scrollValue,
      {
        toValue: -this.offsetX,
        duration: this.duration,
        easing: Easing.linear,
      }
    ).start();
  }

  stopScrolling() {
    // Animated.AnimatedValue.stopAnimation();
  }

  render() {

    let images = [],
      imagesConfig = [
        {
          texture: require('./static_assets/gallery-image-00.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-01.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-02.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-03.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-04.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-05.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-06.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-07.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-08.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-09.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-10.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-11.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-12.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-13.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-14.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-15.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-16.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-17.jpg'),
        },
        {
          texture: require('./static_assets/gallery-image-18.jpg'),
        },
      ],
      view = <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          transform: [
            {translateX: 0},
          ],
        }}>
        {images}
      </View>;

    for (let i = 0; i < this.numberOfImages - 1; i += 1) {
      images.push(
         <GdImage
            key={i}
            texture={imagesConfig[i].texture}
            index={i}
            length={this.numberOfImages}
            width={this.imageWidth} />
      );
    }

    if (this.state.scrolling !== 'none') {
      view = <Animated.View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          transform: [
            {translateX: this.state.scrollValue},
          ],
        }}>
        {images}
      </Animated.View>
    }

    return(
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          transform: [
            {translate: [-this.offsetX, 2.2, -4.7]},
          ],
        }}>
        {view}
      </View>
    );
  }
}

module.exports = GdImages;

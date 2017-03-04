'use strict';

import React from 'react';
import {
  Animated,
  asset,
  Mesh,
  View,
} from 'react-vr';
import GdImage from './GdImage';

class GdImages extends React.Component {

  constructor(props) {
    super();

    this.state = {
      scrollValue: new Animated.Value(0),
      translation: 0,
    };
    this.lastUpdate = Date.now();
    this.translate  = this.translate.bind(this);
    this.imageWidth = 3.2;
    this.scrollBorder = 6.6;
  }

  translate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;

    if (this.state.translation < this.scrollBorder &&
        this.state.translation > -this.scrollBorder &&
        this.props.scrolling !== 'none') {
      this.lastUpdate = now;
      if (this.props.scrolling === 'left') {
        this.scrollLeft();
      } else if (this.props.scrolling === 'right') {
        this.scrollRight();
      }
    }

    this.frameHandle = requestAnimationFrame(this.translate);
  }

  componentDidMount() {
    this.translate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  scrollLeft() {
    Animated.timing(
      this.state.scrollValue,
      {
        toValue: this.scrollBorder,
        duration: 2000,
      }
    ).start();
  }


  scrollRight() {
    Animated.timing(
      this.state.scrollValue,
      {
        toValue: -this.scrollBorder,
        duration: 2000,
      }
    ).start();
  }

  render() {

    let images = [],
      imagesConfig = [
        {
          texture: require('./static_assets/IGtoGD_0.jpg'),
        },
        {
          texture: require('./static_assets/IGtoGD_1.jpg'),
        },
        {
          texture: require('./static_assets/IGtoGD_2.jpg'),
        },
        {
          texture: require('./static_assets/IGtoGD_3.jpg'),
        },
        {
          texture: require('./static_assets/IGtoGD_4.jpg'),
        },
      ],
      numberOfImages = 5;

    for (let i = 0; i < numberOfImages - 1; i += 1) {
      images.push(
         <GdImage
            key={i}
            texture={imagesConfig[i].texture}
            index={i}
            length={numberOfImages}
            width={this.imageWidth} />
      );
    }

    return(
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          transform: [
            {translate: [-8.2, 2.2, -4.7]},
          ],
        }}>
        <Animated.View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            transform: [
              {translateX: this.state.scrollValue},
            ],
          }}>
          {images}
        </Animated.View>
      </View>
    );
  }
}

module.exports = GdImages;

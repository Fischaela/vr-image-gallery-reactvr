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
      scrolling: false,
      translation: 0,
    };
    this.imageWidth = 3.2;
    this.scrollBorder = 6.6;
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
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

  stopScrolling() {
    // Animated.AnimatedValue.stopAnimation();
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
      numberOfImages = 5,
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
            {translate: [-8.2, 2.2, -4.7]},
          ],
        }}>
        {view}
      </View>
    );
  }
}

module.exports = GdImages;

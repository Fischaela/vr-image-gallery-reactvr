'use strict';

import React from 'react';
import {
  asset,
  Mesh,
  View,
} from 'react-vr';
import GdImage from './GdImage';

class GdImages extends React.Component {

  constructor(props) {
    super();

    this.state = {
      translation: 0,
    };
    this.lastUpdate = Date.now();
    this.translate  = this.translate.bind(this);
  }

  translate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;

    if (this.state.translation < 8.2 &&
        this.state.translation > -8.2 &&
        this.props.scrolling !== 'none') {
      this.lastUpdate = now;
      if (this.props.scrolling === 'left') {
        this.setState({translation: this.state.translation - delta / 2000});
      } else if (this.props.scrolling === 'right') {
        this.setState({translation: this.state.translation + delta / 2000});
      }
    }

    console.log(this.state.translation);

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

  render() {

    return(
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          transform: [
            {translate: [-8.2, 2.2, -4.7]},
          ],
        }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            transform: [
              {translate: [this.state.translation, 0, 0]}
            ],
          }}>
          <GdImage
            texture={require('./static_assets/IGtoGD_0.jpg')}
            index={0}
            length={5} />
          <GdImage
            texture={require('./static_assets/IGtoGD_1.jpg')}
            index={1}
            length={5} />
          <GdImage
            texture={require('./static_assets/IGtoGD_2.jpg')}
            index={2}
            length={5} />
          <GdImage
            texture={require('./static_assets/IGtoGD_3.jpg')}
            index={3}
            length={5} />
          <GdImage
            texture={require('./static_assets/IGtoGD_4.jpg')}
            index={4}
            length={5} />
        </View>
      </View>
    );
  }
}

module.exports = GdImages;

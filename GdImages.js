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

    if (this.state.translation < 0.656 &&
        this.state.translation > -0.656 &&
        this.props.scrolling !== 'none') {
      this.lastUpdate = now;
      if (this.props.scrolling === 'left') {
        this.setState({translation: this.state.translation - delta / 200000});
      } else if (this.props.scrolling === 'right') {
        this.setState({translation: this.state.translation + delta / 200000});
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

  render() {

    return(
      <View
        style={{
          transform: [
            {translate: [this.state.translation, 0, 0]},
          ],
        }}>
        <GdImage
          texture={'IGtoGD_0.jpg'}
          index={0}
          length={5} />
        <GdImage
          texture={'IGtoGD_1.jpg'}
          index={1}
          length={5} />
        <GdImage
          texture={'IGtoGD_2.jpg'}
          index={2}
          length={5} />
        <GdImage
          texture={'IGtoGD_3.jpg'}
          index={3}
          length={5} />
        <GdImage
          texture={'IGtoGD_4.jpg'}
          index={4}
          length={5} />
      </View>
    );
  }
}

module.exports = GdImages;

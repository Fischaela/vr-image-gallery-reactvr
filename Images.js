'use strict';

import React from 'react';
import {
  asset,
  Mesh,
  View,
} from 'react-vr';
import Image from './Image';

class Images extends React.Component {

  constructor() {
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

    // TODO: make value 0.656 dynamic
    if (this.state.translation < 0.656 && this.state.translation > -0.656) {
      this.lastUpdate = now;
      this.setState({translation: this.state.translation + delta / 200000});
      this.frameHandle = requestAnimationFrame(this.translate);
    }
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
        <Image
          texture={'IGtoGD_0.jpg'}
          index={0}
          length={5} />
        <Image
          texture={'IGtoGD_1.jpg'}
          index={1}
          length={5} />
        <Image
          texture={'IGtoGD_2.jpg'}
          index={2}
          length={5} />
        <Image
          texture={'IGtoGD_3.jpg'}
          index={3}
          length={5} />
        <Image
          texture={'IGtoGD_4.jpg'}
          index={4}
          length={5} />
      </View>
    );
  }
}

module.exports = Images;

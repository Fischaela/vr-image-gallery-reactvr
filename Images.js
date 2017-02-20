'use strict';

import React from 'react';
import {
  View,
  Mesh,
  asset,
} from 'react-vr';
import Image from './Image';

class Images extends React.Component {

  render() {

    return(
      <View>
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

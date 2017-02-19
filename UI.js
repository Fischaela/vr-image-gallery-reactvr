'use strict';

import React from 'react';
import {
  View,
  Mesh,
  asset,
} from 'react-vr';
import Button from './Button';

class UI extends React.Component {

  render() {

    return(
      <View>
        <Button
          alignment={'left'} />
        <Button
          alignment={'right'} />
      </View>
    );
  }
}

module.exports = UI;

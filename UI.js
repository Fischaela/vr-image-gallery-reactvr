'use strict';

import React from 'react';
import {
  asset,
  Mesh,
  View,
} from 'react-vr';
import Button from './Button';

class UI extends React.Component {

  render() {

    return(
      <View style={{
        flex: 1,
        flexDirection: 'row',
        width: 0.3,
        alignItems: 'stretch',
        transform: [
          {translate: [-0.144, -0.04, -0.3]},
        ],
      }}>
        <Button
          alignment={'left'}
          onClick={() => {
            this.props.onScrollLeftBegin();
          }} />
        <Button
          alignment={'right'}
          onClick={() => {
            this.props.onScrollRightBegin();
          }} />
      </View>
    );
  }
}

module.exports = UI;

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
        width: 2,
        alignItems: 'stretch',
        transform: [
          {translate: [-1.2, 2.85, -2]},
        ],
      }}>
        <Button
          alignment={'left'}
          onClick={() => {
            this.props.onScrollLeftBegin();
          }}
          onInteractionEnd={() => {
            this.props.onScrollLeftEnd();
          }}/>
        <Button
          alignment={'right'}
          onClick={() => {
            this.props.onScrollRightBegin();
          }}
          onInteractionEnd={() => {
            this.props.onScrollRightEnd();
          }}/>
      </View>
    );
  }
}

module.exports = UI;

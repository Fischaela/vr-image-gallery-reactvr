import React from 'react';
import {
  AppRegistry,
  asset,
  View,
} from 'react-vr';
import Images from './Images';
import Lightning from './Lightning';
import Room from './Room';
import UI from './UI';

class GEILDANKE_REACTVR_GALLERY extends React.Component {

  render() {
    return (
      <View>
        <Lightning />
        <Room />
        <Images />
        <UI />
      </View>
    );
  }
};

AppRegistry.registerComponent('GEILDANKE_REACTVR_GALLERY', () => GEILDANKE_REACTVR_GALLERY);

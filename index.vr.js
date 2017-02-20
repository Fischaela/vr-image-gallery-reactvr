import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Mesh,
  AmbientLight,
  PointLight,
} from 'react-vr';
import Room from './Room';
import Images from './Images';
import UI from './UI';

class GEILDANKE_REACTVR_GALLERY extends React.Component {

  render() {
    return (
      <View>
        <AmbientLight intensity={ 1.2 }/>
        <Room />
        <Images />
        <UI />
        <PointLight intensity={0.25}
          style={{
            color:'#ffffff',
            transform:[{translate : [0, 4, 0.25]}]}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('GEILDANKE_REACTVR_GALLERY', () => GEILDANKE_REACTVR_GALLERY);

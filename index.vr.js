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

  constructor() {
    super();

    this.state = {
      scrolling: 'none'
    }
  }

  render() {
    return (
      <View>
        <Lightning />
        <Room />
        <Images
          scrolling={this.state.scrolling} />
        <UI
          onScrollLeftBegin={() => {
            console.log('Scroll Left Begin');
            this.setState({ scrolling: 'left' });
          }}
          onScrollRightBegin={() => {
            this.setState({ scrolling: 'right' });
          }} />
      </View>
    );
  }
};

AppRegistry.registerComponent('GEILDANKE_REACTVR_GALLERY', () => GEILDANKE_REACTVR_GALLERY);

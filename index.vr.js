import React from 'react';
import {
  AppRegistry,
  asset,
  View,
} from 'react-vr';
import GdImages from './GdImages';
import Lightning from './Lightning';
import Room from './Room';
import UI from './UI';
import World from './World';

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
        <World />
        <Room />
        <UI
          onScrollLeftBegin={() => {
            this.setState({ scrolling: 'left' });
          }}
          onScrollRightBegin={() => {
            this.setState({ scrolling: 'right' });
          }}
          onScrollLeftEnd={() => {
            this.setState({ scrolling: 'none' });
          }}
          onScrollRightEnd={() => {
            this.setState({ scrolling: 'none' });
          }} />
      </View>
    );
  }
};

AppRegistry.registerComponent('GEILDANKE_REACTVR_GALLERY', () => GEILDANKE_REACTVR_GALLERY);

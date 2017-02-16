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

class GEILDANKE_REACTVR_GALLERY extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: 130,
      zoom: -70
    };
    this.lastUpdate = Date.now();
    this.rotate = this.rotate.bind(this);
    this.spaceSkymap = [
      '../static_assets/space_right.png',
      '../static_assets/space_left.png',
      '../static_assets/space_up.png',
      '../static_assets/space_down.png',
      '../static_assets/space_back.png',
      '../static_assets/space_front.png'
    ];
    this.styles = StyleSheet.create({
      menu: {
        flex: 1,
        flexDirection: 'column',
        width: 1,
        alignItems: 'stretch',
        transform: [{translate: [2, 2, -5]}],
      },
    });
  }

  componentDidMount() {
    this.rotate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  rotate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;
    this.lastUpdate = now;
    this.setState({
        rotation: this.state.rotation + delta / 150
    });
    this.frameHandle = requestAnimationFrame(this.rotate);
  }

  render() {
    return (
      <View>
        <AmbientLight intensity={ 1.2 }/>
        <Mesh
          style={{
            transform: [
              {translate: [0, 0.2, -1]},
              {scale: [1, 0.4, 0.001]},
            ],
          }}
          source={{mesh:asset('cube_wall.obj'), mtl:asset('cube_wall.mtl'), lit: true}} />
        <Mesh
          style={{
            transform: [
              {translate: [-1, 0.2, 0]},
              {scale: [0.001, 0.4, 1]},
            ],
          }}
          source={{mesh:asset('cube_wall.obj'), mtl:asset('cube_wall.mtl'), lit: true}} />
        <Mesh
          style={{
            transform: [
              {translate: [1, 0.2, 0]},
              {scale: [0.001, 0.4, 1]},
            ],
          }}
          source={{mesh:asset('cube_wall.obj'), mtl:asset('cube_wall.mtl'), lit: true}} />
        <Mesh
          style={{
            transform: [
              {translate: [0, 0.2, 1]},
              {scale: [1, 0.4, 0.001]},
            ],
          }}
          source={{mesh:asset('cube_wall.obj'), mtl:asset('cube_wall.mtl'), lit: true}} />
        <Mesh
          style={{
            transform: [
              {translate: [0, -0.2, 0]},
              {scale: [1, 0.001, 1]},
            ],
          }}
          source={{mesh:asset('cube_wall.obj'), mtl:asset('cube_wall.mtl'), lit: true}} />
        <PointLight intensity={0.25}
          style={{
            color:'#ffffff',
            transform:[{translate : [0, 4, 0.25]}]}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('GEILDANKE_REACTVR_GALLERY', () => GEILDANKE_REACTVR_GALLERY);

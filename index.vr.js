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
import Wall from './Wall';
import Image from './Image';

class GEILDANKE_REACTVR_GALLERY extends React.Component {

  render() {
    return (
      <View>
        <AmbientLight intensity={ 1.2 }/>
        <Mesh
          style={{
            transform: [
              {scale: [1, 1, 1]},
            ],
          }}
          source={{mesh:asset('cube_sky.obj'), mtl:asset('cube_sky.mtl'), lit: true}} />
        <Wall
          translate={[0, 0.2, -1]}
          scale={[1, 0.4, 0.001]} />
        <Wall
          translate={[-1, 0.2, 0]}
          scale={[0.001, 0.4, 1]}
          hasWindow={true} />
        <Wall
          translate={[1, 0.2, 0]}
          scale={[0.001, 0.4, 1]}
          hasWindow={true} />
        <Wall
          translate={[0, 0.2, 1]}
          scale={[1, 0.4, 0.001]}
          hasWindow={true} />
        <Wall
          translate={[0, -0.2, 0]}
          scale={[1, 0.001, 1]} />
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
        <PointLight intensity={0.25}
          style={{
            color:'#ffffff',
            transform:[{translate : [0, 4, 0.25]}]}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('GEILDANKE_REACTVR_GALLERY', () => GEILDANKE_REACTVR_GALLERY);

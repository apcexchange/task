import React from 'react';
import {Image, Text, View} from 'react-native';
import check from '../assets/images/check.png';
import * as Animatable from 'react-native-animatable';

const List = ({title, animation}) => {
  return (
    <Animatable.View
      animation="slideInDown"
      iterationCount={5}
      direction="alternate"
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 55,
        marginBottom: 15,
      }}>
      <Image source={check} style={{marginRight: 20}} />
      <Animatable.Text
        animation={animation}
        delay={2000}
        style={{color: '#000'}}>
        {title}
      </Animatable.Text>
    </Animatable.View>
  );
};

export default List;

/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default function TopTabs({
  label,
  active,
  onPress,
  style,
  paddingHorizontal,
  paddingVertical,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={{...style}}>
      <Text
        style={{
          fontWeight: active ? '600' : '400',
          padding: 6,
          elevation: active ? 5 : 0,
          backgroundColor: '#fff',
          borderWidth: active ? 1 : 0,
          borderColor: active ? '#fff' : '#fff',
          // paddingHorizontal: paddingHorizontal,
          // color: active && '#606F95',
          // paddingVertical: paddingVertical,
          // padding: 20,
          borderRadius: 20,
          marginRight: 35,
          fontSize: 15,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

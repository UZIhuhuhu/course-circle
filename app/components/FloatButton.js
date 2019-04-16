import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import PencilIcon from '../assets/pencil.png';
export default class FloatButton extends Component {
  render() {
    return (
      <View>
        <Image style={styles.button} source={PencilIcon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32
  }
});

import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import PencilIcon from '../assets/pencil.png';
export default class FloatButton extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View>
          <Image style={styles.button} source={PencilIcon} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32
  }
});

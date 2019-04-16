import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SwiperItem from '../components/SwiperItem';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <SwiperItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

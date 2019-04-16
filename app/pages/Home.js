import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import SwiperItem from '../components/SwiperItem';
import FloatButton from '../components/FloatButton';
const { height } = Dimensions.get('window');
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <SwiperItem />
        </View>
        <View>
          <Text>sdasdasdas</Text>
        </View>
        <View style={styles.float}>
          <FloatButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    position: 'relative'
  },
  float: {
    position: 'absolute',
    bottom: 20,
    right: 20
  }
});

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import SwiperItem from '../components/SwiperItem';
import FloatButton from '../components/FloatButton';
import CardItem from '../components/CardItem';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.block}>
            <SwiperItem />
          </View>
          <View style={styles.block}>
            <CardItem />
          </View>
        </ScrollView>
        <View style={styles.float}>
          <FloatButton />
        </View>
      </View>
    );
  }
}
const paddingCommon = {
  paddingHorizontal: 8,
  paddingVertical: 16
};
const borderCommon = {
  borderRadius: 4,
  borderWidth: 1,
  borderColor: '#f1f4f6'
};
const styles = StyleSheet.create({
  container: {
    ...paddingCommon
  },
  block: {
    ...paddingCommon,
    marginBottom: 10,
    backgroundColor: '#f1f4f6',
    ...borderCommon
  },
  float: {
    position: 'absolute',
    bottom: 24,
    right: 24
  }
});

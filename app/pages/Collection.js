import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import CardItem from '../components/CardItem';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.block}>
        <CardItem personal />
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
  block: {
    ...paddingCommon,
    marginBottom: 10,
    backgroundColor: '#f1f4f6',
    ...borderCommon
  }
});

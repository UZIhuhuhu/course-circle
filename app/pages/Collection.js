import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CardItem from '../components/CardItem';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CardItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

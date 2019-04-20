import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PencilIcon from '../assets/pencil.png';

class FloatButton extends Component {
  navigateToCreatePage = () => {
    const { navigation } = this.props;
    navigation.navigate('Create');
  };

  render() {
    return (
      <TouchableOpacity onPress={this.navigateToCreatePage}>
        <View style={styles.buttonContainer}>
          <Image style={styles.button} source={PencilIcon} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24
  },
  buttonContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5fbdaa',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default withNavigation(FloatButton);

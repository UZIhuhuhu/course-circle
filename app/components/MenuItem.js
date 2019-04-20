import React, { PureComponent } from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import ArrowRightIcon from '../assets/arrow-right.png';

class MenuItem extends PureComponent {
  static defaultProps = {
    params: {},
    detailPage: true
  };

  render() {
    const { icon, content, link, navigation, params, detailPage } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate(link, params);
        }}
        style={
          detailPage
            ? { ...styles.container, backgroundColor: '#ffffff' }
            : styles.container
        }
      >
        <Image source={icon} style={styles.leftIcon} />
        <Text style={styles.content}>{content}</Text>
        <Image source={ArrowRightIcon} style={styles.rightIcon} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingRight: 18,
    paddingBottom: 20,
    paddingLeft: 18,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftIcon: {
    width: 20,
    height: 20,
    marginRight: 9
  },
  content: {
    fontSize: 14,
    color: '#505458',
    flex: 1
  },
  rightIcon: {
    width: 22,
    height: 22
  }
});

export default withNavigation(MenuItem);

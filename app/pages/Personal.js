import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Avatar from '../assets/avatar3.png';
import AccountIcon from '../assets/account.png';
import CollectIcon from '../assets/collect.png';
import MenuItem from '../components/MenuItem';
const menuList = [
  {
    icon: AccountIcon,
    content: '我关注的人',
    link: 'Follow'
  },
  {
    icon: CollectIcon,
    content: '我回复的话题',
    link: 'Collection'
  }
];
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.avatar} source={Avatar} />
        </View>
        {menuList.map(item => {
          return <MenuItem {...item} key={item.content} />;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    marginTop: 30,
    marginBottom: 30,
    width: 100,
    height: 100,
    borderRadius: 50
  }
});

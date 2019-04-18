import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import Avatar from '../assets/avatar.png';
const createDiscussionItem = ({ nickname, content, avatar }, index) => (
  <View style={styles.surroundingItem} key={index}>
    <Image
      source={avatar}
      style={{
        width: 45,
        height: 45
      }}
    />
    <View
      style={{
        marginLeft: 20,
        marginRight: 24,
        flex: 3
      }}
    >
      <Text style={styles.title}>{nickname}</Text>
      <Text style={styles.infoDetail}>{content || 'N/A'}</Text>
    </View>
  </View>
);

export default class CardItem extends Component {
  state = {
    discussionList: [
      {
        nickname: 'Wynn',
        content: '在南京邮电大学读书是一种怎样的体验',
        avatar: Avatar
      },
      {
        nickname: 'Wynn',
        content: '在南京邮电大学读书是一种怎样的体验',
        avatar: Avatar
      },
      {
        nickname: 'Wynn',
        content: '在南京邮电大学读书是一种怎样的体验',
        avatar: Avatar
      }
    ]
  };
  render() {
    const { discussionList } = this.state;
    return (
      <View>
        {discussionList.map((item, index) => createDiscussionItem(item, index))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  surroundingItem: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingVertical: 28,
    paddingLeft: 20,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4
  },
  title: {
    color: '#5fbdaa',
    fontSize: 20,
    borderRadius: 4,
    overflow: 'hidden'
  },
  infoDetail: {
    fontSize: 12,
    color: '#98a6ad',
    lineHeight: 18
  }
});

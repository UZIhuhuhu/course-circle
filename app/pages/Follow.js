import React, { Component } from 'react';
import { Image, StyleSheet, View, ScrollView, FlatList } from 'react-native';
import Avatar from '../assets/avatar.png';
import FollowItem from '../components/FollowItem';
export default class Follow extends Component {
  state = {
    followingList: [
      {
        avatar: Avatar,
        nickname: 'A同学',
        classroom: '通信与信息工程学院'
      },
      {
        avatar: Avatar,
        nickname: 'B同学',
        classroom: '通信与信息工程学院'
      },
      {
        avatar: Avatar,
        nickname: 'C同学',
        classroom: '通信与信息工程学院'
      }
    ]
  };
  renderItem = ({ item }) => <FollowItem {...item} />;

  render() {
    const { followingList } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            keyboardShouldPersistTaps='always'
            data={followingList}
            renderItem={this.renderItem}
            keyExtractor={(item, index) =>
              index === 0 ? '0' : String(item.id)
            }
            ListHeaderComponent={<View style={{ paddingVertical: 5 }} />}
          />
        </ScrollView>
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
  },
  container: {
    paddingHorizontal: 12,
    paddingBottom: 16
  },
  image: {
    width: 375,
    position: 'absolute',
    top: 250,
    left: '50%',
    marginLeft: -187.5
  }
});

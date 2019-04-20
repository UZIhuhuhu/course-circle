import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Avatar from '../assets/avatar.png';

class DetailPage extends Component {
  state = {
    nickname: 'Wynn',
    title: '在南京邮电大学读书是一种怎样的体验',
    content:
      '南京邮电大学的学生在充满挑战的学术氛围中成长，体验并创造着丰富的校园文化生活。您可以通过本栏目提供的链接了解南邮学子的学习生活的各个层面。在这里，你可以找到您所需要的所有信息栏目。',
    replyList: [
      {
        text: '你把大伙都给逗乐了',
        author: 'Wynn'
      },
      {
        text: '你把大伙都给逗乐了',
        author: 'Wynn'
      },
      {
        text: '你把大伙都给逗乐了',
        author: 'Wynn'
      }
    ]
  };

  render() {
    const { nickname, title, content, replyList } = this.state;

    return (
      <View style={styles.block}>
        <View style={styles.surroundingItem}>
          <View style={styles.headerItem}>
            <Image
              source={Avatar}
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
              <Text style={styles.titleDetail}>{title}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.infoDetail}>{content}</Text>
          </View>
        </View>
        <View style={styles.divide}>
          <Text style={styles.divideDetail}>回复</Text>
        </View>
        <View>
          {replyList.map((item, index) => (
            <View key={index} style={styles.replyContainer}>
              <View style={styles.replayHeader}>
                <Image
                  source={Avatar}
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
                  <Text style={styles.title}>{item.author}</Text>
                </View>
              </View>
              <View style={{ paddingLeft: 10, paddingBottom: 10 }}>
                <Text style={{ color: '#000000' }}>{item.text}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const paddingCommon = {
  paddingHorizontal: 8,
  paddingVertical: 8
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
  surroundingItem: {
    marginTop: 8,
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 4
  },
  headerItem: {
    paddingLeft: 10,
    paddingRight: 10,
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
  titleDetail: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 18
  },
  infoDetail: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 18
  },

  content: { paddingTop: 10, paddingLeft: 10, paddingRight: 10 },
  divide: {
    padding: 10
  },
  divideDetail: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 18
  },
  replyContainer: {
    margin: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column'
    // alignItems: 'center'
  },
  replayHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default withNavigation(DetailPage);

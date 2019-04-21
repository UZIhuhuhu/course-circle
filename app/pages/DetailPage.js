import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Avatar from '../assets/avatar.png';
import { getCommentDetail, addReply } from '../api/index';

class DetailPage extends Component {
  state = {
    author: '',
    title: '',
    text: '',
    Replys: [],
    comment: ''
  };

  componentDidMount() {
    const commentId = this.props.navigation.getParam('id');
    getCommentDetail(commentId)
      .then(res => res.json())
      .then(({ comment }) => {
        this.setState({
          author: comment.author,
          title: comment.title,
          text: comment.text,
          Replys: comment.Replys
        });
      });
  }

  handleInput = ({ nativeEvent: { text } }) => {
    this.setState({ comment: text });
  };

  handleSubmit = () => {
    const commentId = this.props.navigation.getParam('id');
    const { comment } = this.state;
    addReply(comment, commentId)
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => ({
          Replys: prevState.Replys.concat(res.reply),
          comment: ''
        }));
        Alert.alert('评论成功');
      });
  };

  render() {
    const { author, title, text, Replys } = this.state;

    return (
      <View style={styles.block}>
        <ScrollView>
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
                <Text style={styles.title}>{author}</Text>
                <Text style={styles.titleDetail}>{title}</Text>
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.infoDetail}>{text}</Text>
            </View>
          </View>
          <View style={styles.divide}>
            <Text style={styles.divideDetail}>回复</Text>
          </View>
          <View>
            {Replys.map((item, index) => (
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
        </ScrollView>
        <View
          style={{
            backgroundColor: '#ffffff',
            marginHorizontal: 10,
            position: 'absolute',
            bottom: 10,
            width: '100%'
          }}
        >
          <KeyboardAvoidingView
            behavior="position"
            enabled
            // contentContainerStyle={styles.container}
          >
            <TextInput
              placeholder="留下评论吧"
              returnKeyType="send"
              onChange={this.handleInput}
              onSubmitEditing={this.handleSubmit}
              value={this.state.comment}
            />
          </KeyboardAvoidingView>
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
    ...borderCommon,
    height: 600
  },
  container: {
    ...paddingCommon
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

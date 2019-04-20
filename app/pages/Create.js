import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { addComment } from '../api/index';

class Create extends Component {
  state = {
    title: '',
    content: ''
  };

  handleTitleInput = ({ nativeEvent: { text } }) => {
    this.setState({ title: text });
  };

  isEmpty = () => this.state.title && this.state.content;

  handleContentInput = ({ nativeEvent: { text } }) => {
    this.setState({ content: text });
  };

  hanldeSubmit = () => {
    const { title, content } = this.state;
    const { navigation } = this.props;
    if (this.isEmpty()) {
      addComment(title, content)
        .then(res => res.json())
        .then(res => {
          if (res) {
            Alert.alert('Alert Title', '发布成功', [
              {
                text: 'OK',
                onPress: () => {
                  navigation.goBack();
                }
              }
            ]);
          }
        });
    } else {
      Alert.alert('标题和内容不能为空');
    }
  };

  render() {
    return (
      <View style={styles.block}>
        <View style={styles.input}>
          <TextInput
            placeholder="请输入标题"
            onChange={this.handleTitleInput}
          />
        </View>
        <View style={styles.contentInput}>
          <TextInput
            placeholder="请输入内容"
            onChange={this.handleContentInput}
            style={{ height: 100 }}
          />
        </View>
        <View style={{ width: 100 }}>
          <Button
            title="发布话题"
            color="#5fbdaa"
            onPress={this.hanldeSubmit}
          />
        </View>
      </View>
    );
  }
}
const paddingCommon = {
  paddingHorizontal: 16,
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
  input: {
    backgroundColor: '#ffffff',
    marginBottom: 20,
    borderRadius: 4
  },
  contentInput: {
    backgroundColor: '#ffffff',
    marginBottom: 20,
    height: 100,
    borderRadius: 4
  }
});
export default withNavigation(Create);

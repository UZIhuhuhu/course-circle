import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
class Create extends Component {
  state = {
    title: '',
    content: ''
  };
  handleTitleInput = ({ text }) => {
    this.setState({ title: text });
  };

  handleContentInput = ({ text }) => {
    this.setState({ content: text });
  };
  render() {
    return (
      <View style={styles.block}>
        <View style={styles.input}>
          <TextInput
            placeholder='请输入标题'
            onChange={this.handleTitleInput}
          />
        </View>
        <View style={styles.contentInput}>
          <TextInput
            placeholder='请输入内容'
            onChange={this.handleContentInput}
            style={{ height: 100 }}
          />
        </View>
        <View style={{ width: 100 }}>
          <Button title='发布话题' color='#5fbdaa' />
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

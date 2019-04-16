import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
export default withNavigation(({ avatar, nickname, classroom }) => (
  <TouchableOpacity style={styles.item} activeOpacity={1}>
    <View style={styles.itemContainer}>
      <View>
        <Image style={styles.avatar} source={avatar} />
      </View>
      <View style={{ marginLeft: 20 }}>
        <View>
          <Text style={styles.nickname}>{nickname}</Text>
        </View>
        <View>
          <Text>{classroom}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'rgba(95,189,170,0.2)',
    borderRadius: 4,
    marginBottom: 10
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center'
    // justifyContent: 'space-between'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  nickname: {
    fontSize: 16
  }
});

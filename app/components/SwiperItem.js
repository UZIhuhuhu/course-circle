import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import SwiperImage1 from '../assets/swiper1.jpg';
import SwiperImage2 from '../assets/swiper2.jpg';
import SwiperImage3 from '../assets/swiper3.jpg';

export default class SwiperItem extends Component {
  state = {
    followingList: [
      {
        avatar: SwiperImage1
      },
      {
        avatar: SwiperImage2
      },
      {
        avatar: SwiperImage3
      }
    ]
  };

  render() {
    const { followingList } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <Swiper style={styles.wrapper} activeDotColor="#fff">
            {followingList.map(uri => (
              <View
                borderTopRightRadius={4}
                borderTopLeftRadius={4}
                style={{
                  borderTopRightRadius: 4,
                  borderTopLeftRadius: 4,
                  flex: 1,
                  overflow: 'hidden',
                  width: '100%'
                }}
                key={uri}
              >
                <Image
                  key={uri}
                  source={uri.avatar}
                  style={{
                    flex: 1,
                    height: 250,
                    width: '100%'
                  }}
                />
              </View>
            ))}
          </Swiper>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  wrapper: {
    height: 250,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  }
});

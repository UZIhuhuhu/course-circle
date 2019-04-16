import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
import BackButton from './components/BackButton';
import User from './pages/Personal';
import Home from './pages/Home';
import Follow from './pages/Follow';
import Collection from './pages/Collection';
import HomeActiveIcon from './assets/home-active.png';
import HomeInActiveIcon from './assets/home-inactive.png';
import UserActiveIcon from './assets/user-active.png';
import UserInActiveIcon from './assets/user-inactive.png';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#36404a'
  },
  headerTitleStyle: {
    color: '#fff',
    fontSize: 17
  },
  headerBackTitle: null,
  headerBackImage: <BackButton />
};

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: '首页'
      }
    }
  },
  {
    defaultNavigationOptions,
    initialRouteName: 'Home'
  }
);

const UserStack = createStackNavigator(
  {
    User: {
      screen: User,
      navigationOptions: {
        title: '个人中心'
      }
    },
    Collection: {
      screen: Collection,
      navigationOptions: {
        title: '回复的话题'
      }
    },
    Follow: {
      screen: Follow,
      navigationOptions: {
        title: '关注的人'
      }
    }
  },
  {
    defaultNavigationOptions,
    initialRouteName: 'User'
  }
);

const TabContainer = createBottomTabNavigator(
  {
    Home: HomeStack,
    User: UserStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      let tabBarVisible = true;
      if (
        navigation.state.index > 0 ||
        navigation.state.routes[0].routeName === 'Authentication'
      ) {
        tabBarVisible = false;
      }

      return {
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state;

          let icon;
          let iconStyle;

          switch (routeName) {
            case 'Home':
              icon = focused ? HomeActiveIcon : HomeInActiveIcon;
              iconStyle = { width: 24, height: 24 };
              break;
            case 'User':
              icon = focused ? UserActiveIcon : UserInActiveIcon;
              iconStyle = { width: 24, height: 24 };
              break;
            default:
              break;
          }

          return <Image source={icon} style={iconStyle} />;
        },
        tabBarVisible
      };
    },
    tabBarOptions: {
      activeTintColor: '#5fbdaa',
      inactiveTintColor: '#8e8e93',
      labelStyle: {
        fontSize: 10
      }
    }
  }
);

export default createAppContainer(TabContainer);

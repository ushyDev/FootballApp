import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {COLORS} from '../colors/colors.js'

import MatchScreen from '../screens/MatchScreen';
import ChatScreen from '../screens/ChatScreen';
import GameScreen from '../screens/GameScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';

const MainNavigator = createBottomTabNavigator({
    
    profile: {
        screen: ProfileScreen,
        navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name="md-home" size={34} color={tintColor} />
        ),
        }
    },
    home: {
        screen: HomeScreen,
        navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <FontAwesome name="wechat" size={34} color={tintColor} />
        ),
        }
    },
    chat: {
        screen: ChatScreen,
        navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name="md-football" size={34} color={tintColor} />
        ),
        }
    },
    game: {
        screen: GameScreen,
        navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <FontAwesome name="gamepad" size={34} color={tintColor} />
        ),
        }
    },
    match: {
            screen: MatchScreen,
            navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <AntDesign name="user" size={34} color={tintColor} />
            ),
            }
        },
},{
    initialRouteName: 'match',
defaultNavigationOptions: ({navition}) => ({
}),
tabBarOptions: {
    showLabel: false,
    activeTintColor: COLORS.green,
    inactiveTintColor: COLORS.gray,
    style:{
    backgroundColor: 'white',
}
},
})

export default createAppContainer(MainNavigator)

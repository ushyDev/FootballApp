import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import {COLORS} from '../colors/colors.js'

import Score from './Score'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class TopGradient extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
          <LinearGradient 
          colors={[COLORS.blue, COLORS.green]}
          style={styles.gradient}
          >
              <View style={styles.textContener}>
                <Text style={styles.textTop}>TUESDAY NIGHT FC</Text>
                <Text style={styles.textBottom}>Match Results</Text>
                <Text style={styles.textScore}>30/4</Text>
              </View>
          </LinearGradient>
            <View style={styles.teams}>
                <Score
                colorA={COLORS.green}
                colorSecondA={COLORS.blue}
                colorB={COLORS.pink}
                colorSecondB={COLORS.violet}
                captainNameFirst='Chris Mathew'
                captainNameSecond='Boris Gorero'
                captainImageFirst='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/66362038_2330536857039558_9097187362282143744_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=vPTa0mul-REAX8xooj8&_nc_ht=scontent-frt3-1.xx&oh=38cfb303b96890f4e0b5b7de1cd09e55&oe=6040DAFC'
                captainImageSecond='https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70'
                positionCaptainFirst='Fit'
                positionCaptainSecond='Injuried'
                />
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        flex: 1,
        width: windowWidth,
    },
    gradient:{
        width: windowWidth,
        height: 170
    },
    textContener:{
        justifyContent: 'center',
        alignItems: 'center',
        top: 40
    },
    textTop:{
        color: 'rgba(255,255,255,0.5)',
        fontWeight: 'bold',
        marginBottom: 5
    },
    textBottom: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    },
    textScore: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 20,
    },
    teams: {
        position: 'absolute',
        top: 110,
        flex:1,
        alignSelf: 'center',
    }
});

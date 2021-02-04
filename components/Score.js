import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Team from './Team'
import {COLORS} from '../colors/colors.js'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
        <Team
         team='Team A' 
         teamName='Tuesday Night Football' 
         color={this.props.colorA} 
         secondColor={this.props.colorSecondA} 
         captainName={this.props.captainNameFirst}
         captainImage={this.props.captainImageFirst}
         positionCaptain={this.props.positionCaptainFirst}

         />
            <View style={styles.scoreContener}>
                <LinearGradient
                 colors={[COLORS.violet, COLORS.pink]}
                 style={styles.gradient}
                 start={{x:1, y: 0}}
                >
                    <Text style={styles.textScore}>0:3</Text>
                </LinearGradient>
                <View style={styles.timeContener}>
                    <Text style={styles.timeText}>Full Time</Text>
                </View>
            </View>
        <Team 
        team='Team A' 
        teamName='Tuesday Night Football' 
        color={this.props.colorB}
         secondColor={this.props.colorSecondB}
         captainName={this.props.captainNameSecond}
         captainImage={this.props.captainImageSecond}
         positionCaptain={this.props.positionCaptainSecond}

         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener:{
        flex: 1,
        width: windowWidth,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    scoreContener: {
        width: 100,
        height: 35,
        marginHorizontal: 12,
        top: 40
    },
    gradient: {
        width: 100,
        height: 35,
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textScore: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 27
    },
    timeContener: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    timeText: {
        fontWeight: 'bold',
        color: 'black'
    }
});

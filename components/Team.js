import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import {COLORS} from '../colors/colors.js';
import { LinearGradient } from 'expo-linear-gradient'



export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
          <Ionicons name='ios-football' size={44} color={this.props.color}/>
          <Text style={styles.text}>{this.props.teamName}</Text>
          <View style={styles.teamAB}>
          <LinearGradient 
          colors={[this.props.color, this.props.secondColor]}
          style={styles.gradient}
          >
              <Text style={styles.textTeam}>{this.props.team}</Text>
          </LinearGradient>
          </View>
          <View style={styles.captainContener}>
                <View style={{flexDirection: 'row'}}>
                    <Image 
                    style={styles.imageProfile}
                    source={{uri: this.props.captainImage}}/>
                    <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textName}>{this.props.captainName}</Text>
                        <View style={{flexDirection: 'row'}}>
                             <Text style={styles.textCaptain}>Captain</Text>
                             <View style={styles.redPoint}></View>
                        </View>
                    </View>
                </View>
                <View style={[styles.captainPosition, {borderColor: this.props.color}]}>
                    <Text style={[styles.textPosition, {color: this.props.color}]}>{this.props.positionCaptain}</Text>
                </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener:{
        width: 120,
        height: 160,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
    },
    text:{
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15
    },
    teamAB:{
        width: 120,
        height: 20,
    },
    gradient: {
        width: 120,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTeam: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    captainContener: {
        position: 'absolute',
        bottom: -80
    },
    imageProfile: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10
    },
    textName: {
        fontSize: 12,
        fontWeight: '200'
    },
    textCaptain:{
        fontSize: 12,
        fontWeight: 'bold'
    },
    redPoint: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        top: 2.5,
        left: 10        
    },
    captainPosition: {
        alignSelf: 'flex-end',
        margin: 5,
        borderWidth: 1,
        padding: 0,
        width: 50,
        alignItems: 'center',
        borderRadius: 5
    },
    textPosition:{
        fontSize: 10,
        
    }
});
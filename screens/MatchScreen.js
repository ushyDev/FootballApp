import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {COLORS} from '../colors/colors.js';

import TopGradient from '../components/TopGradient';
import TabBar from '../components/TabBar'
import Gallery from '../components/Gallery'

export default class MatchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.conterner}>
          <TopGradient />
          <TabBar />
          <Gallery />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    conterner: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    
});

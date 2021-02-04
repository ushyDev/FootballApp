import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {COLORS} from '../colors/colors.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
          <View style={styles.tabsContainer}>
            <View style={[styles.tab, {backgroundColor: COLORS.green,}]}>
                <Text style={[styles.textTab, {color: 'white', fontWeight: 'bold'}]}>Highlights</Text>
            </View>
            <View style={[styles.tab]}>
                <Text style={[styles.textTab, {color: 'black'}]}>Summary</Text>
            </View>
            <View style={[styles.tab]}>
                <Text style={[styles.textTab, {color: 'black'}]}>Stats</Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        width: windowWidth,
        left: 20,
        marginTop: 28,
        marginBottom: 20

    },
    tabsContainer: {
        flexDirection: 'row'
    },
    tab: {
        height: 30,
        width: 100,
        borderWidth: 0,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2
    },
    textTab: {
        fontSize: 16
    }
});
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import {COLORS} from '../colors/colors.js';
import {dataImage} from '../data/data.js'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _renderItem = ({item}) => {
      return(
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: item.uri}} />
          </View>
      )
  }

  render() {
    return (
      <View style={styles.contener}>
          <FlatList 
          style={styles.fltatlistContener}
          data={dataImage}
          renderItem={this._renderItem}
          keyExtractor={index => index.toString()}
          numColumns={3}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener:{
        flex:1,
        justifyContent: 'center',
        left: 20        
    },
    fltatlistContener:{
        width: windowWidth
    },
    image: {
        width: 110,
        height: 102,
        borderRadius: 15
    },
    imageContainer: {
        margin:5
    }
});

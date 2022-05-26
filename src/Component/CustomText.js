import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default class CustomText extends Component {
  render() {
    return (
      <Text
        style={{
          fontSize: hp('1.8'),
          color: '#AAAAAA',
          fontFamily:"OpenSans-Bold",
          marginLeft: this.props.right
            ? Dimensions.get('screen').width / 120
            : null,
          width: this.props.right ? null : Dimensions.get('screen').width / 10,
          textAlign: 'right',
        }}>
        {this.props.title}
      </Text>
    );
  }
}

const styles = StyleSheet.create({});

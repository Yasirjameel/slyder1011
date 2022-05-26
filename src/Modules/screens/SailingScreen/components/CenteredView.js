import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default class CenteredView extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={{
            // width: "80%",
            borderColor: '#707070',
            borderWidth: 2,
            paddingVertical: 5,
            borderRadius: 20,
            paddingHorizontal: 20,
            alignSelf: "center",
            top:10
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('2%'), color: '#AAAAAA',
                fontFamily: "OpenSans-Bold",
              }}>
              POS
            </Text>
            <Text
              style={{
                fontSize: hp('2%'), color: '#AAAAAA',
                fontFamily: "OpenSans-Bold",
              }}>
              GPS
            </Text>
          </View>

          <Text
            style={{
              fontSize: hp('3.7%'),
              color: '#AAAAAA',
              fontFamily: "DINAlternate-Bold",
              textAlign: 'center',
            }}>
            {/* {this.props.Coordinates} */}
            N 36°54’51.4’’ | W 006°51’50.0
          </Text>
        </View>

        <Image
          style={{
            alignSelf: 'center',
            transform: [{ rotate: `${this.props.degree}` }],
            height: Dimensions.get('window').height / 1.8,
            width: Dimensions.get('window').height / 1.8,
            marginVertical: 30,
          }}
          source={require('../../../../../images/BackLayer2.png')}></Image>
        <Image
          style={{
            position: 'absolute',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            height: Dimensions.get('window').height / 3,
            width: Dimensions.get('window').height / 5,
            top: Dimensions.get('window').height / 4.1,
            left:
              this.props.wt == 0
                ? Dimensions.get('window').height / 5.2
                : Dimensions.get('window').height / 5.6,
          }}
          source={require('../../../../../images/LowerLayer4.png')}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View
            style={{
              borderColor: '#707070',
              borderWidth: 2,
              borderRadius: 20,
              padding: 8,
              bottom:20,
              width: Dimensions.get('window').width / 7,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold",
                }}>
                WATER TEMP
              </Text>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold",
                  marginLeft: 60,
                }}>
                °C
              </Text>
            </View>

            <Text
              style={{
                textAlign: 'center',
                marginLeft: 20,
                marginTop: -20,
                fontSize: hp('8%'),
                color: '#AAAAAA',
                fontFamily: "DINAlternate-Bold",
              }}>
              {this.props.wt}
            </Text>
          </View>

          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1.3,
              borderRadius: 20,
              padding: 8,
              bottom:20,
              width: Dimensions.get('window').width / 7,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold",
                }}>
                DEPTH
              </Text>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold",
                  marginLeft: 50,
                }}>
                m
              </Text>
            </View>

            <Text
              style={{
                textAlign: 'center',
                fontSize: hp('8%'),
                marginTop: -20,
                color: '#AAAAAA',
                fontFamily: "DINAlternate-Bold",
              }}>
              {this.props.Depth}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

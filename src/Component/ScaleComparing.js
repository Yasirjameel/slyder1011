import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
console.log(windowWidth - 100);

export default function ScaleComparing(props) {
  return (
    <View style={{ width: 130, alignItems: 'center' }}>
      <View style={{ marginBottom: 12, width: '100%' }}>
        <Text
          style={{
            fontSize: hp('3.5%'),

            color: props?.skillColor,
            marginLeft: 16,
            textAlign: 'center',
            fontFamily: "OpenSans-SemiBold"
          }}>
          {props.fill}%
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingVertical: 16,
            marginRight: 16,
          }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row-reverse',
                }}>
                <Neomorph
                  inner // <- enable inner shadow
                  darkShadowColor="gray" // <- set this
                  lightShadowColor="gray"
                  style={{
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 1,
                    shadowColor: 'gray',
                    shadowRadius: 0,
                    borderRadius: 150,
                    backgroundColor: 'gray',
                    width: index == 0 || index == 10 || index == 5 ? 26 : 18,
                    height: 4,
                  }}>
                  <View
                    style={{
                      width: index == 0 || index == 10 || index == 5 ? 26 : 18,
                      height: 2,
                      backgroundColor: '#000',
                      borderRadius: 150,
                    }}
                  />
                </Neomorph>
              </View>
            );
          })}
        </View>
        <Neomorph
          inner={true} // <- enable inner shadow
          darkShadowColor="#000" // <- set this
          lightShadowColor="#736D69"
          style={{
            shadowOffset: { width: 0, height: 12 },
            shadowOpacity: 10,
            shadowColor: '#fff',
            shadowRadius: 3,
            borderRadius: 200,
            backgroundColor: '#736D69',
            width: Dimensions.get('screen').width / 42,
            height: Dimensions.get('screen').width / 4.5,
            justifyContent: 'center',

            // ...include most of View/Layout styles
          }}>
          <View
            style={{
              overflow: 'hidden',
              flexDirection: 'row',
              width: Dimensions.get('screen').width / 42 - 15,
              backgroundColor: '#252525',
              borderRadius: 100,
              height: Dimensions.get('screen').width / 4.5 - 20,
              alignSelf: 'center',
              elevation: 30,
            }}>
            <View
              style={{
                width: '100%',
                height: `${props.fill}%`,
                backgroundColor: props?.red ? '#B3001C' : '#D66717',
                borderRadius: 100,
                alignSelf: 'flex-end',
              }}
            />
          </View>
        </Neomorph>
      </View>

      <View style={{ marginTop: 12 }}>
        <Text
          style={{
            color: props?.red ? '#B3001C' : '#AAAAAA',
            fontSize: hp('2%'),
            textAlign: 'center',
            fontFamily: 'OpenSans-Bold'
          }}>
          {props.title}
        </Text>
        <Text
          style={{
            color: props?.red ? '#B3001C' : '#AAAAAA',
            fontSize: hp('2%'),
            textAlign: 'center',
            fontFamily: 'OpenSans-Bold'
          }}>
          {props.scale}
        </Text>
      </View>
    </View>
  );
}

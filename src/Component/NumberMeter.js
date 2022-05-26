import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function NumberMeter({ number, skill, width, red, dark }) {
  return (
    <Neomorph
      inner={true} // <- enable inner shadow
      darkShadowColor="#151515" // <- set this
      lightShadowColor="#414141"
      style={{
        shadowOffset: { width: 8, height: 10 },
        shadowOpacity: 1,
        shadowColor: 'white',
        shadowRadius: 3,
        borderRadius: 145,
        backgroundColor: '#252525',
        width: Dimensions.get('screen').width / 11.5 - width,
        height: Dimensions.get('screen').width / 32,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: Dimensions.get('screen').width / 11.5 - width - 10,
          backgroundColor: dark ? '#282828' : '#313131',
          borderRadius: 100,
          height: Dimensions.get('screen').width / 32 - 10,
        }}>
        <View
          style={{
            width:  skill.toString().length > 1 ? "60%" : '70%',

            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            height: '100%',
            borderRightWidth: 1,
            borderColor: '#B1B1B',
          }}>
          <View style={{ flexDirection: 'row', width:  number.toString().length <=3 ? '75%' : "92%", justifyContent: "space-evenly", alignSelf: "center" }}>
            <RenderNumber number={number} red={red} />
          </View>
        </View>
        <View
          style={{
            width: skill.toString().length > 1 ? "40%" : '30%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{ fontSize: hp('2%'), color: red ? '#B3001C' : '#AAAAAA', fontFamily: "OpenSans-SemiBold" , fontStyle:'italic' }}>
            {skill}
          </Text>
        </View>
      </View>
    </Neomorph>
  );
}

function RenderNumber({ number, red }) {
  let view = []
  for (let i = 0; i < number.toString().length; i++) {
    view.push(
      <Text
        key={i}
        numberOfLines={1}
        style={{ fontSize: hp('2.8%'), color: red ? '#B3001C' : '#AAAAAA', fontFamily: "OpenSans-Regular" }}>
        {number[i]}
      </Text>
    )
  }
  return view
}

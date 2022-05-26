import React from 'react';
import { Dimensions, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
export default function NavBarbtn(props) {
  return (
    <Neomorph
      inner={true} // <- enable inner shadow
      darkShadowColor="#232323" // <- set this
      lightShadowColor="#2e2e2e"
      style={{
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 1,
        shadowColor: 'white',
        shadowRadius: 1,
        borderRadius: 36,
        backgroundColor: '#141414',
        width: Dimensions.get('screen').width / 14,
        height: Dimensions.get('screen').height / 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LinearGradient
        colors={['#484848', '#212121']}
        useAngle={true}
        angle={145}
        angleCenter={{x: 1, y: 0}}
        style={{
          width: '88%',
          height: '86%',
          justifyContent: 'center',
          alignItems: 'center',

          borderWidth: 2,
          borderColor: props.borderCol,
          borderRadius: 32,
        }}>
        <Text
          style={{
            color: '#AAAAAA',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {props.text}
        </Text>
      </LinearGradient>
    </Neomorph>
  );
}

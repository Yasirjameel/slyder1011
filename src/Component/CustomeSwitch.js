import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { Switch } from 'react-native-switch';

export default function CustomeSwitch() {
  const [toggleSwitch1, SetToggleSwitch1] = useState(false);
  return (
    <View>
      <Neomorph
        inner
        darkShadowColor="#242424" // <- set this
        lightShadowColor="#3B3B3B"
        style={{
          shadowOffset: { width: 0, height: 16 },
          shadowOpacity: 10,
          shadowColor: 'white',
          shadowRadius: 3,
          borderRadius: 300,
          backgroundColor: '#252525',
          // width: 175,
          // height: 65,
          height: hp('7%'), // 70% of height device screen
          width: wp('10%'), // 80% of width device screen
        }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Switch
            onValueChange={VAL => SetToggleSwitch1(VAL)}
            value={toggleSwitch1}
            disabled={false}
            inactiveTextStyle={{
              fontSize: hp('2%'),
              paddingLeft: wp('0.8%'),
              color: '#AAAAAA',
              fontFamily: "OpenSans-Bold"
            }}
            activeTextStyle={{
              fontSize: hp('2%'),
              paddingRight: wp('0.8%'),
              color: '#AAAAAA',
              fontFamily: 'OpenSans-Bold'
            }}
            activeText={'ON'}
            inActiveText={'OFF'}
            circleSize={Dimensions.get('screen').width / 43}
            barHeight={hp('5.5%')}
            circleBorderWidth={Dimensions.get('screen').height / 45}
            circleBorderInactiveColor={'#333333'}
            circleBorderActiveColor={'#333333'}
            backgroundActive={'#2E2D2D'}
            backgroundInactive={'#2E2D2D'}
            circleActiveColor={'#98FF31'}
            circleInActiveColor={'#606060'}
            changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
            innerCircleStyle={{
              width: hp('9%'),
              height: hp('5.5%'),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              elevation: 2,
            }} // style for inner animated circle for what you (may) be rendering inside the circle
            renderActiveText={true}
            renderInActiveText={true}
            switchLeftPx={1.6} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={1.8} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={4} // multiplied by the `circleSize` prop to calculate total width of the Switch
            switchBorderRadius={60}
          />
        </View>
      </Neomorph>
    </View>
  );
}

const styles = StyleSheet.create({});

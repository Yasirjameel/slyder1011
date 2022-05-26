import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function Port({ text, active, red }) {
    return (
        <View>
            <Neomorph
                inner={true} // <- enable inner shadow
                darkShadowColor="#191919" // <- set this
                lightShadowColor="#444444"
                style={{
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 1,
                    shadowColor: 'white',
                    shadowRadius: 3,
                    borderRadius: 145,
                    backgroundColor: '#141414',
                    width: 90,
                    height: 40,
                    marginTop: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // ...include most of View/Layout styles
                }}>
                <View
                    style={{
                        width: 70,
                        height: 25,
                        backgroundColor: active && red ? '#B3001C' : active ? '#19FF13' : '#444444',
                        borderRadius: 100,
                        elevation: 10,
                        opacity: 100,
                    }}
                />
            </Neomorph>
            <Text
                style={{
                    fontSize: hp('2%'),
                    color: red ? '#B3001C' : '#AAAAAA',
                    textAlign: 'center',
                    marginTop: 12,
                    fontFamily: "OpenSans-Bold",
                }}>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})
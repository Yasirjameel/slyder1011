import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Neomorph } from 'react-native-neomorph-shadows';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function LongNeomorphButton({ number, skill }) {
    return (
        <Neomorph
            inner={true} // <- enable inner shadow
            darkShadowColor="#151515" // <- set this
            lightShadowColor="#414141"
            style={{
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 1,
                shadowColor: 'white',
                shadowRadius: 3,
                borderRadius: 145,
                backgroundColor: '#313131',
                width: Dimensions.get('screen').width / 9,
                height: Dimensions.get('screen').width / 32,
                justifyContent: 'center',
                alignItems: 'center',
                // ...include most of View/Layout styles
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    width: Dimensions.get('screen').width / 9 - 12,
                    backgroundColor: '#313131',
                    borderRadius: 26,
                    height: Dimensions.get('screen').width / 32 - 10,
                }}>

                <RenderNumber number={number} />

                <View
                    style={{
                        width: '16%',
                        flexDirection: 'row',
                        fontSize: 50,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: '#AAAAAA',
                            fontSize: hp('1.8%'),
                            textAlign: 'center',
                            fontFamily: "OpenSans-Regular",
                            fontStyle: 'italic'
                        }}>
                        {skill}
                    </Text>
                </View>
            </View>
        </Neomorph>
    )
}

function RenderNumber({ number }) {
    let view = []
    for (let i = 0; i < number.toString().length; i++) {
        view.push(
            <View
                key={i}
                style={{
                    width: '16%',
                    flexDirection: 'row',

                    alignSelf: 'center',
                    borderRightWidth: 1,
                    borderColor: '#B1B1B',

                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text

                    numberOfLines={1}
                    style={{ fontSize: hp('3%'), textAlign: 'center', color: '#AAAAAA', fontFamily: "OpenSans-Regular" }}>
                    {number[i]}
                </Text>
            </View>
        )
    }
    return view
}

const styles = StyleSheet.create({})
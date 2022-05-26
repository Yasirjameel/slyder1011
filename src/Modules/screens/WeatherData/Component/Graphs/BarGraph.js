import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function BarGraph() {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: Dimensions.get('screen').height / 30
            }}>
            <Text
                style={{
                    transform: [{ rotate: '-90deg' }],
                    fontSize: hp('2%'),
                    color: '#AAAAAA',
                    fontFamily: "OpenSans-Bold",
                    marginRight: -30,
                    fontWeight: 'bold',
                }}>
                wind speed
            </Text>
            <Neomorph
                inner
                darkShadowColor="#141414"
                lightShadowColor="#2e2e2e"
                style={{
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 1,
                    shadowColor: 'white',
                    shadowRadius: 3,
                    borderRadius: 10,
                    backgroundColor: '#252525',
                    width: Dimensions.get('window').width / 1.9,
                    height: Dimensions.get('window').width / 8.8,
                }}>
                <View
                    style={{
                        width: Dimensions.get('window').width / 1.932,
                        height: Dimensions.get('window').width / 9,
                        backgroundColor: '#252525',
                        borderRadius: 10,
                        top: 8,
                        left: 9,
                    }}>
                    <Text style={{ color: 'grey', fontFamily: 'OpenSans-Italic', left: 40, top: 0, position: "absolute", fontSize: 16 }}>kn</Text>
                    <BarChart
                        data={{
                            labels: [
                                '',
                                '1',
                                '2',
                                '3',
                                '4',
                                '5',
                                '6',
                                '7',
                                '8',
                                '9',
                                '10',
                            ],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                    ],
                                },
                            ],
                        }}
                        width={Dimensions.get('window').width / 2}
                        height={Dimensions.get('window').width / 11}
                        yAxisLabel={''}
                        yAxisSuffix=" "
                        yAxisInterval={2.35} // optional, defaults to 1
                        chartConfig={{
                            backgroundGradientFrom: '#000',
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientTo: 'silver',
                            backgroundGradientToOpacity: 0,
                            fillShadowGradientFrom: '#777777',
                            fillShadowGradientFromOpacity: 1,
                            fillShadowGradientTo: '#50D210',
                            fillShadowGradientToOpacity: 0.5,
                            color: (opacity = 1) => `#B1622C`,
                            labelColor: (opacity = 1) => `silver`,
                            strokeWidth: 10,
                            useShadowColorFromDataset: false,
                            decimalPlaces: 0,
                            style: {
                                borderRadius: 10,
                            },
                            propsForDots: {
                                r: '0',
                                strokeWidth: '10',
                                stroke: 'transparent',
                            },
                            propsForBackgroundLines: {
                                stroke: '#777777',
                            },
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 10,
                            marginTop: 20
                        }}
                    />
                    <Text style={{ color: 'grey', fontFamily: 'OpenSans-Italic', right: 40, bottom: 10, position: "absolute", fontSize: 16 }}>h</Text>
                </View>
            </Neomorph>
        </View>

    )
}

const styles = StyleSheet.create({})
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function LineGraphs({ title, ylabel, xLabel, strokeColor, top, right }) {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: top
        }}>
            <Text
                style={{
                    transform: [{ rotate: '-90deg' }],
                    fontSize: hp('1.8%'),
                    color: '#AAAAAA',
                    fontFamily: "OpenSans-Bold",
                    marginRight: right,
                    fontWeight: 'bold',
                }}>
                {title}
            </Text>
            <Neomorph
                inner
                darkShadowColor="#141414"
                lightShadowColor="#2e2e2e"
                style={{
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 1,
                    shadowColor: 'white',
                    shadowRadius: 3,
                    borderRadius: 10,
                    backgroundColor: '#252525',
                    width: Dimensions.get('window').width / 1.9,
                    height: Dimensions.get('window').width / 9,
                }}>
                <View
                    style={{
                        width: Dimensions.get('window').width / 1.932,
                        height: Dimensions.get('window').width / 10,
                        backgroundColor: '#252525',
                        borderRadius: 10,
                        top: 8,
                        left: 9,
                    }}>
                    <Text style={{ color: 'grey', fontFamily: 'OpenSans-Italic', left: 40, top: -4, position: "absolute", fontSize: hp('1.2%') }}>{ylabel}</Text>
                    <LineChart
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
                                    // barColors: ['white', 'black', 'white'],
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
                            backgroundGradientTo: '#000',
                            backgroundGradientToOpacity: 0,
                            fillShadowGradientFrom: '#000',
                            fillShadowGradientFromOpacity: 0,
                            fillShadowGradientTo: '#000',
                            fillShadowGradientToOpacity: 0,
                            color: (opacity = 1) => `${strokeColor}`,
                            labelColor: (opacity = 1) => `silver`,
                            strokeWidth: 5,
                            useShadowColorFromDataset: false,
                            decimalPlaces: 0,
                            style: {
                                borderRadius: 10,
                            },
                            propsForDots: {
                                r: '0',
                                strokeWidth: '10',
                                stroke: '#fff',
                            },
                            propsForBackgroundLines: {
                                stroke: '#777777',
                            },
                        }}
                        bezier
                        withShadow={true}
                        style={{
                            marginVertical: 8,
                            borderRadius: 10,
                        }}
                    />
                    <Text style={{ color: 'grey', fontFamily: 'OpenSans-Italic', right: 40, bottom: 0, position: "absolute", fontSize: hp('1.4%') }}>{xLabel}</Text>
                </View>
            </Neomorph>
        </View>
    )
}

const styles = StyleSheet.create({})
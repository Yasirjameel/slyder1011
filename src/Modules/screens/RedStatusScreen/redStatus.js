import React, { useState } from 'react';
import {
  Animated, Dimensions, FlatList, Image, ScrollView, StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { Switch } from 'react-native-switch';
import Resetbtn from '../../../Component/extra/resetbtn';
import NeumorphismButton from '../../../Component/neumorphism-button';
import NumberMeter from '../../../Component/NumberMeter';
import ScaleComparing from '../../../Component/ScaleComparing';
import Port from '../StatusScreen/Components/Port';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
  {
    warning: 'anchor alarm / 03:00 UTC / check position / reset alarm',
    p: 1,
  },
  {
    warning: 'check: time zone switch / system',
    p: 0,
  },
  {
    warning: 'check: diesel filter / interval pending in 10 engine hours',
    p: 0,
  },
  {
    warning: 'anchor alarm / 03:00 UTC / check position / reset alarm',
    p: 1,
  },
  {
    warning: 'low diesel stock / range approx. 13 hrs at 20 kW',
    p: 0,
  },
];

export default function Status() {
  const [indicator, setindicator] = useState(new Animated.Value(0));
  const [wholeHeight, setwholeHeight] = useState(1);
  const [visibleHeight, setvisibleHeight] = useState(0);
  const indicatorSize =
    wholeHeight > visibleHeight
      ? (visibleHeight * visibleHeight) / wholeHeight
      : visibleHeight;
  const difference =
    visibleHeight > indicatorSize ? visibleHeight - indicatorSize : 1;
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [myText1, setMyText1] = useState('11.5');
  const [myText2, setMyText2] = useState('13.5');
  const [bgColor1, setBgColor1] = useState('#1F1F1F');
  const [bgColor2, setBgColor2] = useState('#1F1F1F');

  const setBoth1 = () => {
    setBgColor1('red');
    setBgColor2('#1F1F1F');
  };

  const setBoth2 = () => {
    setBgColor1('#1F1F1F');
    setBgColor2('red');
  };

  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  return (
    <LinearGradient
      colors={['#202427', '#3E4345', '#131617']}
      style={{
        flex: 1,

      }}>
      {/* <ScrollView
        horizontal={false}
        nestedScrollEnabled={true}
      > */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '60%',
            height: '100%',
            paddingLeft: '5%',
          }}>
          <View
            style={{
              width: '130%',
              height: (38 / 100) * windowHeight,
              paddingTop: '5%',
            }}>
            <Text
              style={{
                fontFamily: "OpenSans-ExtraBold",
                fontSize: hp('2.5%'),
                marginBottom: 6,
                textShadowColor: 'rgba(179, 0, 28, 0.9)',
                textShadowOffset: { width: -1, height: 6 },
                textShadowRadius: 20,
                color: '#B3001C',
                textDecorationLine: "underline",
                marginLeft: '4%'
              }}>
              EVENTS
            </Text>
            <View
              style={{
                height: 230,
                borderBottomWidth: 2,
                borderBottomColor: '#4A4D4E',
                paddingBottom: 34,
              }}>
              <Neomorph
                inner // <- enable inner shadow
                darkShadowColor="#141414" // <- set this
                lightShadowColor="#2e2e2e"
                style={{
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 1,
                  shadowColor: '#464646',
                  shadowRadius: 3,
                  borderRadius: 150,
                  backgroundColor: '#141414',
                  width: 12,
                  height: 200,
                  overflow: 'visible',
                  position: 'absolute',
                  right: 0,
                  paddingBottom: 34,

                  // ...include most of View/Layout styles
                }}></Neomorph>

              <FlatList
                nestedScrollEnabled={true}
                data={data}
                showsVerticalScrollIndicator={false}
                onContentSizeChange={(width, height) => {
                  setwholeHeight(height);
                }}
                onLayout={({
                  nativeEvent: {
                    layout: { x, y, width, height },
                  },
                }) => setvisibleHeight(height)}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: indicator } } }],
                  { useNativeDriver: false },
                )}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{ flexDirection: 'row', marginTop: 13 }}>
                      <View style={{ justifyContent: 'center' }}>
                        <Image style={{ tintColor: 'red', height: 30, width: 30 }} source={require('../../../../images/redtriangle.png')} />
                      </View>

                      <View
                        style={{ marginLeft: 18, justifyContent: 'center' }}>
                        {
                          index == 0 ? <Text
                            style={{ marginLeft: item.p == 1 ? 5 : 0, fontSize: hp('2.3%'), fontWeight: 'bold', color: '#B3001C', fontFamily: "OpenSans-Regular" }}>
                            anchor alarm  <Text style={{ fontWeight: '300' }}>/ 03:00 UTC / check position / reset alarm</Text>
                          </Text> : <Text
                            style={{ marginLeft: item.p == 1 ? 5 : 0, fontWeight: '300', fontSize: hp('2.3%'), color: '#B3001C', }}>
                            {item.warning}
                          </Text>
                        }
                      </View>
                    </View>
                  );
                }}
                keyExtractor={(item, index) => index}
              />

              <Animated.View
                style={[
                  styles.indicator,
                  {
                    height: indicatorSize,
                    transform: [
                      {
                        translateY: Animated.multiply(
                          indicator,
                          visibleHeight / wholeHeight,
                        ).interpolate({
                          inputRange: [0, difference],
                          outputRange: [0, difference],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  },
                ]}
              />
            </View>
          </View>

          <View
            style={{
              height: '100%',
              width: '90%',
              marginBottom: 32,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <ScaleComparing title="fresh water sb" fill={82} red={true} />
            <View style={{ marginLeft: -60 }}>
              <ScaleComparing title="fresh water bb" fill={47} red={true} />
            </View>
            <ScaleComparing title="black water sb" fill={16} red={true} />
            <View style={{ marginLeft: -60 }}>
              <ScaleComparing title="black water bb" fill={48} red={true} />
            </View>
            <ScaleComparing title="diesel" fill={87} red={true} />
          </View>
        </View>

        <View
          style={{
            width: '40%',
            height: '100%',
            marginRight: 100,
          }}>
          <View
            style={{
              width: '100%',
              height: (38 / 110) * windowHeight,
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                width: '60%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                marginVertical: 45,
              }}>
              <NeumorphismButton
                style={{
                  borderColor: '#7b0000',
                  borderWidth: 5,
                  borderRadius: 40,
                  height: Dimensions.get('screen').height / 8,
                  width: Dimensions.get('screen').width / 14,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#B3001C',
                    fontSize: hp('2.8%'),

                  }}>
                  MOB
                </Text>
              </NeumorphismButton>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: '55%',
              marginTop: 32
            }}>
            <View
              style={{
                width: '40%',
                alignItems: 'center',
                borderLeftWidth: 2,
                borderColor: '#4A4D4E',
              }}>
              <Text
                style={{
                  color: '#B3001C',
                  marginBottom: 16,
                  fontSize: hp('2.5%'),
                  fontFamily: "OpenSans-Bold",
                  textAlign: 'center',
                  textDecorationLine: "underline"
                }}>
                POWER
              </Text>
              <NumberMeter number={'100'} skill="%" width={50} red={true} />
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: hp('2%'),
                  color: '#B3001C',
                  textAlign: 'center',
                  marginTop: 12,
                  marginBottom: 32,
                }}>
                24 V batteries
              </Text>
              <NumberMeter number={'100'} skill="%" width={50} red={true} />
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: hp('2%'),
                  color: '#B3001C',
                  marginBottom: 6,
                  textAlign: 'center',
                  marginTop: 12,
                }}>
                HV batteries
              </Text>
              <Text
                style={{
                  color: '#B3001C',
                  marginBottom: 16,
                  fontSize: hp('2.5%'),
                  fontFamily: "OpenSans-Bold",
                  textAlign: 'center',
                  textDecorationLine: "underline",
                  marginTop: 50
                }}>
                SHORE POWER
              </Text>
              <Port text='port1' active red />

              <Port text='port2' red />
            </View>
            <View
              style={{
                width: '60%',
                alignItems: 'center',
                borderLeftWidth: 2,
                borderColor: '#4A4D4E',

              }}>
              <Text
                style={{
                  color: '#B3001C',
                  marginBottom: 1,
                  fontSize: hp('2.5%'),
                  fontFamily: "OpenSans-Bold",
                  textAlign: 'center',
                  textDecorationLine: "underline"
                }}>
                GENERATOR
              </Text>

              <View style={{ alignSelf: 'center', marginTop: 16 }}>
                <Neomorph
                  inner
                  darkShadowColor="#1F1F1F" // <- set this
                  lightShadowColor="#353535"
                  style={{
                    shadowOffset: { width: 0, height: 10 },
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
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Switch
                      onValueChange={toggleSwitch1}
                      value={isEnabled1}
                      disabled={false}
                      inactiveTextStyle={{
                        fontSize: hp('2%'),
                        paddingLeft: wp('0.8%'),
                        color: '#B3001C',
                      }}
                      activeTextStyle={{
                        fontSize: hp('2%'),
                        paddingRight: wp('0.8%'),
                        color: '#B3001C',
                      }}
                      activeText={'ON'}
                      inActiveText={'OFF'}
                      circleSize={Dimensions.get('screen').width / 43}
                      barHeight={hp('5.5%')}
                      circleBorderWidth={Dimensions.get('screen').height / 48}
                      circleBorderInactiveColor={'#303030'}
                      circleBorderActiveColor={'#303030'}
                      backgroundActive={'#2E2D2D'}
                      backgroundInactive={'#2E2D2D'}
                      circleActiveColor={'#B3001C'}
                      circleInActiveColor={'#606060'}
                      changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                      innerCircleStyle={{
                        width: hp('8%'),
                        height: hp('5%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 50,
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

              <View
                style={{
                  flexDirection: windowWidth < 1300 ? 'column' : 'row',
                  width: '70%',

                  justifyContent:
                    windowWidth < 1300 ? 'center' : 'space-between',
                  alignItems: 'center',
                  marginBottom: '6%',
                  marginTop: '10%'
                }}>
                <Resetbtn
                  style={{
                    width: Dimensions.get('screen').width / 28,
                    height: Dimensions.get('screen').width / 28,
                    borderRadius: 100,
                    borderColor: '#1F1F1F',
                    borderWidth: 5,
                  }}>
                  <Text
                    style={{
                      color: '#B3001C',
                      fontSize: hp('2.2%'),
                      alignSelf: 'center',
                      fontWeight: 'bold',
                    }}>
                    -
                  </Text>
                </Resetbtn>
                <View style={{ justifyContent: 'center' }}>
                  <NumberMeter
                    number={'20'}
                    skill="kW"
                    width={50}
                    red={true}
                  />
                </View>

                <Resetbtn
                  style={{
                    width: Dimensions.get('screen').width / 28,
                    height: Dimensions.get('screen').width / 28,
                    borderRadius: 100,
                    borderColor: '#1F1F1F',
                    borderWidth: 5,
                  }}>
                  <Text
                    style={{
                      color: '#B3001C',
                      fontSize: hp('2.2%'),
                      alignSelf: 'center',
                      fontWeight: 'bold',
                      marginBottom: 3,
                    }}>
                    +
                  </Text>
                </Resetbtn>
              </View>

              <NumberMeter number={'1250'} skill="rpm" width={5} red={true} />

              <View style={{ marginTop: 20 }}>
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
                    <View
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
                        style={{
                          color: '#B3001C',
                          fontSize: hp('3%'),
                          textAlign: 'center',
                        }}>
                        0
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '16%',
                        flexDirection: 'row',
                        fontSize: 50,
                        alignSelf: 'center',
                        borderRightWidth: 1,
                        borderColor: '#B1B1B',

                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#B3001C',
                          fontSize: hp('3%'),
                          textAlign: 'center',
                        }}>
                        1
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '16%',
                        flexDirection: 'row',
                        fontSize: 50,
                        alignSelf: 'center',
                        borderRightWidth: 1,
                        borderColor: '#B1B1B',

                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#B3001C',
                          fontSize: hp('3%'),
                          textAlign: 'center',
                        }}>
                        4
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '16%',
                        flexDirection: 'row',
                        fontSize: 50,
                        alignSelf: 'center',
                        borderRightWidth: 1,
                        borderColor: '#B1B1B',

                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#B3001C',
                          fontSize: hp('3%'),
                          textAlign: 'center',
                        }}>
                        7
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '16%',
                        flexDirection: 'row',
                        fontSize: 50,
                        alignSelf: 'center',
                        borderRightWidth: 1,
                        borderColor: '#B1B1B',

                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#B3001C',
                          fontSize: hp('3%'),
                          textAlign: 'center',
                        }}>
                        5
                      </Text>
                    </View>
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
                          color: '#B3001C',
                          fontSize: hp('1.8%'),
                          textAlign: 'center',
                        }}>
                        nm
                      </Text>
                    </View>
                  </View>
                </Neomorph>
              </View>
              <View style={{ marginTop: 50 }}>

                <Neomorph
                  inner={true} // <- enable inner shadow
                  darkShadowColor="#151515" // <- set this
                  lightShadowColor="#414141"
                  style={{
                    shadowOffset: { width: 5, height: 10 },
                    shadowOpacity: 1,
                    shadowColor: 'white',
                    shadowRadius: 3,
                    borderRadius: 100,
                    backgroundColor: '#252525',
                    width: Dimensions.get('screen').width / 11.5 - 10,
                    height: Dimensions.get('screen').width / 32,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // ...include most of View/Layout styles
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: Dimensions.get('screen').width / 11.5 - 10 - 10,
                      backgroundColor: '#282828',
                      borderRadius: 100,
                      height: Dimensions.get('screen').width / 32 - 10,
                    }}>
                    <View
                      style={{
                        width: "60%",

                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        height: '100%',
                        borderRightWidth: 1,
                        borderColor: '#B1B1B',
                      }}>
                      <View style={{ flexDirection: 'row', width: '75%', justifyContent: "space-evenly", alignSelf: "center" }}>
                        <Text
                          numberOfLines={1}
                          style={{ fontSize: hp('2.8%'), color: '#B3001C', fontFamily: "OpenSans-Regular" }}>
                          12,5
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: '30%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{ fontSize: hp('2%'), color: '#B3001C', fontFamily: "OpenSans-SemiBold", fontStyle: 'italic' }}>
                        v
                      </Text>
                    </View>
                  </View>
                </Neomorph>
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: hp('2%'),
                  color: '#B3001C',
                  textAlign: 'center',
                  marginTop: 12,
                  marginBottom: '8%',
                  fontFamily: "OpenSans-Bold",
                }}>
                starter battery
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* </ScrollView> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: 10,
    top: 1,
    right: 0,
    backgroundColor: '#B3001C',
    borderRadius: 12,
  },
  container: {
    flex: 1,
  },
});

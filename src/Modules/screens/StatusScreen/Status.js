import React, { useState } from 'react';
import {
  Animated, Dimensions, FlatList, Image, StyleSheet, StatusBar,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import CustomeSwitch from '../../../Component/CustomeSwitch';
import Resetbtn from '../../../Component/extra/resetbtn';
import NeumorphismButton from '../../../Component/neumorphism-button';
import NumberMeter from '../../../Component/NumberMeter';
import ScaleComparing from '../../../Component/ScaleComparing';
import LongNeomorphButton from './Components/LongNeomorphButton';
import Port from './Components/Port';

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
    warning: 'low diesel stock / range approx. 13 hrs at 20 kW',
    p: 0,
  },
  {
    warning: 'low diesel stock / range approx. 13 hrs at 20 kW',
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
      <StatusBar hidden />
      {/* <ScrollView
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
        contentContainerStyle={{ flexGrow: 1 }}> */}
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
              width: '100%',
              height: (39 / 100) * windowHeight,
              paddingTop: '5%',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: hp('2.5%'),
                fontFamily: "OpenSans-Bold",
                color: '#000000',
                marginBottom: 6,
                textShadowColor: 'rgba(255,255,255,.2)',
                textShadowOffset: { width: -1, height: 3 },
                textShadowRadius: 1,
              }}>
              EVENTS
            </Text>
            <View
              style={{
                height: 260,
                borderBottomWidth: 3,
                borderColor: '#000',
                paddingBottom: 34,
              }}>
              <Neomorph
                inner // <- enable inner shadow
                darkShadowColor="#141414" // <- set this
                lightShadowColor="#2e2e2e"
                style={{
                  shadowOffset: { width: 10, height: 10 },
                  shadowOpacity: 1,
                  shadowColor: '#464646',
                  shadowRadius: 3,
                  backgroundColor: '#141414',
                  borderColor: '#A4A4A4',
                  borderWidth: 1,
                  width: 16,
                  height: 210,
                  borderRadius: 20,
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
                        {/* <Ionicons
                            name="warning"
                            size={40}
                            color={item.p == 0 ? '#FF3926' : '#F2E900'}
                          /> */}
                        {item.p == 1 ? <Image style={{ height: 35, width: 35 }} source={require('../../../../images/redtriangle.png')} /> :
                          <Image style={{ height: 42, width: 42 }} source={require('../../../../images/yellowtriangle.png')} />
                        }
                      </View>

                      <View
                        style={{ marginLeft: 18, justifyContent: 'center' }}>
                        {index == 0 ?
                          <View style={{ flexDirection: "row" }}>
                            <Text
                              style={{ marginLeft: item.p == 1 ? 5 : 0, fontSize: hp('2.3%'), color: '#AAAAAA', fontFamily: "OpenSans-Bold" }}>
                              anchor alarm
                            </Text>
                            <Text style={{
                              fontSize: hp('2.3%'), color: '#AAAAAA', fontFamily: "OpenSans-Regular", marginLeft: 12
                            }}>
                              / 03:00 UTC / check position / reset alarm
                            </Text>
                          </View>

                          : <Text
                            style={{ marginLeft: item.p == 1 ? 5 : 0, fontWeight: '300', fontSize: hp('2.3%'), color: '#AAAAAA', fontFamily: "OpenSans-Regular" }}>
                            {item.warning}
                          </Text>}
                      </View>
                    </View>
                  );
                }}
                keyExtractor={(item, index) => index}
              />
              <View style={styles.indicatorWrapper} />
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
            <ScaleComparing title="fresh water" fill={82} red={false} scale="sb" skillColor='#92FD31' />
            <View style={{ marginLeft: -60 }}>
              <ScaleComparing title="fresh water" fill={47} red={false} scale="bb" skillColor='#F8E81E' />
            </View>
            <ScaleComparing title="black water" fill={16} red={false} scale="sb" skillColor='#92FD31' />
            <View style={{ marginLeft: -60 }}>
              <ScaleComparing title="black water" fill={48} red={false} scale="bb" skillColor='#94FE31' />
            </View>
            <ScaleComparing title="diesel" fill={87} red={false} skillColor='#94FE31' />
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
              height: (39 / 110) * windowHeight,
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                width: '60%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  marginBottom: 16,
                  fontFamily: 'OpenSans-Bold'
                }}>
                total log
              </Text>
              <LongNeomorphButton number={'01475'} skill="nm" />
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
                    color: '#AAAAAA',
                    fontSize: hp('2.8%'),
                  }}>
                  MOB
                </Text>
              </NeumorphismButton>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '60%',
                alignItems: 'center',
                borderLeftWidth: 2,
                borderColor: '#4A4D4E',
                marginBottom: 24,
              }}>
              <Text
                style={{
                  fontSize: hp('2.5%'),
                  fontFamily: "OpenSans-Bold",
                  color: '#191919',
                  marginBottom: 6,
                  textAlign: 'center',
                  textShadowColor: 'rgba(255,255,255,.28)',
                  textShadowOffset: { width: -0.1, height: 1.1 },
                  textShadowRadius: 1,
                }}>
                GENERATOR
              </Text>
              <View style={{ alignSelf: 'center', marginTop: 16 }}>
                <CustomeSwitch />
              </View>
              <View
                style={{
                  flexDirection: windowWidth < 1300 ? 'column' : 'row',
                  width: '85%',
                  marginTop: '4%',
                  alignItems: 'center',
                  justifyContent:
                    windowWidth < 1300 ? 'center' : 'space-between',
                }}>
                <Resetbtn
                  style={{
                    width: Dimensions.get('screen').width / 20,
                    borderRadius: 40,
                    borderColor: bgColor1,
                    borderWidth: 6,
                    paddingVertical: 12,
                  }}>
                  <Text
                    style={{
                      color: '#AAAAAA',
                      fontSize: hp('2%'),
                      alignSelf: 'center',
                      fontFamily: "OpenSans-Bold",
                    }}
                    onPress={() => setBoth1()}>
                    Start
                  </Text>
                </Resetbtn>
                <View style={{ justifyContent: 'center' }}>
                  <NumberMeter number={'12,5'} skill="V" width={50} />
                </View>

                <Resetbtn
                  style={{
                    paddingVertical: 12,
                    width: Dimensions.get('screen').width / 20,
                    borderRadius: 40,
                    borderColor: bgColor2,
                    borderWidth: 6,
                  }}>
                  <Text
                    style={{
                      color: '#AAAAAA',
                      fontSize: hp('2%'),
                      alignSelf: 'center',
                      fontFamily: "OpenSans-Bold",
                    }}
                    onPress={() => setBoth2()}>
                    Stop
                  </Text>
                </Resetbtn>
              </View>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold",
                  textAlign: 'center',
                  marginBottom: '8%',
                }}>
                starter battery
              </Text>
              <NumberMeter number={'1250'} skill="rpm" width={0} />
              <View
                style={{
                  flexDirection: windowWidth < 1300 ? 'column' : 'row',
                  width: '70%',

                  justifyContent:
                    windowWidth < 1300 ? 'center' : 'space-between',
                  alignItems: 'center',
                  marginVertical: '6%',
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
                      color: 'white',
                      fontSize: hp('2.2%'),
                      alignSelf: 'center',
                      fontFamily: "OpenSans-Bold",
                    }}>
                    -
                  </Text>
                </Resetbtn>
                <View style={{ justifyContent: 'center' }}>
                  <NumberMeter number={'20'} skill="kW" width={50} />
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
                      color: 'white',
                      fontSize: hp('2.2%'),
                      alignSelf: 'center',
                      fontFamily: "OpenSans-Bold",
                      marginBottom: 3,
                    }}>
                    +
                  </Text>
                </Resetbtn>
              </View>
              <View>
                <LongNeomorphButton number={'01475'} skill="hrs" />
              </View>
            </View>

            <View
              style={{
                width: '40%',
                alignItems: 'center',
                borderLeftWidth: 2,
                borderColor: '#4A4D4E',
                marginBottom: 24,
              }}>
              <Text
                style={{
                  fontSize: hp('2.5%'),
                  fontFamily: "OpenSans-Bold",
                  color: '#191919',
                  marginBottom: 24,
                  textAlign: 'center',
                  textShadowColor: 'rgba(255,255,255,.28)',
                  textShadowOffset: { width: -0.1, height: 1.1 },
                  textShadowRadius: 1,
                }}>
                POWER
              </Text>
              <NumberMeter number={'100'} skill="%" width={50} />
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  textAlign: 'center',
                  marginTop: 12,
                  marginBottom: 32,
                }}>
                24 V batteries
              </Text>
              <NumberMeter number={'100'} skill="%" width={50} />
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  marginBottom: 6,
                  textAlign: 'center',
                  marginTop: 12,
                }}>
                HV batteries
              </Text>
              <Text
                style={{

                  fontSize: hp('2%'),
                  fontFamily: "OpenSans-Bold",
                  color: '#191919',
                  textAlign: 'center',
                  textShadowColor: 'rgba(255,255,255,.28)',
                  textShadowOffset: { width: -0.1, height: 1.1 },
                  textShadowRadius: 1,
                  marginTop: 60
                }}>
                SHORE POWER
              </Text>

              <Port text='port 1' active />
              <View style={{ marginTop: 10 }}>
                <Port text='port 2' />
              </View>



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
    width: 15,
    top: 1,
    right: 0,
    backgroundColor: '#A8A8A8',
    borderRadius: 50,
  },
});

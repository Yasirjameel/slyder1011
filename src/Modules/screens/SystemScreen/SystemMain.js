import React, { useState } from 'react';
import {
  Animated, Dimensions, FlatList, Image, ImageBackground, ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import CustomeSwitch from '../../../Component/CustomeSwitch';
import NeumorphismButton from '../../../Component/extra/NeumorphismsButton';
import EmptyRoundedButton from './Components/EmptyRoundedButton';
import MiddleOfButton from './Components/MiddleOfButton';
import RoundedButtonStatus from './Components/RoundedButtonStatus';

const data = [
  {
    warning: 'air con stb - change fuse',
    p: 1,
  },
  {
    warning: 'bilge pump aft stb / check filter',
    p: 0,
  },
  {
    warning: 'bilge pump aft bb / check filter',
    p: 0,
  },
  {
    warning: 'bilge pump ctr stb / check filter',
    p: 0,
  },
];

export default function Main(props) {
  const [indicator, setindicator] = useState(new Animated.Value(0));
  const [wholeHeight, setwholeHeight] = useState(1);
  const [visibleHeight, setvisibleHeight] = useState(0);
  const indicatorSize =
    wholeHeight > visibleHeight
      ? (visibleHeight * visibleHeight) / wholeHeight
      : visibleHeight;
  const difference =
    visibleHeight > indicatorSize ? visibleHeight - indicatorSize : 1;

  const [firstBtn, setFirstButton] = React.useState(true);
  const [secondBtn, setSecondButton] = React.useState(false);
  const [thirdBtn, setThirdButton] = React.useState(true);
  const [forthBtn, setForthButton] = React.useState(false);
  const [fifthBtn, setFifthButton] = React.useState(true);
  const [sixthBtn, setSixthButton] = React.useState(false);
  const [seventhBtn, setSeventhButton] = React.useState(true);
  const [eightBtn, setEightButton] = React.useState(false);
  const [ninthBtn, setNightButton] = React.useState(false);
  const [tenthBtn, setTenthButton] = React.useState(false);
  const [eleventhBtn, setEleventhButton] = React.useState(false);
  const [twelveBtn, setTwelveButton] = React.useState(false);
  const [thirteenthBtn, setThirteenthButton] = React.useState(false);
  const [forteenthBtn, setForteenthBtn] = React.useState(false);
  const [fifteenBtn, setFifteenButton] = React.useState(false);
  const [sixteenBtn, setSixteenButton] = React.useState(false);
  const [seventeenBtn, setSeventeenButton] = React.useState(false);
  const [eighteenBtn, setEighteenButton] = React.useState(false);
  const [nineteenBtn, setNineteenButton] = React.useState(false);
  const [twentyBtn, setTwentyButton] = React.useState(false);

  const onclick = name => {
    if (name == 'first') {
      setFirstButton(!firstBtn);
    } else if (name == 'second') {
      setSecondButton(!secondBtn);
    } else if (name == 'third') {
      setThirdButton(!thirdBtn);
    } else if (name == 'forth') {
      setForthButton(!forthBtn);
    } else if (name == 'fifth') {
      setFifthButton(!fifthBtn);
    } else if (name == 'sixth') {
      setSixthButton(!sixthBtn);
    } else if (name == 'seven') {
      setSeventhButton(!seventhBtn);
    } else if (name == 'eight') {
      setEightButton(!eightBtn);
    } else if (name == 'ninth') {
      setNightButton(!ninthBtn);
    } else if (name == 'tenth') {
      setTenthButton(!tenthBtn);
    } else if (name == 'eleven') {
      setEleventhButton(!eleventhBtn);
    } else if (name == 'twelve') {
      setTwelveButton(!twelveBtn);
    } else if (name == 'thirteen') {
      setThirteenthButton(!thirteenthBtn);
    } else if (name == 'forteen') {
      setForteenthBtn(!forteenthBtn);
    } else if (name == 'fifteen') {
      setFifteenButton(!fifteenBtn);
    } else if (name == 'sixteen') {
      setSixteenButton(!sixteenBtn);
    } else if (name == 'seventeen') {
      setSeventeenButton(!seventeenBtn);
    } else if (name == 'eighteen') {
      setEighteenButton(!eighteenBtn);
    } else if (name == 'nineteen') {
      setNineteenButton(!nineteenBtn);
    } else if (name == 'twenty') {
      setTwentyButton(!twentyBtn);
    }
  };

  return (
    <LinearGradient
      colors={['#0F0F0F', '#3E4345', '#202427']}
      style={styles.linearGradient}>
      <StatusBar hidden />
      <ScrollView nestedScrollEnabled={true} horizontal={false}>
        <ScrollView horizontal={true}>
          <View
            style={{
              position: "absolute",
              right: 110,
              top: 40
            }}>
            <NeumorphismButton MOB>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 22,
                }}>
                MOB
              </Text>
            </NeumorphismButton>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: wp('96%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: Dimensions.get('screen').width / 1.45,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  position: 'absolute',
                  flex: 1,
                  top: Dimensions.get('screen').height / 20,
                  left: Dimensions.get('screen').width / 38,
                }}>
                <RoundedButtonStatus onClick={() => onclick('first')}
                  active={firstBtn} title="washing machine"
                  top={Dimensions.get('screen').height / 10} />

                <RoundedButtonStatus onClick={() => onclick('second')}
                  active={secondBtn}
                  title="grey water pump"
                  top={Dimensions.get('screen').height / 10}
                />

                <RoundedButtonStatus onClick={() => onclick('third')}
                  active={thirdBtn}
                  title="toilet"
                  top={Dimensions.get('screen').height / 9}
                />
                <RoundedButtonStatus onClick={() => onclick('forth')}
                  active={forthBtn}
                  title="ventilation"
                  top={Dimensions.get('screen').height / 8.5}
                />
                <RoundedButtonStatus onClick={() => onclick('fifth')}
                  active={fifthBtn}
                  title="water pump"
                  top={Dimensions.get('screen').height / 8}
                />

                <EmptyRoundedButton title='bilge pump center' top={Dimensions.get('screen').height / 7} />

                <RoundedButtonStatus onClick={() => onclick('seven')}
                  active={seventhBtn}
                  title="boiler"
                  top={Dimensions.get('screen').height / 6}
                />

                <RoundedButtonStatus onClick={() => onclick('eight')}
                  active={eightBtn}
                  title="air con"
                  top={Dimensions.get('screen').height / 5.8}
                />

                <EmptyRoundedButton title='bilge pump aft' top={Dimensions.get('screen').height / 5} />

              </View>

              <ImageBackground
                source={require('../../../../images/yacht.png')}
                style={{
                  marginLeft: Dimensions.get('screen').width / 6,
                  height: Dimensions.get('screen').height / 1.1,
                  width: Dimensions.get('screen').width / 3,
                }}>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <View
                    style={{ marginTop: Dimensions.get('screen').height / 4.5 }}>

                    <MiddleOfButton top={Dimensions.get('screen').height / 26}
                      left={-Dimensions.get('screen').width / 26}
                      active={firstBtn}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 13}
                      left={-Dimensions.get('screen').width / 28}
                      active={secondBtn}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 9}
                      left={-Dimensions.get('screen').width / 36}
                      active={thirdBtn}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 7}
                      left={-Dimensions.get('screen').width / 50}
                      active={forthBtn}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 5}
                      left={-Dimensions.get('screen').width / 23}
                      active={fifthBtn}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 2.85}
                      left={-Dimensions.get('screen').width / 22}
                      active={false}
                    />


                    <MiddleOfButton top={Dimensions.get('screen').height / 2.6}
                      left={-Dimensions.get('screen').width / 48}
                      active={seventhBtn}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 2.3}
                      left={-Dimensions.get('screen').width / 18.5}
                      active={eightBtn}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 1.88}
                      left={-Dimensions.get('screen').width / 25}
                      active={false}
                    />
                  </View>

                  <View style={{ top: Dimensions.get('screen').height / 3 }}>

                    <MiddleOfButton top={Dimensions.get('screen').height / 50}
                      active={tenthBtn}
                      right={-Dimensions.get('screen').width / 50}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 20}
                      active={eleventhBtn}
                      right={-Dimensions.get('screen').width / 50}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 12}
                      active={twelveBtn}
                      right={-Dimensions.get('screen').width / 40}
                    />
                    <MiddleOfButton top={Dimensions.get('screen').height / 11}
                      active={false}
                      right={-Dimensions.get('screen').width / 21}
                    />
                    <MiddleOfButton top={Dimensions.get('screen').height / 8.5}
                      active={forteenthBtn}
                      right={-Dimensions.get('screen').width / 35}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 6.6}
                      active={fifteenBtn}
                      right={-Dimensions.get('screen').width / 35}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 4.2}
                      active={false}
                      right={-Dimensions.get('screen').width / 21}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 3.05}
                      active={seventeenBtn}
                      right={-Dimensions.get('screen').width / 17.5}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 2.4}
                      active={false}
                      right={-Dimensions.get('screen').width / 24}
                    />

                    <MiddleOfButton top={Dimensions.get('screen').height / 2.15}
                      active={nineteenBtn}
                      right={-Dimensions.get('screen').width / 33}
                    />

                  </View>
                </View>
              </ImageBackground>

              <View
                style={{
                  flexDirection: 'column',
                  width: Dimensions.get('screen').width / 4.87,
                  top: Dimensions.get('screen').height / 16,
                }}>
                <RoundedButtonStatus onClick={() => onclick('tenth')}
                  active={tenthBtn}
                  title="ice cube maker"
                  right
                />

                <RoundedButtonStatus onClick={() => onclick('eleven')}
                  active={eleventhBtn}
                  title="freezer"
                  right
                  top={Dimensions.get('screen').height / 100}
                />

                <RoundedButtonStatus onClick={() => onclick('twelve')}
                  active={twelveBtn}
                  title="ventilation"
                  right
                  top={Dimensions.get('screen').height / 70}
                />

                <EmptyRoundedButton title='sea water pump air-con' top={Dimensions.get('screen').height / 30} right />

                <RoundedButtonStatus onClick={() => onclick('forteen')}
                  active={forteenthBtn}
                  title="grey water pump"
                  right
                  top={Dimensions.get('screen').height / 20}
                />

                <RoundedButtonStatus onClick={() => onclick('fifteen')}
                  active={fifteenBtn}
                  title="toilet"
                  right
                  top={Dimensions.get('screen').height / 17}
                />

                <EmptyRoundedButton title='bilge pump center' top={Dimensions.get('screen').height / 12} right />

                <RoundedButtonStatus onClick={() => onclick('seventeen')}
                  active={seventeenBtn}
                  title="air con"
                  right
                  top={Dimensions.get('screen').height / 9}
                />

                <EmptyRoundedButton title='bilge pump aft' top={Dimensions.get('screen').height / 7.5} right />

                <View style={{ flexDirection: 'row', top: Dimensions.get('screen').height / 6.5 }}>
                  <RoundedButtonStatus onClick={() => onclick('nineteen')}
                    active={nineteenBtn}
                    title="water maker"
                    right
                  />
                  <NeumorphismButton navigation={props.navigation} rc circlebutton>
                    <Text
                      style={{
                        fontSize: hp('1.8'),
                        color: '#AAAAAA',
                        fontFamily: "OpenSans-Bold",
                        textAlign: 'center',
                        fontSize: 20,
                      }}>
                      rc
                    </Text>
                  </NeumorphismButton>
                </View>


              </View>
            </View>

            {/**************************** right side **************************** */}
            <View style={[styles.container, { height: "100%", justifyContent: "flex-end" }]}>
              <Text
                style={{
                  marginTop: 80,
                  margin: 20,
                  marginLeft: 40,
                  fontSize: hp('2.5%'),
                  fontFamily: "OpenSans-ExtraBold",
                  color: '#191919',
                  textShadowColor: 'rgba(255,255,255,.28)',
                  textShadowOffset: { width: -0.1, height: 1.1 },
                  textShadowRadius: 1,
                }}>
                LOWER DECK
              </Text>

              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    padding: 20,
                    marginHorizontal: 10,
                  }}>
                  <CustomeSwitch />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      fontFamily: "OpenSans-Bold",
                      marginVertical: 20,
                    }}>
                    lights bb
                  </Text>
                </View>

                <View
                  style={{
                    padding: 20,
                    marginHorizontal: 10,
                  }}>
                  <CustomeSwitch />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      marginVertical: 20,
                      fontFamily: "OpenSans-Bold",
                    }}>
                    lights stb
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    padding: 20,
                    marginHorizontal: 10,
                  }}>
                  <CustomeSwitch />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      marginVertical: 20, fontFamily: "OpenSans-Bold",

                    }}>
                    outlets bb
                  </Text>
                </View>

                <View
                  style={{
                    padding: 20,
                    marginHorizontal: 10,
                  }}>
                  <CustomeSwitch />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      marginVertical: 20,
                      fontFamily: "OpenSans-Bold",
                    }}>
                    outlets stb
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderColor: '#191919',
                  marginHorizontal: 30,
                  marginVertical: 20,
                  borderWidth: 1,
                }}
              />

              <View
                style={{
                  height: 250,
                  width: '90%',
                  alignSelf: "center",
                  marginTop: 12
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
                    borderRadius: 150,
                    backgroundColor: '#141414',
                    width: 16,
                    height: 260,
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
                      <View style={{ flexDirection: 'row', marginTop: index == 0 ? 0 : 13, flexWrap: "wrap" }}>
                        <View style={{ justifyContent: 'center' }}>
                          {item.p == 1 ? <Image style={{ height: 35, width: 35 }} source={require('../../../../images/redtriangle.png')} /> :
                            <Image style={{ height: 42, width: 42 }} source={require('../../../../images/yellowtriangle.png')} />
                          }
                        </View>

                        <View
                          style={{ marginLeft: 18, justifyContent: 'center' }}>
                          {index == 0 ? <Text
                            style={{ marginLeft: item.p == 1 ? 5 : 0, fontSize: hp('2.3%'), fontWeight: 'bold', color: '#AAAAAA', fontFamily: "OpenSans-Regular" }}>
                            air con stb<Text style={{ fontWeight: '300' }}> - change fuse</Text>
                          </Text> : <Text
                            style={{ marginLeft: item.p == 1 ? 5 : 0, fontWeight: '300', fontSize: hp('2.3%'), color: '#AAAAAA', }}>
                            {item.warning}
                          </Text>}
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
          </View>
        </ScrollView>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: Dimensions.get('screen').width,
  },
  container: {
    flex: 1,
  },
  indicator: {
    position: 'absolute',
    width: 14,
    top: 1,
    right: 0,
    backgroundColor: '#AAAAAA',
    borderRadius: 12,
  },
  text: {
    color: '#AAAAAA',
    fontFamily: "OpenSans-Bold",
  },
});

import React, { useState } from 'react';
import {
  Animated, Dimensions, FlatList, Image,
  ImageBackground,
  LogBox,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import { heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import CustomeSwitch from '../../../Component/CustomeSwitch';
import NeumorphismButton from '../../../Component/extra/NeumorphismsButton';
import MiddleOfButton from './Components/MiddleOfButton';
import RoundedButtonStatus from './Components/RoundedButtonStatus';

LogBox.ignoreAllLogs();
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
export default function Main() {
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
  const [twentyOne, setTwentyOne] = React.useState(false);

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
    } else if (name == 'twentyOne') {
      setTwentyOne(!twentyOne);
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
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: widthPercentageToDP('96%'), // 80% of width device screen
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: Dimensions.get('screen').width / 1.5,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  position: 'absolute',
                  top: 10,
                  left: -Dimensions.get('screen').width / 24,
                }}>
                <RoundedButtonStatus
                  onClick={() => onclick('first')}
                  active={firstBtn} title="air con"
                  top={Dimensions.get('screen').height / 4.8}
                  left={Dimensions.get('screen').width / 35}
                />
                <RoundedButtonStatus
                  onClick={() => onclick('second')}
                  active={secondBtn} title="freezer"
                  top={Dimensions.get('screen').height / 4.6}
                  left={Dimensions.get('screen').width / 35}
                />
                <RoundedButtonStatus
                  onClick={() => onclick('third')}
                  active={thirdBtn} title="stove"
                  top={Dimensions.get('screen').height / 4.4}
                  left={Dimensions.get('screen').width / 35}
                />
                <RoundedButtonStatus
                  onClick={() => onclick('forth')}
                  active={forthBtn} title="extractor hood"
                  top={Dimensions.get('screen').height / 3.1}
                  left={Dimensions.get('screen').width / 35}
                />
                <RoundedButtonStatus
                  onClick={() => onclick('fifth')}
                  active={fifthBtn} title="oven"
                  top={Dimensions.get('screen').height / 3}
                  left={Dimensions.get('screen').width / 35}
                />
                <RoundedButtonStatus
                  onClick={() => onclick('seven')}
                  active={seventhBtn} title="quooker"
                  top={Dimensions.get('screen').height / 2.9}
                  left={Dimensions.get('screen').width / 35}
                />
              </View>

              <ImageBackground
                source={require('../../../../images/shipBackground.png')}
                resizeMode="stretch"
                style={{
                  flex: 1,
                  marginLeft: Dimensions.get('screen').width / 8,
                  height: Dimensions.get('screen').height / 1.1,
                  width: Dimensions.get('screen').width / 3,
                }}>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <View style={{ top: Dimensions.get('screen').height / 3 }}>
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 20}
                      left={Dimensions.get('screen').width / 50}
                      active={firstBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 5.6}
                      left={-Dimensions.get('screen').width / 70}
                      active={secondBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 4.8}
                      left={-Dimensions.get('screen').width / 80}
                      active={thirdBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 4.8}
                      left={-Dimensions.get('screen').width / 35.5}
                      active={forthBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 4.8}
                      left={Dimensions.get('screen').width / 250}
                      active={fifthBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 4.2}
                      left={Dimensions.get('screen').width / 200}
                      active={seventhBtn}
                    />
                  </View>

                  <View style={{ top: Dimensions.get('screen').height / 30 }}>
                    <MiddleOfButton
                      right={Dimensions.get('screen').height / 14}
                      active={tenthBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 10}
                      right={Dimensions.get('screen').height / 4.5}
                      active={eleventhBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 10.5}
                      right={-Dimensions.get('screen').height / 13}
                      active={eleventhBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 3.2}
                      right={Dimensions.get('screen').height / 14}
                      active={twelveBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 2.7}
                      right={Dimensions.get('screen').height / 9.5}
                      active={forteenthBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 1.92}
                      right={Dimensions.get('screen').height / 120}
                      active={fifteenBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 1.92}
                      right={-Dimensions.get('screen').height / 24}
                      active={seventeenBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 1.82}
                      right={-Dimensions.get('screen').height / 24}
                      active={nineteenBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 1.52}
                      right={-Dimensions.get('screen').height / 18}
                      active={twentyBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 1.37}
                      right={Dimensions.get('screen').height / 40}
                      active={twentyBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 1.39}
                      right={Dimensions.get('screen').height / 9}
                      active={twentyBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 1.51}
                      right={Dimensions.get('screen').height / 4.9}
                      active={twentyBtn}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 1.38}
                      right={-Dimensions.get('screen').height / 10}
                      active={twentyOne}
                    />
                    <MiddleOfButton
                      top={Dimensions.get('screen').height / 1.39}
                      active={twentyOne}
                      right={Dimensions.get('screen').height / 4.1}
                    />
                  </View>
                </View>
              </ImageBackground>

              <View
                style={{
                  flexDirection: 'column',
                  width: Dimensions.get('window').width / 4.6,
                  top: Dimensions.get('screen').height / 20,
                  right: -10
                }}>
                <RoundedButtonStatus
                  onClick={() => onclick('tenth')}
                  active={tenthBtn}
                  title="furler"
                  right
                />
                <View style={{ marginTop: 5 }}>
                  <RoundedButtonStatus
                    onClick={() => onclick('eleven')}
                    active={eleventhBtn}
                    title="capstan winches"
                    right
                  />
                </View>
                <RoundedButtonStatus
                  onClick={() => onclick('twelve')}
                  active={twelveBtn}
                  title="anchor windlass"
                  right
                  top={Dimensions.get('screen').height / 70}
                />
                <RoundedButtonStatus
                  onClick={() => onclick('forteen')}
                  active={forteenthBtn}
                  title="VHF / AIS"
                  right
                  top={Dimensions.get('screen').height / 70}
                />
                <RoundedButtonStatus
                  onClick={() => onclick('fifteen')}
                  active={fifteenBtn}
                  title="refridgerator"
                  right
                  top={Dimensions.get('screen').height / 35}
                />
                <RoundedButtonStatus
                  onClick={() => onclick('seventeen')}
                  active={seventeenBtn}
                  title="TV"
                  right
                  top={Dimensions.get('screen').height / 25}
                />
                <RoundedButtonStatus
                  onClick={() => onclick('nineteen')}
                  active={nineteenBtn}
                  title="HiFi"
                  right
                  top={Dimensions.get('screen').height / 20}
                />
                <RoundedButtonStatus
                  onClick={() => onclick('twenty')}
                  active={twentyBtn}
                  title="winches"
                  right
                  top={Dimensions.get('screen').height / 7}
                />
                <RoundedButtonStatus
                  onClick={() => onclick('twentyOne')}
                  active={twentyOne}
                  title="helm stations"
                  right
                  top={Dimensions.get('screen').height / 7}
                />
              </View>
            </View>

            {/**************************** right side **************************** */}
            <View style={styles.container}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginRight: 50,
                  top: 30,
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

              <Text
                style={{
                  marginTop: 80,
                  margin: 20,
                  marginLeft: 50,
                  fontSize: hp('2.5%'),
                  fontFamily: "OpenSans-ExtraBold",
                  color: '#191919',
                  textShadowColor: 'rgba(255,255,255,.28)',
                  textShadowOffset: { width: -0.1, height: 1.1 },
                  textShadowRadius: 1,
                }}>
                UPPER DECK
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
                    lights salon
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
                      fontFamily: "OpenSans-Bold",
                      marginVertical: 20,
                    }}>
                    outlets salon
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
                      fontFamily: "OpenSans-Bold",
                      marginVertical: 20,
                    }}>
                    lights outside
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
                      fontFamily: "OpenSans-Bold",
                      marginVertical: 20,
                    }}>
                    nav equipment
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
                  // paddingBottom: 34,
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
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
  },
  text: {
    color: '#AAAAAA',
    fontFamily: "OpenSans-Bold",
  },
  indicator: {
    position: 'absolute',
    width: 14,
    top: 1,
    right: 0,
    backgroundColor: '#AAAAAA',
    borderRadius: 12,
  },
});

import { BlurView } from '@react-native-community/blur';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import grayTri from '../../../../images/graytriangle.png';
import slyderLogo from '../../../../images/slyderlogo.png';
import yellowTri from '../../../../images/yellowtriangle.png';
import CustomSwitch from '../../../Component/CustomeSwitch';
import NavBarbtn from '../../../Component/NavBarbtn';
import NeumorphismButton from '../../../Component/neumorphism-button';

const ScrollItem = ({ title, style, iconColor, font }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', ...style }}>
    <Image
      style={{ width: 30, height: 30, tintColor: iconColor }}
      source={grayTri}
    />
    <Text style={{
      color: 'gray', fontSize: hp('2.5%'), left: 10, color: 'rgba(170, 170, 170, 0.7)',
      fontFamily: font,
    }}>{title}</Text>
  </View>
);

const scrollElementHeightPercent = 45;

function WelcomeScreen() {
  const [contentOffset, setContentOffset] = React.useState({ x: 0, y: 0 });
  const [contentSize, setContentSize] = React.useState(0);
  const [scrollViewHeight, setScrollViewHeight] = React.useState(0);

  const scrollPerc =
    (contentOffset.y / (contentSize - scrollViewHeight)) *
    (60 - scrollElementHeightPercent);

  const [contentOffset2, setContentOffset2] = React.useState({ x: 0, y: 0 });
  const [contentSize2, setContentSize2] = React.useState(0);
  const [scrollViewHeight2, setScrollViewHeight2] = React.useState(0);

  const scrollPerc2 =
    (contentOffset2.y / (contentSize2 - scrollViewHeight2)) *
    (60 - scrollElementHeightPercent);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

  const [isEnabled5, setIsEnabled5] = useState(false);
  const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);

  const [isEnabled6, setIsEnabled6] = useState(false);
  const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);

  const [ShowComment, setShowModelComment] = useState(false);
  const [animateModal, setanimateModal] = useState(false);
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: '#242424' }}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={['#0F0F0F', '#3E4345', '#202427']}>
        <StatusBar hidden />
        <Pressable
          style={{
            width: '100%',
            height: 50,
            position: 'absolute',
          }}
          onPressOut={() => setShowModelComment(true)}></Pressable>
        <View style={{
          position: "absolute",
          right: 24,
          top: 24
        }}>
          <NeumorphismButton
            style={{
              // padding: 25,
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
        <SwipeUpDownModal
          modalVisible={ShowComment}
          PressToanimate={animateModal}
          OpenModalDirection="up"
          PressToanimateDirection="up"
          duration={1000}
          DisableHandAnimation={true}
          //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
          ContentModal={
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255,255,255,0.4)',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                overflow: 'hidden',
              }}>
              <BlurView
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                }}
                blurType="light"
                blurAmount={4}
              // reducedTransparencyFallbackColor="white"
              ></BlurView>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '65%',
                    height: '30%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <NavBarbtn text="DIMM" borderCol="#9A7C00" />
                  <NavBarbtn text="NIGHT" borderCol="#18CAD9" />
                  <NavBarbtn text="STBY" borderCol="#DE00E6" />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '88%',
                    height: '30%',
                    justifyContent: 'space-between',
                    marginTop: 40,
                    marginBottom: 12,
                  }}>
                  <NavBarbtn text="NAV" borderCol="#9A7C00" />
                  <NavBarbtn text="ANCHOR" borderCol="#87D918" />
                  <NavBarbtn text="STEAM" borderCol="#3E00E6" />
                  <NavBarbtn text="COMPASS" borderCol="#E60058" />
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setShowModelComment(false);
                  setanimateModal(false);
                }}
                style={{
                  alignSelf: 'center',
                  marginVertical: 20,
                }}>
                <FontAwesome name="chevron-up" size={40} color="#393A3A" />
              </TouchableOpacity>
            </View>
          }
          ContentModalStyle={styles.Modal}
          onClose={() => {
            setShowModelComment(false);
            setanimateModal(false);
          }}
        />
        <Image style={{ alignSelf: 'center', top: 50 }} source={slyderLogo} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginTop: Dimensions.get('screen').height / 20,
            }}>
            <View
              style={{
                width: '70%',
              }}>
              <View style={{ width: '100%' }}>
                <Text
                  style={{
                    fontSize: hp('3.5%'),
                    textAlign: 'center',
                    color: '#191919',
                    fontFamily: "OpenSans-ExtraBold",
                    textShadowColor: 'rgba(255,255,255,.28)',
                    textShadowOffset: { width: -0.1, height: 1.1 },
                    textShadowRadius: 1,
                  }}>
                  WELCOME
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                  width: '75%',
                  marginTop: '3%',
                }}>
                <View>
                  <CustomSwitch />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      fontFamily: 'OpenSans-Bold',
                      marginTop: 4,
                    }}>
                    system check
                  </Text>
                </View>
                <View>
                  <CustomSwitch />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      fontFamily: 'OpenSans-Bold',
                      marginTop: 4,
                    }}>
                    power up
                  </Text>
                </View>
                <View>
                  <CustomSwitch />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      fontFamily: 'OpenSans-Bold',
                      marginTop: 4,
                    }}>
                    air con
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                  width: '85%',
                  marginTop: '5%',
                }}>
                <View style={{ flexDirection: 'column' }}>
                  <View
                    style={{ backgroundColor: 'black', width: '110%', height: 2 }}
                  />
                  <View style={{ flexDirection: 'row', marginVertical: 24 }}>
                    <Image style={{ width: 30, height: 30 }} source={grayTri} />
                    <Text style={{ color: '#606060', fontSize: hp('2.5%'), fontFamily: 'OpenSans-Bold', marginLeft: 8 }}>
                      ALL ELECTRICAL SYSTEMS OK
                    </Text>
                  </View>
                  <View
                    style={{ backgroundColor: 'black', width: '110%', height: 2 }}
                  />
                </View>
                <View style={{ flexDirection: 'column', marginRight: '6%' }}>
                  <View
                    style={{ backgroundColor: 'black', width: '110%', height: 2 }}
                  />
                  <View style={{ flexDirection: 'row', marginVertical: 24 }}>
                    <Image style={{ width: 40, height: 40 }} source={yellowTri} />
                    <Text style={{
                      color: 'rgba(170, 170, 170, 0.7)',
                      fontFamily: 'OpenSans-Regular', fontSize: hp('2.5%')
                    }}>
                      seacock open?
                    </Text>
                  </View>
                  <View
                    style={{ backgroundColor: 'black', width: '110%', height: 2 }}
                  />
                </View>
              </View>

              <View
                style={{
                  marginTop: '1%',
                  flexWrap: 'wrap',
                  alignSelf: 'center',
                  width: '85%',
                }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <ScrollView
                    onScroll={e => {
                      setContentOffset(e.nativeEvent.contentOffset);
                    }}
                    onContentSizeChange={(_, height) => {
                      setContentSize(height);
                    }}
                    onLayout={e => {
                      setScrollViewHeight(e.nativeEvent.layout.height);
                    }}>
                    <ScrollItem
                      title={'SYSTEM MALFUNCTION (S)'}
                      iconColor={'red'}
                      font='OpenSans-Bold'
                    />
                    <ScrollItem
                      title={'bilge alarm / check seacocks'}
                      style={{ left: 45, marginTop: 10 }}
                      iconColor={'red'}
                      font='OpenSans-Regular'
                    />
                    <ScrollItem
                      title={
                        'overvoltage in main relay box / check & renew fuse'
                      }
                      style={{ left: 45, marginTop: 10 }}
                      iconColor={'red'}
                      font='OpenSans-Regular'
                    />
                    <View style={{ width: 30, height: 40 }} />
                  </ScrollView>
                  <View
                    style={{
                      width: 17,
                      backgroundColor: '#343434',
                      height: '100%',
                      borderRadius: 20,
                      borderColor: '#A6A6A6',
                      borderWidth: 1.5
                    }}>
                    <View
                      style={{
                        top: `${Number(scrollPerc || 0).toFixed(0)}%`,
                        height: `${scrollElementHeightPercent}%`,
                        backgroundColor: '#A6A6A6',
                        width: 14,
                        borderRadius: 20,
                        height: 135,
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: 'black',
                    height: 2,
                    width: '99%',
                    marginVertical: 20,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '85%',
                  alignSelf: 'center',
                }}>
                <ScrollView
                  onScroll={e => {
                    setContentOffset2(e.nativeEvent.contentOffset);
                  }}
                  onContentSizeChange={(_, height) => {
                    setContentSize2(height);
                  }}
                  onLayout={e => {
                    setScrollViewHeight2(e.nativeEvent.layout.height);
                  }}>
                  <ScrollItem
                    title={'MAINTANANCE EVENTS'}
                    iconColor={'yellow'}
                    font='OpenSans-Bold'
                  />
                  <ScrollItem
                    title={'adjust system timezone'}
                    style={{ left: 45, marginTop: 10 }}
                    iconColor={'yellow'}
                    font='OpenSans-Regular'
                  />
                  <ScrollItem
                    title={
                      'check: diesel filter / interval pending in 10 engine hours'
                    }
                    style={{ left: 45, marginTop: 10 }}
                    iconColor={'yellow'}
                    font='OpenSans-Regular'
                  />
                </ScrollView>
                <View
                  style={{
                    width: 17,
                    backgroundColor: '#343434',
                    borderRadius: 20,
                    borderColor: '#A6A6A6',
                    borderWidth: 1.5,
                    height: '110%'
                  }}>
                  <View
                    style={{
                      top: `${Number(scrollPerc2 || 0).toFixed(0)}%`,
                      height: `${scrollElementHeightPercent}%`,
                      backgroundColor: '#A6A6A6',
                      width: 14,
                      borderRadius: 20,
                      height: 117,
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                width: '30%',
                height: '95%',
                alignItems: 'center',
                borderLeftWidth: 1,
                borderColor: '#6C6C6C',
              }}>
              <Text
                style={{
                  fontSize: hp('3.5%'),
                  textAlign: 'center',
                  color: '#191919',
                  fontFamily: "OpenSans-ExtraBold",
                  textShadowColor: 'rgba(255,255,255,.28)',
                  textShadowOffset: { width: -0.1, height: 1.1 },
                  textShadowRadius: 1,
                }}>
                GOODBYE
              </Text>
              <View style={{ marginTop: '6%' }}>
                <CustomSwitch />
                <Text
                  style={{
                    textAlign: 'center',
                    top: 5,
                    fontSize: hp('2%'),
                    color: '#AAAAAA',
                    fontFamily: 'OpenSans-Bold',
                  }}>
                  in harbour
                </Text>
              </View>
              <View style={{ marginTop: '8%' }}>
                <CustomSwitch />
                <Text
                  style={{
                    textAlign: 'center',
                    top: 5,
                    fontSize: hp('2%'),
                    color: '#AAAAAA',
                    fontFamily: 'OpenSans-Bold',
                  }}>
                  at anchor
                </Text>
              </View>
              <View style={{ marginTop: '10%' }}>
                <CustomSwitch />
                <Text
                  style={{
                    textAlign: 'center',
                    top: 5,
                    fontSize: hp('2%'),
                    color: '#AAAAAA',
                    fontFamily: 'OpenSans-Bold',
                  }}>
                  long term
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  Modal: {
    marginTop: 0,
    width: '50%',
    flex: 0,
    height: '50%',
    alignSelf: 'center',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
});

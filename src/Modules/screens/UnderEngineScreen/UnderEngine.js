import React, { useState } from 'react';
import {
  Alert, Animated, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import centerCompass from '../../../../images/compasscircle.png';
import greenCircle from '../../../../images/greencircle.png';
import leftrev from '../../../../images/leftrevs.png';
import boat from '../../../../images/LowerLayer4.png';
import rightrev from '../../../../images/rightrevs.png';
import CustomeSwitch from '../../../Component/CustomeSwitch';
import Resetbtn from '../../../Component/extra/resetbtn';
import NeumorphismButton from '../../../Component/neumorphism-button';
import NumberMeter from '../../../Component/NumberMeter';
import SogData from '../SailingScreen/components/SogData';

var lastDigit = 0;
function UnderEngine(props) {
  const [rightSide, setrightside] = useState('1350');
  const [leftside, setleftside] = useState('1270');

  const [compassHeading1, setCompassHeading1] = useState(0);

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

  //set log 1 value
  const [myText1, setMyText1] = useState('11.5');
  const [myText2, setMyText2] = useState('12.2');
  const [bgColor1, setBgColor1] = useState('#3e3e3e');
  const [bgColor2, setBgColor2] = useState('#3e3e3e');

  const setBoth1 = () => {
    setBgColor1('red');
    setBgColor2('#3e3e3e');
  };

  const setBoth2 = () => {
    setBgColor1('#3e3e3e');
    setBgColor2('red');
  };
  return (
    <LinearGradient colors={['#202427', '#3E4345', '#131617']}>
      <StatusBar hidden />
      {/* <ScrollView> */}
      {/*shadow drop neomorph switch equipment*/}
      <View style={{ position: 'absolute', top: 90, left: 80 }}>
        <CustomeSwitch />

        <Text
          style={{
            textAlign: 'center',
            top: 5,
            fontSize: hp('2%'),
            color: '#AAAAAA',
            fontFamily: "OpenSans-Bold",
          }}>
          nav equipment
        </Text>
      </View>
      {/*shadow drop neomorph propulsion*/}
      <View style={{ position: 'absolute', top: 240, left: 80 }}>
        <CustomeSwitch />

        <Text
          style={{
            textAlign: 'center',
            top: 5,
            fontSize: hp('2%'),
            color: '#AAAAAA',
            fontFamily: "OpenSans-Bold",
          }}>
          propulsion
        </Text>
      </View>
      {/*MOB BUTTON */}
      <View
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          top: 20,
          right: 35,
        }}>
        <NeumorphismButton
          style={{
            padding: 40,
            borderColor: '#7b0000',
            borderWidth: 5,
            borderRadius: 30,
            height: 120,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text
            style={{
              fontSize: hp('2%'),
              color: '#AAAAAA',
              fontFamily: "OpenSans-Bold",
              alignSelf: 'center',
            }}>
            MOB
          </Text>
        </NeumorphismButton>
        {/*shadow drop neomorph switch winches*/}
        <View style={{ position: 'absolute', top: 170, right: Dimensions.get('screen').width / 40 }}>
          <CustomeSwitch />

          <Text
            style={{
              textAlign: 'center',
              top: 5,
              fontSize: hp('2%'),
              color: '#AAAAAA',
              fontFamily: "OpenSans-Bold",
            }}>
            winches
          </Text>
        </View>
        {/*shadow drop neomorph switch windlass*/}
        <View style={{ position: 'absolute', top: Dimensions.get('screen').height / 2.8, right: Dimensions.get('screen').width / 40 }}>
          <CustomeSwitch />

          <Text
            style={{
              textAlign: 'center',
              top: 8,
              fontSize: hp('2%'),
              color: '#AAAAAA',
              fontFamily: "OpenSans-Bold",
            }}>
            windlass
          </Text>
        </View>
      </View>

      {/*north west angles at the top of the screen */}
      <View style={{ justifyContent: 'center', alignItems: 'center', top: 10 }}>
        <View
          style={{
            borderWidth: 0.7,
            top: 10,
            borderColor: 'gray',
            borderRadius: 20,
            padding: 10,
            left: 27,
            paddingHorizontal: 25
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{
              fontSize: hp('2%'),
              color: '#AAAAAA',
              fontFamily: "OpenSans-Bold",
            }}>POS</Text>
            <Text
              style={{
                alignSelf: 'flex-end',
                fontSize: hp('2%'),
                color: '#AAAAAA',
                fontFamily: "OpenSans-Bold",
              }}>
              GPS
            </Text>
          </View>
          <Text
            style={{
              fontSize: hp('3.7%'),
              color: '#AAAAAA',
              fontFamily: "DINAlternate-Bold",
              alignSelf: 'center',
            }}>
            N 36°54’51.4’’ | W 006°51’50.0
          </Text>
        </View>
      </View>

      {/*row views*/}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: 30,
        }}>
        {/*log 1, log 2, time */}
        <View
          style={{
            left: 40,
            marginLeft: Dimensions.get('screen').width / 5.9,
            width: Dimensions.get('screen').width / 7,
            height: Dimensions.get('screen').height / 2.7,
            padding: 18,
            flexDirection: 'column',
            borderWidth: 0.7,
            borderColor: 'gray',
            borderRadius: 20,
          }}>
          {/* reset button */}
          <View
            style={{
              position: 'absolute',
              right: Dimensions.get('window').width / 8,
              top: Dimensions.get('window').width / 40,
            }}>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  '',
                  'Are you sure you want to Reset?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    { text: 'Yes', onPress: () => setMyText1('0.0') },
                  ],
                  { cancelable: false },
                )
              }
            >
              <Resetbtn
                style={{
                  padding: 7,
                  width: Dimensions.get('screen').width / 22,
                  height: Dimensions.get('screen').width / 35,
                  left: Dimensions.get('window').width / 150,
                  borderRadius: 40,
                  borderColor: '#000000',
                  borderWidth: 4,
                }}>
                <Text
                  style={{
                    fontSize: hp('1.5%'),
                    color: '#AAAAAA',
                    fontFamily: "OpenSans-Bold",
                    alignSelf: 'center',
                  }}>
                  reset
                </Text>
              </Resetbtn>
            </TouchableOpacity>
          </View>
          {/* reset button */}
          <View
            style={{
              position: 'absolute',
              right: Dimensions.get('window').width / 8.5,
              top: Dimensions.get('window').width / 11,
            }}>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  '',
                  'Are you sure you want to Reset?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    { text: 'Yes', onPress: () => setMyText2('0.0') },
                  ],
                  { cancelable: false },
                )
              }>
              <Resetbtn
                style={{
                  padding: 7,
                  width: Dimensions.get('screen').width / 22,
                  height: Dimensions.get('screen').width / 35,
                  borderRadius: 40,
                  borderColor: '#000000',
                  borderWidth: 4,
                  top: -10,
                }}>
                <Text
                  style={{
                    fontSize: hp('1.5%'),
                    color: '#AAAAAA',
                    fontFamily: "OpenSans-Bold",
                    alignSelf: 'center',
                  }}>
                  reset
                </Text>
              </Resetbtn>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{
                fontSize: hp('2%'),
                color: '#AAAAAA',
                fontFamily: "OpenSans-Bold",
                left: 12
              }}>
                LOG 1
              </Text>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold",
                  right: 18,
                }}>
                nm
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: hp('7%'),
              marginTop: -20,
              fontFamily: "DINAlternate-Bold",
              alignSelf: 'center',
              color: '#AAAAAA',
            }}>
            {myText1}
          </Text>
          <View
            style={{
              height: 2,
              alignSelf: 'center',
              width: '90%',
              backgroundColor: 'gray',
              flexDirection: 'row',
            }}></View>
          <View style={{ top: 20 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{
                fontSize: hp('2%'),
                color: '#AAAAAA',
                fontFamily: "OpenSans-Bold", left: 12
              }}>
                LOG 2
              </Text>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold",
                  right: 18,
                }}>
                nm
              </Text>
            </View>
            <Text
              style={{
                alignSelf: 'center',
                color: '#AAAAAA',
                marginTop: -20,
                fontSize: hp('7%'),
                fontFamily: "DINAlternate-Bold",
              }}>
              {myText2}
            </Text>
          </View>
          <View
            style={{
              height: 2,
              top: 10,
              alignSelf: 'center',
              width: '90%',
              backgroundColor: 'gray',
              flexDirection: 'row',
            }}></View>
          <View style={{ top: 0 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: 10,
              }}>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold",
                  top: 10,
                  left: 5,
                }}>
                time
              </Text>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold",
                  top: 10,
                  alignSelf: 'flex-end',
                  right: 1,
                }}>
                local
              </Text>
            </View>
            <Text
              style={{
                fontSize: hp('6%'),
                alignSelf: 'center',
                top: 10,
                color: '#AAAAAA',
                fontFamily: "DINAlternate-Bold",
              }}>
              12:07:03
            </Text>
          </View>
        </View>
        {/*speed and sog*/}
        <View
          style={{
            width: 610,
            alignItems: 'center',
            justifyContent: 'center',
            right: 40,
            flexDirection: 'column',
            top:-20
          }}>
          <View
            style={{
              width: '60%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderWidth: 0.7,
              borderColor: 'gray',
              borderRadius: 20,
              paddingTop: 15,
              top: 30,
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginLeft: -10,
                    fontSize: hp('2%'),
                    color: '#AAAAAA',
                    fontFamily: "OpenSans-Bold",
                  }}>
                  Speed
                </Text>
                <Text
                  style={{
                    left: Dimensions.get('screen').width / 24,
                    fontSize: hp('2%'),
                    color: '#AAAAAA',
                    fontFamily: "OpenSans-Bold",
                  }}>
                  kn
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: hp('7%'),
                    alignSelf: 'center',
                    color: '#AAAAAA',
                    fontFamily: "DINAlternate-Bold",
                    marginTop: -20,
                    left: Dimensions.get('screen').width / 60,
                  }}>
                  9.9
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '90%',
                marginTop: -10,
                width: 2,
                backgroundColor: 'gray',
                marginLeft: 5,
              }}></View>
            <View>
              <View
                style={{
                  left: -20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  left: -20,
                  fontFamily: "OpenSans-Bold",
                }}>SOG</Text>
                <Text
                  style={{
                    fontSize: hp('2%'),
                    color: '#AAAAAA',
                    fontFamily: "OpenSans-Bold",
                    left: Dimensions.get('screen').width / 70,
                  }}>
                  kn
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: hp('7%'),
                    left: -20,
                    marginTop: -20,
                    color: '#AAAAAA',
                    fontFamily: "DINAlternate-Bold",
                  }}>
                  13.6
                </Text>
                <Text> </Text>
              </View>
            </View>
          </View>
          <Animated.Image
            style={[
              {
                marginTop: 20,
                top: 20,
                height: Dimensions.get('screen').height / 2.1,
                width: Dimensions.get('screen').width / 3.5,
                transform: [{ rotate: `${lastDigit}deg` }],
              },
            ]}
            resizeMode="contain"
            source={centerCompass}
          />

          <Image
            style={{
              position: 'absolute',
              height: Dimensions.get('screen').height / 3.5,
              width: Dimensions.get('screen').width / 11,
              top: Dimensions.get('screen').height / 4,
            }}
            source={boat}></Image>
          <Image
            style={{
              position: 'absolute',
              top: Dimensions.get('screen').height / 3.2,
              right: Dimensions.get('screen').width / 3.3,
              height: Dimensions.get('screen').height / 9.5,
              width: Dimensions.get('screen').width / 11,
            }}
            source={leftrev}></Image>
          <Text
            style={{
              position: 'absolute',
              color: '#EBDCDC',
              fontFamily: "DINAlternate-Bold",
              top: Dimensions.get('screen').height / 3,
              fontSize: hp('6%'),
              left: Dimensions.get('screen').width / 9.9,
            }}>
            {leftside}
          </Text>
          <Image
            style={{
              position: 'absolute',
              top: Dimensions.get('screen').height / 3.2,
              left: Dimensions.get('screen').width / 3.3,
              height: Dimensions.get('screen').height / 9.5,
              width: Dimensions.get('screen').width / 11,
            }}
            source={rightrev}></Image>
          <Text
            style={{
              position: 'absolute',
              color: '#EBDCDC',
              fontFamily: "DINAlternate-Bold",
              top: Dimensions.get('screen').height / 3,
              fontSize: hp('6%'),
              right: Dimensions.get('screen').width / 9.8,
            }}>
            {/* 1350 */}
            {rightSide}
          </Text>
        </View>

        {/* dtw, ttw, eta */}
        <View
          style={{
            right: 125,
            marginRight: Dimensions.get('screen').width / 7,
            width: Dimensions.get('screen').width / 8,
            height: Dimensions.get('screen').height / 2.7,
            padding: 15,
            flexDirection: 'column',
            borderWidth: 0.7,
            borderColor: 'gray',
            borderRadius: 20,
          }}>
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{
                fontSize: hp('2%'),
                color: '#AAAAAA',
                fontFamily: "OpenSans-Bold", left: 12
              }}>
                DTW
              </Text>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold",
                  right: 18,
                }}>
                nm
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: hp('7%'),
              alignSelf: 'center',
              marginTop: -20,
              color: '#AAAAAA',
              fontFamily: "DINAlternate-Bold",
            }}>
            37.3
          </Text>
          <View
            style={{
              height: 2,
              alignSelf: 'center',
              width: '90%',
              backgroundColor: 'gray',
              flexDirection: 'row',
            }}></View>

          <View style={{ top: 10 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{
                fontSize: hp('2%'),
                color: '#AAAAAA',
                fontFamily: "OpenSans-Bold", left: 12
              }}>
                TTW
              </Text>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold",
                  right: 18,
                }}>
                hrs
              </Text>
            </View>
            <Text
              style={{
                fontSize: hp('7%'),
                alignSelf: 'center',
                color: '#AAAAAA',
                marginTop: -20,
                fontFamily: "DINAlternate-Bold",
              }}>
              04:00
            </Text>
          </View>
          <View
            style={{
              height: 2,
              top: 10,
              alignSelf: 'center',
              width: '90%',
              backgroundColor: 'gray',
              flexDirection: 'row',
            }}></View>
          <View style={{ top: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: 10,
              }}>
              <Text style={{
                fontSize: hp('2%'),
                color: '#AAAAAA',
                fontFamily: "OpenSans-Bold", left: 12
              }}>
                ETA
              </Text>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold",
                  right: 18,
                }}>
                24h
              </Text>
            </View>
            <Text
              style={{
                fontSize: hp('7%'),
                alignSelf: 'center',
                marginTop: -7,
                color: '#AAAAAA',
                fontFamily: "DINAlternate-Bold",
              }}>
              16:07
            </Text>
          </View>
        </View>
      </View>
      {/* controller and engine bb tab */}
      <View
        style={{
          flexDirection: 'row',
          top: -Dimensions.get('screen').height / 9,
        }}>
        <Text
          style={{
            left: Dimensions.get('screen').width / 9,
            bottom: 20,
            fontSize: hp('2%'),
            color: '#AAAAAA',
            fontFamily: "OpenSans-Bold",
          }}>
          controller
        </Text>
        <Text
          style={{
            left: Dimensions.get('screen').width / 5,
            fontSize: hp('2%'),
            color: '#AAAAAA',
            fontFamily: "OpenSans-Bold",
            bottom: 20,
          }}>
          engine bb
        </Text>
      </View>
      <View
        style={{
          top: -Dimensions.get('screen').height / 9,
          flexDirection: 'row',
          left: Dimensions.get('screen').width / 9.8,
        }}>
        <View style={{ flexDirection: 'column', right: 20 }}>
          <NumberMeter number={'97'} skill="°C" width={5} />
        </View>
        <View style={{ flexDirection: 'column', left: 10 }}>
          <NumberMeter number={'135'} skill="°C" width={5} />
          <View style={{ flexDirection: 'row', top: 10, right: Dimensions.get('screen').width / 60 }}>
            <Text style={{
              fontSize: hp('2%'),
              color: '#AAAAAA',
              fontFamily: "OpenSans-Bold",
            }}>
              sea water pump
            </Text>
            <Image
              style={{ width: 20, height: 20, alignSelf: 'center', left: 5 }}
              source={greenCircle}></Image>
          </View>
        </View>
        <View style={{ flexDirection: 'column', left: 14 }}>
          <NumberMeter number={'3.9'} skill="KW" width={5} />
          <View style={{ flexDirection: 'row', top: 10, left: Dimensions.get('screen').width / 35 }}>
            <Text style={{
              fontSize: hp('2%'),
              color: '#AAAAAA',
              fontFamily: "OpenSans-Bold",
            }}>
              cooling pump
            </Text>
            <Image
              style={{ width: 20, height: 20, alignSelf: 'center', left: 5 }}
              source={greenCircle}></Image>
          </View>
        </View>
      </View>

      {/* engine stb and controller tab*/}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          top: -Dimensions.get('screen').height / 10,
        }}>
        <Text
          style={{
            right: Dimensions.get('screen').width / 5.8,
            fontSize: hp('2%'),
            bottom: Dimensions.get('screen').height / 7,
            color: '#AAAAAA',
            fontFamily: "OpenSans-Bold",
          }}>
          engine stb
        </Text>
        <Text
          style={{
            right: Dimensions.get('screen').width / 12,
            fontSize: hp('2%'),
            bottom: Dimensions.get('screen').height / 7,
            color: '#AAAAAA',
            fontFamily: "OpenSans-Bold",
          }}>
          controller
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          top: -Dimensions.get('screen').height / 4.6,
          bottom: Dimensions.get('screen').height / 8,
          right: Dimensions.get('screen').width / 14,
        }}>
        <View style={{ flexDirection: 'column' }}>
          <NumberMeter number={'3.5'} skill="KW" width={5} />
          <View style={{ flexDirection: 'row', top: 10, right: Dimensions.get('screen').width / 50 }}>
            <Image
              style={{ width: 20, height: 20, alignSelf: 'center', right: 10 }}
              source={greenCircle}></Image>
            <Text style={{
              fontSize: hp('2%'),
              color: '#AAAAAA',
              fontFamily: "OpenSans-Bold",
            }}>
              cooling pump
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', left: 10 }}>
          <NumberMeter number={'135'} skill="°C" width={5} />

          <View style={{ flexDirection: 'row', top: 10, right: Dimensions.get('screen').width / 150 }}>
            <Image
              style={{ width: 20, height: 20, alignSelf: 'center', left: 5 }}
              source={greenCircle}></Image>
            <Text style={{
              left: 10, fontSize: hp('2%'),
              color: '#AAAAAA',
              fontFamily: "OpenSans-Bold",
            }}>
              sea water pump
            </Text>
          </View>
        </View>

        <NumberMeter number={'97'} skill="°C" width={5} />
      </View>

      {/*generator toogle*/}
      <View
        style={{
          top: -Dimensions.get('screen').height / 4.7,
          marginHorizontal: 50,
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>

        <View style={{
          top: -Dimensions.get('screen').height / 100,
        }}>
          <CustomeSwitch />
          <Text
            style={{
              textAlign: 'center',
              fontSize: hp('2%'),
              color: '#AAAAAA',
              fontFamily: "OpenSans-Bold",
            }}>
            generator
          </Text>
        </View>

        {/* water temp */}
        <View style={{ top: 20, alignSelf: 'center', flexDirection: 'row', left: 0 }}>
          <View
            style={{
              alignItems: 'center',
              width: '20%',
              justifyContent: 'center',
              marginLeft: 15,
              left: 40,
              borderWidth: 1.5,
              borderColor: 'gray',
              borderRadius: 20,
              padding: 8,
              height:90
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold", right: 40,
                }}>
                  WATER TEMP
                </Text>
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontSize: hp('2%'),
                    color: '#AAAAAA',
                    fontFamily: "OpenSans-Bold", left: 30,
                  }}>
                  °C
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginLeft: 20,
                    marginTop: -15,
                    fontSize: hp('7%'),
                    color: '#AAAAAA',
                    fontFamily: "DINAlternate-Bold",
                  }}>
                  28.3
                </Text>
              </View>
            </View>
          </View>
          {/* Range */}
          <View style={{ top: 0, marginLeft: 20, alignItems: 'center' }}>
            <View
              style={{
                width: '70%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 1.5,
                borderColor: 'gray',
                borderRadius: 20,
                paddingVertical: 15,
                paddingHorizontal: 30,
                height:90
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      right: 55, fontSize: hp('2%'),
                      color: '#AAAAAA',
                      fontFamily: "OpenSans-Bold",
                    }}>
                    RANGE
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      fontFamily: "OpenSans-Bold",
                    }}>
                    nm
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      right: 30,
                      fontSize: hp('7%'),
                      color: '#AAAAAA',
                      fontFamily: "DINAlternate-Bold",
                      alignSelf: 'center',
                      marginTop: -15,
                    }}>
                    300
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: '100%',
                  width: 2,
                  backgroundColor: 'gray',
                  marginLeft: 20,
                }}></View>
              <View>
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      fontFamily: "OpenSans-Bold",
                    }}>
                    RANGE
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      left: 40,
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      fontFamily: "OpenSans-Bold",
                    }}>
                    hrs:min
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      fontSize: hp('7%'),
                      left: 50,
                      color: '#AAAAAA',
                      marginTop: -15,
                      fontFamily: "DINAlternate-Bold",
                    }}>
                    07:42
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Depth*/}
          <View
            style={{
              alignItems: 'center',
              width: '19%',
              right: 40,
              justifyContent: 'center',
              borderWidth: 1.5,
              borderColor: 'gray',
              borderRadius: 20,
              padding: 10,
              height:90
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{
                  fontSize: hp('2%'),
                  color: '#AAAAAA',
                  fontFamily: "OpenSans-Bold", right: 30
                }}>
                  DEPTH
                </Text>
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontSize: hp('2%'),
                    color: '#AAAAAA',
                    fontFamily: "OpenSans-Bold",
                    left: 30,
                  }}>
                  m
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: hp('7%'),
                    left: 0,
                    color: '#AAAAAA',
                    marginTop: -15,
                    fontFamily: "DINAlternate-Bold",
                  }}>
                  36.5
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ top: 30, right: -5, position: 'absolute' }}>
          <View>
            <CustomeSwitch />
            <Text
              style={{
                textAlign: 'center',
                top: 5,
                fontSize: hp('2%'),
                color: '#AAAAAA',
                fontFamily: "OpenSans-Bold",
              }}>
              capstan winches
            </Text>
          </View>

        </View>
      </View>
      {/* start/stop btn view*/}
      <View
        style={{
          flexDirection: 'row',
          top: -Dimensions.get('screen').height / 3.8,
          left: Dimensions.get('screen').width / 30,
        }}>
        {/* start btn */}
        <View style={{ flexDirection: 'row' }}>
          <Resetbtn
            style={{
              padding: 8,
              borderRadius: 40,
              borderColor: bgColor1,
              borderWidth: 5,
            }}>
            <Text
              style={{
                fontSize: hp('2%'),
                color: '#AAAAAA',
                fontFamily: "OpenSans-Bold",
                alignSelf: 'center',
              }}
              onPress={() => setBoth1()}>
              start
            </Text>
          </Resetbtn>
          {/* stop btn */}
          <Resetbtn
            style={{
              padding: 8,
              borderRadius: 40,
              borderColor: bgColor2,
              borderWidth: 5,
              left: 10,
            }}>
            <Text
              style={{
                fontSize: hp('2%'),
                color: '#AAAAAA',
                fontFamily: "OpenSans-Bold",
                alignSelf: 'center',
              }}
              onPress={() => setBoth2()}>
              stop
            </Text>
          </Resetbtn>
        </View>
      </View>
      {/* </ScrollView> */}
    </LinearGradient>
  );
}
const styles = StyleSheet.create({});
export default UnderEngine;

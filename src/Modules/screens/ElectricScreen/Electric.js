import React from 'react';
import { Dimensions, ImageBackground, Text, View, StatusBar } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import NeumorphismButton from '../../../Component/neumorphism-button';
import NumberMeter from '../../../Component/NumberMeter';
import { ELECTRIC_IMAGE } from '../../ExportAllImages/index'

export default function Electric() {
  return (
    <ImageBackground
      source={ELECTRIC_IMAGE}
      resizeMode="stretch"
      style={{
        flex: 1,
        backgroundColor: '#262A2D',
      }}>
      <StatusBar hidden />
      <View
        style={{
          flex: 1,
        }}>
        <View style={{
          position: "absolute",
          right: 60,
          top: 60
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
                fontFamily: 'OpenSans-Bold'
              }}>
              MOB
            </Text>
          </NeumorphismButton>
        </View>
        <View
          style={{
            width: '100%',
            height: '37%',
            flexDirection: 'row',
          }}>
          <View style={{ width: '50%', height: '100%', marginTop: '2%' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: '#B1B1B1',
                    padding: 12,
                    borderRadius: 12,
                  }}>
                  <NumberMeter number={'4,7'} skill="A" width={40} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: Dimensions.get('screen').width / 8,
                  margin: 10,
                }}>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: '#B1B1B1',
                    padding: 12,
                    borderRadius: 12,
                  }}>
                  <NumberMeter number={'4,5'} skill="A" width={40} />
                </View>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: '#B1B1B1',
                    padding: 12,
                    borderRadius: 12,
                  }}>
                  <NumberMeter number={'4,6'} skill="A" width={40} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignSelf: 'center',
                  marginRight: 12,
                }}>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: '#B1B1B1',
                    padding: 12,
                    borderRadius: 12,
                    marginBottom: 15,
                  }}>
                  <NumberMeter number={'4,5'} skill="A" width={40} />
                </View>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: '#B1B1B1',
                    padding: 12,
                    borderRadius: 12,
                  }}>
                  <NumberMeter number={'4,7'} skill="A" width={40} />
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    marginTop: -40,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#B1B1B1',
                      textAlign: 'center',
                      paddingBottom: 12,
                      fontFamily: 'OpenSans-Bold'
                    }}>
                    solar
                  </Text>
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: '#B1B1B1',
                      padding: 12,
                      borderRadius: 12,
                    }}>
                    <NumberMeter number={'4,7'} skill="A" width={50} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: '50%', flexDirection: 'row' }}>
            <View
              style={{
                width: '29.5%',
                height: '100%',
              }}
            />

            <View
              style={{
                width: '36%',
                justifyContent: 'flex-end',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '48%', alignItems: 'center' }}>
                  <NumberMeter number={'2,8'} skill="kW" width={40} />
                </View>
                <View style={{ width: '56%', alignItems: 'center' }}>
                  <NumberMeter number={'2,8'} skill="kW" width={40} />
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: '6%' }}>
                <View style={{ width: '48%', alignItems: 'center' }}>
                  <NumberMeter number={'100'} skill="%" width={40} />
                </View>
                <View style={{ width: '56%', alignItems: 'center' }}>
                  <NumberMeter number={'100'} skill="%" width={40} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '33.33%',
          }}>
          <View style={{ width: '50%', height: '100%', flexDirection: 'row' }}>
            <View style={{ width: '54%', height: '100%' }} />
            <View
              style={{
                width: '37%',
                height: '75%',
                justifyContent: 'space-between',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: '2%',
                }}>
                <View
                  style={{
                    width: '50%',
                    alignItems: 'center',
                  }}>
                  <NumberMeter number={'20'} skill="KW" width={40} />
                </View>
                <View
                  style={{
                    width: '50%',
                    alignItems: 'center',
                  }}>
                  <NumberMeter number={'20'} skill="KW" width={40} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: '50%',
                    alignItems: 'center',
                  }}>
                  <NumberMeter number={'100'} skill="%" width={40} />
                </View>
                <View
                  style={{
                    width: '50%',
                    alignItems: 'center',
                  }}>
                  <NumberMeter number={'100'} skill="%" width={40} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: '50%',
                    alignItems: 'center',
                  }}>
                  <NumberMeter number={'70'} skill="°C" width={40} />
                </View>
                <View
                  style={{
                    width: '50%',
                    alignItems: 'center',
                  }}>
                  <NumberMeter number={'70'} skill="°C" width={40} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '50%',
              height: '100%',
              flexDirection: 'row',
              paddingTop: '0.3%',
            }}>
            <View style={{ width: '15.7%', height: '100%' }} />
            <View
              style={{
                width: '24.5%',
                height: '100%',
              }}>
              <View
                style={{
                  width: '100%',
                  height: '34%',
                  flexDirection: 'row',
                }}>
                <View style={{ width: '30%', height: '100%' }} />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <NumberMeter number={'20'} skill="KW" width={40} />
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: '24%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <NumberMeter number={'1250'} skill="rpm" width={0} />
              </View>
            </View>
            <View style={{ width: '5%' }} />
            <View
              style={{
                width: '55%',
                height: '100%',
              }}>
              <View
                style={{
                  width: '100%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
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
                    width: Dimensions.get('screen').width / 11.5,
                    height: Dimensions.get('screen').width / 32,
                    justifyContent: 'center',
                    alignItems: 'center',

                    // ...include most of View/Layout styles
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: Dimensions.get('screen').width / 11.5 - 10,
                      backgroundColor: '#313131',
                      height: Dimensions.get('screen').width / 32 - 10,
                      borderRadius: 100,
                    }}>
                    <View
                      style={{
                        width: '33.33%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        height: 40,
                        borderRightWidth: 1,
                        borderColor: '#B1B1B',
                      }}>
                      <Text
                        numberOfLines={1}
                        style={{
                          fontSize: hp('2.4%'), fontFamily: 'OpenSans-Regular',
                          color: '#AAAAAA'
                        }}>
                        5,3
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '33.33%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        height: 40,
                        borderRightWidth: 1,
                        borderColor: '#B1B1B',
                      }}>
                      <Text
                        numberOfLines={1}
                        style={{ fontStyle: 'italic', fontSize: hp('2%'), color: '#AAAAAA' }}>
                        kW
                      </Text>
                    </View>

                    <View
                      style={{
                        width: '33.33%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        numberOfLines={1}
                        style={{ fontSize: hp('2.4%'), fontFamily: 'OpenSans-Regular', color: '#B1B1B1' }}>
                        5,6
                      </Text>
                    </View>
                  </View>
                </Neomorph>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '48.5%',
              height: '100%',

              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '80%',
                height: '25%',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: '#B1B1B1',
                      padding: 12,
                      borderRadius: 12,
                    }}>
                    <NumberMeter number={'200'} skill="A" width={50} />
                  </View>
                  <Text
                    style={{
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      textAlign: 'center',
                      marginTop: 24,
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    230V ac
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: '#B1B1B1',
                      padding: 12,
                      borderRadius: 12,
                      marginRight: '1%',
                    }}>
                    <NumberMeter number={'107'} skill="A" width={50} />
                  </View>
                  <Text
                    style={{
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      textAlign: 'center',
                      marginTop: 24,
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    24V dc
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: '#B1B1B1',
                      padding: 12,
                      borderRadius: 12,
                      // marginRight:"3%"
                    }}>
                    <NumberMeter number={'20'} skill="A" width={50} />
                  </View>
                  <Text
                    style={{
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      textAlign: 'center',
                      marginTop: 24,
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    12V dc
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

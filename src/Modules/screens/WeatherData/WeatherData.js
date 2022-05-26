import React from 'react';
import {
  Dimensions, StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import NeumorphismButton from '../../../Component/extra/NeumorphismsButton';
import BarGraph from './Component/Graphs/BarGraph';
import LineGraphs from './Component/Graphs/LineGraphs';
import RotateImage from './Component/rotateImage';
import WeatherTimeHour from './Component/WeatherTimeHour';
import WendSpeed from './Component/WendSpeed';

function MainScr(props) {

  return (
    <LinearGradient
      colors={['#0F0F0F', '#3E4345', '#202427']}
      style={styles.linearGradient}>
      <StatusBar hidden />
      <ScrollView>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            width: wp('100%'), // 80% of width device screen
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>

            <BarGraph />

            <LineGraphs title={'wind direction'} ylabel={'°'} xLabel={'h'} strokeColor='#640D02' top={Dimensions.get('screen').height / 34} right={-35} />

            <LineGraphs title={'temperature'} ylabel={'°C'} xLabel={'h'} strokeColor='#B18D2C' top={Dimensions.get('screen').height / 40} right={-24} />

            <LineGraphs title={'air pressure'} ylabel={'hPa'} xLabel={'h'} strokeColor='#2D8DB6' top={Dimensions.get('screen').height / 40} right={-20} />

          </View>

          {/**************************** right side **************************** */}
          <View style={[styles.container, {
            marginLeft: Dimensions.get('window').width / 15,
          }]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginLeft: Dimensions.get('window').width / 10,
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <NeumorphismButton circlebutton>
                  <View
                    style={{
                      borderWidth: 2,
                      width: 13,
                      borderColor: '#AAAAAA',
                    }}
                  />
                </NeumorphismButton>

                <View
                  style={{
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginTop: 40,
                    justifyContent: 'center',
                  }}>
                  <WeatherTimeHour />
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: hp('2.2%'),
                      marginTop: 10,
                    }}>
                    timescale
                  </Text>
                </View>

                <NeumorphismButton circlebutton plus>
                  <Text style={{ color: 'white', fontSize: hp('2.4%') }}>
                    {'+'}
                  </Text>
                </NeumorphismButton>
              </View>

              <View style={{ right: '10%', top: 0, position: 'absolute' }}>
                <NeumorphismButton MOB>
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: hp('2%'),
                    }}>
                    MOB
                  </Text>
                </NeumorphismButton>
              </View>
            </View>

            <RotateImage />

            <View style={{
              width: '38%',
              height: '40%',
              position: 'absolute',
              top: Dimensions.get('screen').height / 5.8,
              borderRadius: 200,
              paddingVertical: 5,
              alignSelf: 'center',
              marginHorizontal: 10,
            }}>

              <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ height: '85%', opacity: 0.5, width: 1, backgroundColor: 'silver' }} />
              </View>

              <View style={{ justifyContent: "center", alignItems: "center", height: '33%', flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center', opacity: 0.5, width: '15%', backgroundColor: 'silver', height: 2 }} />
                <View
                  style={{
                    borderColor: '#707070',
                    borderWidth: 2,
                    borderRadius: 20,
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    alignSelf: 'center',
                    marginHorizontal: 10,
                    width: "57%",
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}>
                    <Text
                      style={{
                        fontSize: hp('2%'),
                        color: '#EBDCDC',
                        fontFamily: "OpenSans-Bold",
                      }}>
                      WINDSPEED
                    </Text>
                    <Text
                      style={{
                        fontSize: hp('2%'),
                        color: '#EBDCDC',
                        fontFamily: "OpenSans-Bold",
                        marginLeft: 30,
                      }}>
                      kn
                    </Text>
                  </View>
                  <WendSpeed size data="WeatherSpeed" />

                </View>
                <View style={{ alignSelf: 'center', opacity: 0.5, width: '15%', backgroundColor: 'silver', height: 2 }} />
              </View>
              <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ height: '85%', opacity: 0.5, width: 1, backgroundColor: 'silver' }} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 20,
                marginLeft: 20,
                marginTop: 10,
                borderColor: '#707070',
                borderWidth: 2,
                alignSelf: 'center',
                borderRadius: 20,
              }}>
              <View
                style={{
                  width: '30%',
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  marginHorizontal: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      fontFamily: "OpenSans-Bold",
                    }}>
                    AIR TEMP
                  </Text>
                  <Text
                    style={{
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      fontFamily: "OpenSans-Bold",
                      marginLeft: 30,
                    }}>
                    °C
                  </Text>
                </View>

                <WendSpeed data='AirTemp' />
              </View>

              <View
                style={{
                  borderColor: '#707070',
                  borderWidth: 1,
                  marginVertical: 20,
                }}
              />

              <View
                style={{
                  width: '30%',
                  paddingHorizontal: 20,
                  padding: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Text
                    style={{
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      fontFamily: "OpenSans-Bold",
                    }}>
                    HUMIDITY
                  </Text>
                  <Text
                    style={{
                      fontSize: hp('2%'),
                      color: '#AAAAAA',
                      fontFamily: "OpenSans-Bold",
                      marginLeft: 50,
                    }}>
                    %
                  </Text>
                </View>

                <WendSpeed data='Humidity' />
              </View>
            </View>

            <View
              style={{
                width: '35%',
                borderColor: '#707070',
                borderWidth: 2,
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 5,
                alignSelf: 'center',
                marginHorizontal: 10,
                marginTop: 20,
                bottom: -10
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text
                  style={{
                    fontSize: hp('2%'),
                    color: '#AAAAAA',
                    fontFamily: "OpenSans-Bold",
                  }}>
                  AIR PRESSURE
                </Text>
                <Text
                  style={{
                    fontSize: hp('2%'),
                    color: '#AAAAAA',
                    fontFamily: "OpenSans-Bold",
                    marginLeft: 30,
                  }}>
                  hPa
                </Text>
              </View>

              <WendSpeed data="AirPressure" />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const mapStateToProps = ({ }) => ({

});

export default connect(mapStateToProps, {

})(MainScr);

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
  },
  text: {
    color: '#AAAAAA',
    fontFamily: "OpenSans-Bold",
  },
});

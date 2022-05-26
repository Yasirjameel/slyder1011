import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import CustomSwitch from '../../../../Component/CustomeSwitch';
import NeumorphismButton from '../../../../Component/NeumorphismsButton';
import NumberMeter from '../../../../Component/NumberMeter';
import Resetbtn from '../../../../Component/Resetbtn';

export default function LeftSideMenu(props) {
  const [first, setfirst] = React.useState(true);

  const click = () => {
    setfirst(!first);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View
          style={{
            justifyContent: 'space-evenly',
          }}>
          <View style={{ alignItems: 'center', bottom: 120,marginTop:70 }}>
            <CustomSwitch />

            <Text
              style={{
                ...styles.text,
                fontSize: hp('2%'),
                marginVertical: 20,
              }}>
              nav equipment
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              top: 80
            }}>
            <NeumorphismButton onpress={click} circlebutton>
              {first ? (
                <View
                  style={{
                    borderWidth: 5,
                    width: 30,
                    backgroundColor: '#B1FF00',
                    borderColor: '#B1FF00',
                  }}
                />
              ) : (
                <View
                  style={{
                    borderWidth: 5,
                    width: 30,
                    backgroundColor: '#AAAAAA',
                    borderColor: '#AAAAAA',
                  }}
                />
              )}
            </NeumorphismButton>

            <Text
              style={{
                ...styles.text,
                fontSize: hp('2%'),
                marginVertical: 10,
                
              }}>
              hydro gen bb
            </Text>
            <NumberMeter number={'1.2'} skill="kw" width={50} />
          </View>
        </View>

        <View
          style={{
            marginLeft: 40,
            justifyContent: 'space-evenly',
            width: wp('13%'), // 80% of width device screen
          }}>
          <View
            style={{
              alignItems: 'center',
              borderColor: '#707070',
              borderWidth: 2,
              borderRadius: 30,
              marginVertical: 15,
            }}>
            <View
              style={{
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                marginTop: 10,
                width: wp('10%'), // 80% of width device screen
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    ...styles.text,
                    top: 2,
                    fontSize: hp('1.8%'),
                  }}>
                  SPEED
                </Text>
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>kn</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  fontFamily: "DINAlternate-Bold",
                  textAlign: 'center',
                  fontSize: hp('7%'),
                  marginTop: -20,
                }}>
                {props.speedvalue}
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                width: wp('10%'), // 80% of width device screen
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ ...styles.text, fontSize: hp('2%'), top: 2 }}>AWA</Text>
                <Text style={{ ...styles.text, fontSize: hp('2%'), top: 2 }}>{'°'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  fontFamily: "DINAlternate-Bold",
                  marginTop: -20,
                  fontSize: hp('7%'),
                }}>
                {props.awa}
              </Text>
            </View>

            <View
              style={{
                width: wp('10%'), // 80% of width device screen
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ ...styles.text, fontSize: hp('2%'), top: 2 }}>AWS</Text>
                <Text style={{ ...styles.text, fontSize: hp('2%'), top: 2 }}>{'kn'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -20,
                  fontFamily: "DINAlternate-Bold",
                  fontSize: hp('7%'),
                }}>
                {props.AWAKn}
              </Text>
            </View>
          </View>

          <View
            style={{
              borderColor: '#707070',
              borderWidth: 2,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <Resetbtn reset1 style={{bottom:10}}>
              <Text
                style={{
                  ...styles.restButn,
                }}>
                reset
              </Text>
            </Resetbtn>

            <Resetbtn reset2 style={{bottom:30}}>
              <Text
                style={{
                  ...styles.restButn,
                }}>
                reset
              </Text>
            </Resetbtn>

            <View
              style={{
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                marginTop: 10,
                width: wp('10%'), // 80% of width device screen
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>LOG 1</Text>
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>{'nm'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -20,
                  fontFamily: "DINAlternate-Bold",
                  fontSize: hp('7%'),
                }}>
                {props.LOG1}
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                width: wp('10%'), // 80% of width device screen
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>LOG 2</Text>
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>{'nm'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -20,
                  fontSize: hp('7%'),
                  fontFamily: "DINAlternate-Bold",
                }}>
                {props.LOG2}
              </Text>
            </View>

            <View
              style={{
                padding: 5,
                width: wp('10%'), // 80% of width device screen
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ ...styles.text, fontSize: hp('1.8%') }}>time</Text>
                <Text style={{ ...styles.text, fontSize: hp('1.8%') }}>
                  {'local'}
                </Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  marginTop: -10,
                  marginBottom: 5,
                  textAlign: 'center',
                  fontFamily: "DINAlternate-Bold",
                  fontSize: hp('4.8%'),
                }}>
                {props.date}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#AAAAAA',
    fontFamily: "OpenSans-Bold",
  },
  NeomorphParentView: {
    borderRadius: 60,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  restButn: {
    fontSize: 15,
    color: '#AAAAAA',
    fontFamily: "OpenSans-Bold",
  },
});

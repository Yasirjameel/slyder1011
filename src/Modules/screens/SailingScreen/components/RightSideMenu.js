import React from 'react';
import {
  LogBox, StyleSheet,
  Text, View
} from 'react-native';
import {
  heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import CustomSwitch from '../../../../Component/CustomeSwitch';
import NeumorphismButton from '../../../../Component/NeumorphismsButton';
import NumberMeter from '../../../../Component/NumberMeter';
import SogData from './SogData';

LogBox.ignoreAllLogs();
export default function RightSideMenu(props) {
  const [first, setfirst] = React.useState(true);

  const onSelectSwitch = index => {
    console.log('Selected index: ' + index);
  };

  const onSelectSwitchBelow = index => {
    console.log('Selected index: ' + index);
  };

  const click = () => {
    setfirst(!first);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View
          style={{
            justifyContent: 'space-evenly',
            width: wp('13%'),
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
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>SOG</Text>
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>{'kn'}</Text>
              </View>
              <SogData data='Sog' />
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
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>TWA</Text>
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>{'°'}</Text>
              </View>
              <SogData data='Twa' />
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
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>TWS</Text>
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>{'kn'}</Text>
              </View>
              <SogData data='Tws' />
            </View>
          </View>

          <View
            style={{
              borderColor: '#707070',
              borderWidth: 2,
              borderRadius: 30,
              alignItems: 'center',
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
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>DTW</Text>
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
                {props.dtw}
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
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>TTW</Text>
                <Text style={{ ...styles.text, fontSize: hp('2%') }}>
                  {'hrs'}
                </Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -18,
                  fontSize: hp('7%'),
                  fontFamily: "DINAlternate-Bold",
                }}>
                {props.TTS}
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
                <Text style={{ ...styles.text, fontSize: hp('2.3%') }}>ETA</Text>
                <Text style={{ ...styles.text, fontSize: hp('2.3%') }}>
                  {'24h'}
                </Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -20,
                  fontSize: hp('7%'), fontFamily: "DINAlternate-Bold",
                }}>
                {props.ETA}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-around',
            marginLeft: 35,
          }}>
          <View style={{ alignItems: 'flex-end', marginTop: -20 }}>
            <NeumorphismButton nopress MOB>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 18,
                }}>
                MOB
              </Text>
            </NeumorphismButton>

            <View style={{ marginTop: 40 }}>
              <CustomSwitch
                selectionMode={2}
                roundCorner={true}
                option1={'ON'}
                option2={'OFF'}
                onSelectSwitch={onSelectSwitch}
                selectionColor={'#000000CB'}
              />

              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  fontSize: hp('2%'), marginTop: 20,
                  marginBottom: 40
                }}>
                winches
              </Text>
            </View>

            <View>
              <CustomSwitch
                selectionMode={2}
                roundCorner={true}
                option1={'ON'}
                option2={'OFF'}
                onSelectSwitch={onSelectSwitchBelow}
                selectionColor={'#000000CB'}
              />

              <Text
                style={{
                  ...styles.text,
                  fontSize: hp('2%'),
                  textAlign: 'center',
                  marginVertical: 20,
                }}>
                windlass
              </Text>
            </View>
          </View>

          <View style={{ alignItems: 'center', top: -10 }}>
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
            <Text style={{ ...styles.text, fontSize: hp('2%'), marginVertical: 10,bottom:8 }}>
              hydro gen std
            </Text>
            <NumberMeter number={'0.9'} skill="kw" width={50} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5.5%',
  },
  text: {
    color: '#AAAAAA',
    fontFamily: "OpenSans-Bold",
  },
});

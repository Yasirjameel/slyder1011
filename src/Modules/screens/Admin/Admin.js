import React from 'react';
import { Dimensions, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import NeumorphismButton from '../../../Component/neumorphism-button';

function Admin(props) {
  return (
    <LinearGradient colors={['#0F0F0F', '#3E4345', '#202427']}>
      <View style={{ height: '100%' }}>
        <StatusBar hidden />
        <View
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            top: 30,
            right: 50,
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
                fontFamily: "OpenSans-Bold", fontSize: hp('2.8%'),
              }}>
              MOB
            </Text>
          </NeumorphismButton>
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 80,
            flex: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '14%',
              borderWidth: 4,
              borderColor: 'white',
              height: Dimensions.get('screen').width / 24,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('2.8%'),
                color: 'white',
                fontFamily: "OpenSans-ExtraBold",
              }}>
              VERSION
            </Text>
          </View>
          <View
            style={{
              width: '14%',
              borderWidth: 4,
              borderColor: 'white',
              height: Dimensions.get('screen').width / 24,
              borderRadius: 50,
              marginTop: '2%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('2.8%'),
                color: 'white',
                fontFamily: "OpenSans-ExtraBold",
              }}>
              Passwort
            </Text>
          </View>
          <View
            style={{
              width: '14%',
              borderWidth: 4,
              borderColor: 'white',
              height: Dimensions.get('screen').width / 24,
              borderRadius: 50,
              marginTop: '2%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('2.8%'),
                color: 'white',
                fontFamily: "OpenSans-ExtraBold",
              }}>
              TIMEZONE
            </Text>
          </View>
          <View
            style={{
              width: '14%',
              borderWidth: 4,
              borderColor: 'white',
              height: Dimensions.get('screen').width / 24,
              borderRadius: 50,
              marginTop: '2%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('2.8%'),
                color: 'white',
                fontFamily: "OpenSans-ExtraBold",
              }}>
              LANGUAGE
            </Text>
          </View>
          <View
            style={{
              width: '14%',
              borderWidth: 4,
              borderColor: 'white',
              height: Dimensions.get('screen').width / 24,
              borderRadius: 50,
              marginTop: '2%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('2.8%'),
                color: 'white',
                fontFamily: "OpenSans-ExtraBold",
              }}>
              Log Daten
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('settingscreen')}
            activeOpacity={0.7}
            style={{
              width: '14%',
              borderWidth: 4,
              borderColor: 'white',
              height: Dimensions.get('screen').width / 24,
              borderRadius: 50,
              marginTop: '2%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('2.8%'),
                color: 'white',
                fontFamily: "OpenSans-ExtraBold",
              }}>
              Settings
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: '14%',
              borderWidth: 4,
              borderColor: 'white',
              height: Dimensions.get('screen').width / 24,
              borderRadius: 50,
              marginTop: '2%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('2.8%'),
                color: 'white',
                fontFamily: "OpenSans-ExtraBold",
              }}>
              set up
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default Admin;

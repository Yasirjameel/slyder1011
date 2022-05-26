import React from 'react';
import {
  LogBox,
  StatusBar,
  StyleSheet, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import CenteredView from './components/CenteredView';
import LeftSideMenu from './components/LeftSideMenu';
import RightSideMenu from './components/RightSideMenu';

LogBox.ignoreAllLogs();

export default function App() {
  const [speedValue, setSpeedValue] = React.useState('9.5');
  const [AWA, setAWAValue] = React.useState('-151');
  const [AWAKn, setAWAKNValue] = React.useState('18.6');
  const [LOG1, setLOG1Value] = React.useState('11.5');
  const [LOG2, setLOG2Value] = React.useState('12.2');
  const [date, setDateValue] = React.useState('12:07:03');
  const [hydroGenBB, sethydroGenBB] = React.useState('1.2');

  const [SOG, setSOGValue] = React.useState('9.5');
  const [TWA, setTWAValue] = React.useState('-142');
  const [TWS, setTWSValue] = React.useState('15.5');
  const [DTW, setDTWValue] = React.useState('37.3');
  const [TTS, setTTSValue] = React.useState('04:00');
  const [ETA, setETAValue] = React.useState('16:07');
  const [hydroGenSTD, sethydroGenSTD] = React.useState('0.9');

  const [WT, setWTValue] = React.useState('28.3');
  const [Depth, setDepthValue] = React.useState('36.5');
  const [Coordinates, setCoordinates] = React.useState('N 36°54’51.4’’ | W 006°51’50.0’’');
  const [Degree, setDegree] = React.useState('0deg');

  return (
    <LinearGradient
      colors={['#0F0F0F', '#3E4345', '#202427']}
      style={styles.linearGradient}>
      <StatusBar hidden />
      <View
        style={{
          width: wp('100%'), // 80% of width device screen
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <LeftSideMenu
          hydroGenBB={hydroGenBB}
          speedvalue={speedValue}
          awa={AWA}
          AWAKn={AWAKn}
          LOG1={LOG1}
          LOG2={LOG2}
          date={date}
        />
        <View>
          <CenteredView
            degree={Degree}
            Coordinates={Coordinates}
            wt={WT}
            Depth={Depth}
          />
        </View>
        <RightSideMenu
          sog={SOG}
          twa={TWA}
          tws={TWS}
          dtw={DTW}
          TTS={TTS}
          ETA={ETA}
          hydroGenSTD={hydroGenSTD}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 50,
    borderRadius: 5,
    paddingTop: 30,
  },
});

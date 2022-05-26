import PropTypes from 'prop-types';
import * as React from 'react';
import { useCallback, useState } from 'react';
import {
  Dimensions, StyleSheet, TouchableWithoutFeedback, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const NeumorphismButton = props => {
  const { size = Dimensions.get('screen').height / 100 } = props;
  const [isDown, setDown] = useState(false);
  const handlePressIn = useCallback(() => {
    setDown(true);
  }, [setDown]);
  const handlePressOut = useCallback(() => {
    setDown(false);
  }, [setDown]);

  const gradColors = isDown ? ['#000000', '#616161'] : ['#414141', '#000000'];
  const gradColorsCircle = isDown
    ? ['#000000', '#616161']
    : ['#515151', '#191919'];

  const buttonCommonStyle = {
    borderRadius: size,
    shadowRadius: size * 1.5,
  };
  const buttonOuterStyle = {
    shadowOffset: { width: size, height: size },
    marginTop: props.circlebutton ? size : null,
    marginBottom: props.circlebutton ? size : null,
    marginLeft: props.circlebutton ? size : null,
  };
  const buttonInnerStyle = {
    shadowOffset: { width: -size, height: -size },
  };
  const buttonFaceStyle = {
    borderRadius: size * 2.5,
    paddingHorizontal: props.circlebutton ? size * 1.2 : (size * 5) / 1.8,
    paddingVertical: props.circlebutton
      ? props.rc
        ? 7
        : props.plus
          ? 2
          : size * 1.6
      : (size * 7) / 2,
  };

  return (
    props.rc ?
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate('System')}
      >
        <View
          style={[
            styles.buttonOuter,
            buttonCommonStyle,
            buttonOuterStyle,
            {
              backgroundColor: props.MOB ? '#640D02' : '#292929',
              borderRadius: props.circlebutton ? 50 : 30,
              padding: props.circlebutton
                ? Dimensions.get('screen').width / 200
                : 5,
            },
          ]}>
          <View style={[styles.buttonInner, buttonCommonStyle, buttonInnerStyle]}>
            <LinearGradient
              colors={props.circlebutton ? gradColorsCircle : gradColors}
              useAngle={true}
              angle={145}
              angleCenter={{ x: 0.7, y: 0.5 }}
              style={[styles.buttonFace, buttonFaceStyle, props.style]}>
              {props.children}
            </LinearGradient>
          </View>
        </View>
      </TouchableWithoutFeedback>
      :
      <TouchableWithoutFeedback
        onPress={props.onpress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <View
          style={[
            styles.buttonOuter,
            buttonCommonStyle,
            buttonOuterStyle,
            {
              backgroundColor: props.MOB ? '#640D02' : '#292929',
              borderRadius: props.circlebutton ? 50 : 30,
              padding: props.circlebutton
                ? Dimensions.get('screen').width / 200
                : 5,
            },
          ]}>
          <View style={[styles.buttonInner, buttonCommonStyle, buttonInnerStyle]}>
            <LinearGradient
              colors={props.circlebutton ? gradColorsCircle : gradColors}
              useAngle={true}
              angle={145}
              angleCenter={{ x: 0.7, y: 0.5 }}
              style={[styles.buttonFace, buttonFaceStyle, props.style]}>
              {props.children}
            </LinearGradient>
          </View>
        </View>
      </TouchableWithoutFeedback>
  );
};

NeumorphismButton.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  size: PropTypes.number,
};

const styles = StyleSheet.create({
  buttonOuter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    shadowOffset: { width: 12, height: 12 },
    shadowColor: '#606060',
    shadowOpacity: 1.0,
    shadowRadius: 18,
    margin: 5,
    elevation: 5,
  },
  buttonInner: {
    borderRadius: 30,
    shadowOffset: { width: -12, height: -12 },
    shadowColor: 'red',
    shadowOpacity: 1.0,
    shadowRadius: 18,
  },
  buttonFace: {
    borderRadius: 30,
    padding: 12,
  },
});

export default NeumorphismButton;

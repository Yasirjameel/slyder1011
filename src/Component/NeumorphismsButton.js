import PropTypes from 'prop-types';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const NeumorphismButton = props => {
  const { size = 12 } = props;
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
    : ['#616161', '#191919'];

  const buttonCommonStyle = {
    borderRadius: size,
    shadowRadius: size * 1.5,
  };
  const buttonOuterStyle = {
    shadowOffset: { width: size, height: size },
    marginTop: props.circlebutton ? size : null,
    marginBottom: props.circlebutton ? size : null,
  };
  const buttonInnerStyle = {
    shadowOffset: { width: -size, height: -size },
  };
  const buttonFaceStyle = {
    borderRadius: props.circlebutton ? size * 5 : size * 2.5,
    paddingHorizontal: props.circlebutton ? size * 0.7 : (size * 5) / 1.8,
    paddingVertical: props.circlebutton ? size * 1.4 : (size * 7) / 2,
  };

  return (
    <TouchableWithoutFeedback
      onPress={props.nopress ? console.log('') : () => props.onpress()}
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
            marginBottom: props.MOB ? 50 : 8,
            padding: props.circlebutton ? 10 : 5,
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
    shadowColor: '#ffffff',
    shadowOpacity: 1.0,
    shadowRadius: 18,
    margin: 5,
  },
  buttonInner: {
    borderRadius: 30,
    shadowOffset: { width: -12, height: -12 },
    shadowColor: '#ffffff',
    shadowOpacity: 1.0,
    shadowRadius: 18,
  },
  buttonFace: {
    borderRadius: 30,
    padding: 12,
  },
});

export default NeumorphismButton;

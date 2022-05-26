import PropTypes from 'prop-types';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const NeumorphismButton = props => {
  const {size = 12} = props;
  const [isDown, setDown] = useState(false);
  const handlePressIn = useCallback(() => {
    setDown(true);
  }, [setDown]);
  const handlePressOut = useCallback(() => {
    setDown(false);
  }, [setDown]);

  const gradColors = isDown ? ['#000000', '#616161'] : ['#414141', '#000000'];
  const buttonCommonStyle = {
    borderRadius: size,
    shadowRadius: size * 1.5,
  };
  const buttonOuterStyle = {
    shadowOffset: {width: size, height: size},
    marginTop: size,
    marginBottom: size,
  };
  const buttonInnerStyle = {
    shadowOffset: {width: -size, height: -size},
  };
  const buttonFaceStyle = {
    borderRadius: size,
    padding: size,
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <View  style={[styles.buttonOuter, buttonCommonStyle, buttonOuterStyle]}>
        <View  style={[styles.buttonInner, buttonCommonStyle, buttonInnerStyle]}>
          <LinearGradient
            colors={gradColors}
            useAngle={true}
            angle={145}
            angleCenter={{x: 0.5, y: 0.5}}
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
    borderRadius: 30,
    shadowOffset: {width: 12, height: 12},
    shadowColor: '#ffffff',
    shadowOpacity: 1.0,
    shadowRadius: 18,
    marginTop: 12,
    padding:1.8,
    marginBottom: 12,
  },
  buttonInner: {
    borderRadius: 30,
    shadowOffset: {width: -12, height: -12},
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
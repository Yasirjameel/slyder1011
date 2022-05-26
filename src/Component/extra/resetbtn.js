import PropTypes from 'prop-types';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Resetbtn = props => {
  const { size = 12 } = props;
  const [isDown, setDown] = useState(false);
  const handlePressIn = useCallback(() => {
    setDown(true);
  }, [setDown]);
  const handlePressOut = useCallback(() => {
    setDown(false);
  }, [setDown]);

  const gradColors = isDown ? ['#616161', '#616161'] : ['#616161', '#000000'];
  const buttonCommonStyle = {
    borderRadius: size,
    shadowRadius: size * 1.5,
  };
  const buttonOuterStyle = {
    shadowOffset: { width: size, height: size },
    marginTop: size,
    marginBottom: size,
  };
  const buttonInnerStyle = {
    shadowOffset: { width: -size, height: -size },
  };
  const buttonFaceStyle = {
    borderRadius: size,
    padding: size,
  };

  return (

    <View style={[styles.buttonOuter, buttonCommonStyle, buttonOuterStyle]}>
      <View style={[styles.buttonInner, buttonCommonStyle, buttonInnerStyle]}>
        <LinearGradient
          colors={gradColors}
          useAngle={true}
          angle={145}
          angleCenter={{ x: 0.5, y: 0.5 }}
          style={[styles.buttonFace, buttonFaceStyle, props.style]}>
          {props.children}
        </LinearGradient>
      </View>
    </View>

  );
};

Resetbtn.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  size: PropTypes.number,
};

const styles = StyleSheet.create({
  buttonOuter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 30,
    shadowOffset: { width: 12, height: 12 },
    shadowColor: '#ffffff',
    shadowOpacity: 1.0,
    shadowRadius: 18,
    marginTop: 10,
    padding: 1.8,
    marginBottom: 12,
  },
  buttonInner: {
    borderRadius: 30,
    shadowOffset: { width: -12, height: -12 },
    shadowColor: '#8b0000',
    shadowOpacity: 1.0,
    shadowRadius: 18,
  },
  buttonFace: {
    borderRadius: 30,
    padding: 12,
  },
});

export default Resetbtn;
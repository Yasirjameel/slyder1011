import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
function RotateImage(props) {
    return (
        <Image
            source={require('../../../../../images/circleRound.png')}
            style={{
                transform: [{ rotate: `${'0'}deg` }],
                alignSelf: 'center',
                marginVertical: 30,
                height: Dimensions.get('window').height / 2.5,
                width: Dimensions.get('window').height / 2.5,
            }}
        />
    )
}

const mapStateToProps = (state, ownProps) => ({
    Weather: state.Weather,
   
});

export default connect(mapStateToProps, {

})(RotateImage);

const styles = StyleSheet.create({})
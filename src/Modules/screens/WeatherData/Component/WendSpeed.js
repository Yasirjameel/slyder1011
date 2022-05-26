import React from "react";
import { Text } from 'react-native';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';


function WendSpeed(props) {
    // console.log("wend speed")
    return (
        <Text
            style={{
                textAlign: 'center',
                marginLeft: 20,
                marginTop: -15,
                fontSize: props?.size ? hp('6%') : hp('8%'),
                color: '#EBDCDC',
                fontFamily: "DINAlternate-Bold",
            }}>
            {/* {store.getState().Weather.Weather} */}
            {props?.data == 'WeatherSpeed' ? props?.Weather?.WeatherSpeed :
                props?.data == "AirTemp" ? props?.Weather?.AirTemp :
                    props?.data == "Humidity" ? props?.Weather?.Humidity :
                        props?.data == "AirPressure" ? props?.Weather?.AirPressure : '0'
            }
        </Text>

    )
}
const mapStateToProps = (state, ownProps) => ({
    Weather: state.Weather,
    data: ownProps.data
});

export default connect(mapStateToProps, {

})(WendSpeed);
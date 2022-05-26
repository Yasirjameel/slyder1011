import React from "react";
import { connect } from 'react-redux';
import NumberMeter from "../../../../Component/NumberMeter";


function WendSpeed(props) {
    var hour = parseInt(props?.Weather?.TimeHour / 3600)
    console.log(hour)
    return (
        // <NumberMeter number={hour.toString().substring(0,3)} skill="h" width={50} />
        <NumberMeter number={'48'} skill="h" width={50} />
    )
}
const mapStateToProps = (state, ownProps) => ({
    Weather: state.Weather,
    data: ownProps.data
});

export default connect(mapStateToProps, {

})(WendSpeed);
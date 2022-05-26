import {
    CHANGE_WINDSPEED
} from '../Actions/type'

const initialState = {
    WeatherSpeed: '23,5',
    AirTemp: '28,6',
    Humidity: '80,4',
    AirPressure: '1015,7',
    WindAngle:'23,5',
    TimeHour:48
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_WINDSPEED:
            return {
                ...state,
                WeatherSpeed: payload.WeatherSpeed,
                AirTemp: payload.AirTemp,
                Humidity: payload.Humidity,
                AirPressure: payload.AirPressure,
                WindAngle:payload.WindAngle,
                TimeHour:payload.TimeHour,
              
            };
        default:
            return state;
    }
};
import { combineReducers } from 'redux';
import SailingReducer from './SailingReducer';
import UnderEngineReducer from './UnderEngineReducer';
import WeatherReducer from './WeatherReducer';

export default combineReducers({
    UnderEngine:UnderEngineReducer,
    Weather:WeatherReducer,
    Sailing:SailingReducer
});

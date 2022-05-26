import {
    CHANGE_SAILING
} from '../Actions/type';

const initialState = {
    Sog: 9.5,
    Twa: -142,
    Tws: 15.5
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_SAILING:
            return {
                ...state,
                Sog: payload.Sog,
                Twa: payload.Twa,
                Tws: payload.Tws,
            };
        default:
            return state;
    }
};
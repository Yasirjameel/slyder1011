
const initialState = {
    weatherSpeed: 28.3

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        // case CHANGE_WINDSPEED:
        //     return {
        //         ...state,
        //         weatherSpeed: payload,
        //     };
        default:
            return state;
    }
};
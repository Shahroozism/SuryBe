import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "/Users/user/revents3/src/features/TestArea/TestConstants.jsx";
import { createReducer } from "../../app/common/util/reducerUtils";


const initialState = {
    data: 42,
    loading: false
};

export const incrementCounter = (state) => {
    return {...state, data: state.data + 1 };

}

export const decrementCounter = (state) => {
    return {...state, data: state.data - 1 };

}

export default createReducer(initialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter
})
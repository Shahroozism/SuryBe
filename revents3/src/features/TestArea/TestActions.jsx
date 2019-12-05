import { INCREMENT_COUNTER, DECREMENT_COUNTER} from "/Users/user/revents3/src/features/TestArea/TestConstants.jsx";
import { ASYNC_ACTION_START } from "../async/asyncConstants";
import { asyncActionStart, asyncActionFinish } from "../async/asyncActions";

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    }
}

const delay = (ms) => { 
    return new Promise(resolve => setTimeout(resolve,ms))
}

export const incrementAsync = (name) => {
    return async dispatch => {
        dispatch ({type:ASYNC_ACTION_START, payload: name })
        await delay(1000)
        dispatch (incrementCounter())
        dispatch (asyncActionFinish())
    }
}

export const decrementAsync = (name) => {
    return async dispatch => {
        dispatch ({type:ASYNC_ACTION_START, payload:name})
        await delay(1000)
        dispatch ({type: DECREMENT_COUNTER})
        dispatch (asyncActionFinish())
    }
}
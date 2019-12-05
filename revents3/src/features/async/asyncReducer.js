import { createReducer } from '/Users/user/revents3/src/app/common/util/reducerUtils.js';
import { ASYNC_ACTION_ERROR, ASYNC_ACTION_START, ASYNC_ACTION_FINISH } from './asyncConstants';

const initialState = {
    loading: false,
    elementName: null
}

const asyncActionsStarted = (state, payload) => {
    return {
        ...state,
        loading: true,
        elementName: payload
    }
}

const asyncActionsFinished = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null
    }
}

const asyncActionsError = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null
    }
}

export default createReducer(initialState, {
    [ASYNC_ACTION_START]: asyncActionsStarted,
    [ASYNC_ACTION_FINISH]: asyncActionsFinished,
    [ASYNC_ACTION_ERROR]: asyncActionsError
})
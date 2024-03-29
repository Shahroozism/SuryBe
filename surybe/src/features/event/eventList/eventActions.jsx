import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from "../eventConstants";
import { fetchSampleData } from "../../../app/data/mockApi";
import { asyncActionError } from "../../async/asyncActions";
import { toastr } from 'react-redux-toastr';
import {asyncActionStart, asyncActionFinish} from "/Users/user/revents3/src/features/async/asyncActions.js";

export const createEvent = event => {
    return async dispatch => {
        try {
dispatch ({
    type: CREATE_EVENT,
    payload: {
        event
    }
})
toastr.success('Success!', 'Event has been created');
        } catch (error) {
toastr.error('Oops','Something went wrong');
        }
    };
};

export const updateEvent = event => {
    return async dispatch => {
        try {
dispatch ({
    type: UPDATE_EVENT,
    payload: {
        event
    }
});
toastr.success('Success!', 'Event has been updated');
        } catch (error) {
toastr.error('Oops','Something went wrong');
        }
    };
};



export const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        payload: {
            eventId
        }
    }
}

export const loadEvents = () => {
    return async dispatch => {
        try { 
            dispatch (asyncActionStart())
            const events = await fetchSampleData();
            dispatch({type: FETCH_EVENTS, payload: {events}})
            dispatch(asyncActionFinish())
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError())

        }
    }
}

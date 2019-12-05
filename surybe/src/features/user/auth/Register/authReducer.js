import { createReducer } from '/Users/user/revents3/src/app/common/util/reducerUtils';
import { LOGIN_USER, SIGN_OUT_USER } from '/Users/user/revents3/src/features/user/auth/authConstants';


const initialState = {
    authenticated: false,
    currentUser: null
}

const loginUser = (_state, payload) => {
    return {
        authenticated: true,
        currentUser: payload.creds.email
    }
}

const signOutUser = () => {
    return {
        authenticated: false,
        currentUser: null
    }
}

export default createReducer(initialState, {
    [LOGIN_USER]: loginUser,
    [SIGN_OUT_USER]: signOutUser

})
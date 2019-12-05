import { LOGIN_USER, SIGN_OUT_USER } from "./authConstants";
import { closeModal } from "../../modals/modalActions";

export const login = creds => {
    return dipatch => {
        this.props.dispatch({
        type: LOGIN_USER,
        payload: {
            creds
        }
    });
    this.props.dispatch(closeModal())
};
};

export const logout = () => {
    return { 
        type: SIGN_OUT_USER
    };
};
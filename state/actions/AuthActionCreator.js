import { ACTIONS } from "../constants/AuthActionConstants";


export const authenticateAction = (user) => {
   return {
       type: ACTIONS.AUTHENTICATE,
       payload: user
   };
};


export const deAuthenticateAction = () => {
   return {
       type: ACTIONS.DEAUTHENTICATE,
   };
};


export const restoreState = (authState) => {
    return {
        type: ACTIONS.RESTORE_AUTH_STATE,
        payload: authState
    }
};


export const login = loginDetails => {
   return async dispatch => {
       try{
           dispatch(deAuthenticateAction());
           // login code. And storing data in result variable
           dispatch(authenticateAction(result));


       }catch (e) {
           dispatch(deAuthenticateAction());
       }
   };
};


export const signUp = signUpDetails => {
   return async dispatch => {
       try{
           dispatch(deAuthenticateAction());
           // Signup code. And storing data in result variable
           dispatch(authenticateAction(result));


       }catch (e) {
           dispatch(deAuthenticateAction());
       }
   };
};


export const logout = () => {
   return async dispatch => {
       dispatch(deAuthenticateAction())
   }
};


export const restore = (savedState) => {
   return dispatch => {
       dispatch(restoreState(savedState));
   };
};
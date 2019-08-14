export const Types = {
  LOGIN_REQUEST: 'userLogin/LOGIN_REQUEST',
  LOGIN_ERROR: 'userLogin/LOGIN_ERROR',
  LOGIN_RESET: 'userLogin/LOGIN_RESET',
  LOGIN_SUCCESS: 'userLogin/LOGIN_SUCCESS',
};


const INITIAL_VALUES = {
  error: false,
  errorMessage: '',
  success: false,
};

export default function userLogin(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case Types.LOGIN_ERROR:
      return { error: true, errorMessage: action.payload, success: false };
    case Types.LOGIN_RESET:
      return { error: false, errorMessage: '', success: false };
    case Types.LOGIN_SUCCESS:
      return { error: false, errorMessage: '', success: true };
    default:
      return state;
  }
}


export const Creators = {
  handleLoginSuccess: () => ({
    type: Types.LOGIN_SUCCESS,
  }),
  handleLoginError: error => ({
    type: Types.LOGIN_ERROR,
    payload: error,
  }),
  resetState: () => ({
    type: Types.LOGIN_RESET,
  }),
};

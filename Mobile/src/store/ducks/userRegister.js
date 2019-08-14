export const Types = {
  REGISTER_REQUEST: 'userRegister/REGISTER_REQUEST',
  REGISTER_ERROR: 'userRegister/REGISTER_ERROR',
  REGISTER_RESET: 'userRegister/REGISTER_RESET',
  REGISTER_SUCCESS: 'userRegister/REGISTER_SUCCESS',
  REGISTER_SPIN: 'userRegister/REGISTER_SPIN',
};

const INITIAL_VALUES = {
  spin: false,
  success: false,
  error: false,
  errorMessage: '',
};

export default function userRegister(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case Types.REGISTER_ERROR:
      return { error: true, errorMessage: action.payload, success: false };
    case Types.REGISTER_RESET:
      return { error: false, errorMessage: '', success: false };
    case Types.REGISTER_SUCCESS:
      return { error: false, errorMessage: '', success: true };
    case Types.REGISTER_SPIN:
      return { ...state, spin: false };
    default:
      return state;
  }
}

export const Creators = {
  handleRegisterError: error => ({
    type: Types.REGISTER_ERROR,
    payload: error,
  }),
  resetState: () => ({
    type: Types.REGISTER_RESET,
  }),
  handleRegisterSuccess: () => ({
    type: Types.REGISTER_SUCCESS,
  }),
  spin: () => ({
    type: Types.REGISTER_SPIN,
  }),
};

import { ISignupState } from '../../interfaces/reduxStores';
import { UPDATE_FIELD, UPDATE_ERRORS, SET_ACCESS_TOKEN } from '../../helpers/constants'; // Add SET_ACCESS_TOKEN action type

const initialState: ISignupState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  },
  accessToken: null, // Initialize the access token as null
};

const signupReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: null,
        },
      };
    case UPDATE_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
};

export default signupReducer;

import { ISignupState } from '../../interfaces/reduxStores';
import { UPDATE_FIELD, UPDATE_ERRORS } from '../../helpers/constants';

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
};

const signupReducer = (state = initialState, action: any) => {
  console.log(state, action)
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
    default:
      return state;
  }
};

export default signupReducer;

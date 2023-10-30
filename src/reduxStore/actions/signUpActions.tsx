import { UPDATE_FIELD, UPDATE_ERRORS, SET_ACCESS_TOKEN, REMOVE_ACCESS_TOKEN } from '../../helpers/constants';

export const updateField = (field: string, value: string) => {
  console.log({
    field,
    value
  })
  return {
    type: UPDATE_FIELD,
    field,
    value,
  };
};

export const updateErrors = (errors: { [key: string]: string | null }) => {
  return {
    type: UPDATE_ERRORS,
    errors,
  };
};

export const setAccessToken = (accessToken: string) => ({
  type: SET_ACCESS_TOKEN,
  accessToken,
});

export const clearAccessToken = () => ({
  type: REMOVE_ACCESS_TOKEN,
});
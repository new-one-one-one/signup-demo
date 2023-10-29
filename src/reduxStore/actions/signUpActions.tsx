import { UPDATE_FIELD, UPDATE_ERRORS } from '../../helpers/constants';

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

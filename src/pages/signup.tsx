import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ALIGNMENT_TYPE } from '../interfaces/components';
import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '../helpers/validations';
import { updateErrors, updateField } from '../reduxStore/actions/signUpActions';
import LabelWithValue from '../components/LabelWithValue';

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state: any) => {
    return state
  });

  const handleInputChange = (field: string, value: string) => {
    dispatch(updateField(field, value));
  };

  const handleValidation = () => {
    const newErrors: { [key: string]: string | null } = {};
    newErrors.username = validateUsername(currentState?.username);
    newErrors.email = validateEmail(currentState && currentState?.email);
    newErrors.password = validatePassword(currentState && currentState?.password);
    newErrors.confirmPassword = validateConfirmPassword(
      currentState && currentState?.password,
      currentState && currentState?.confirmPassword
    );
    dispatch(updateErrors(newErrors));
  };

  const handleSubmit = () => {

  };

  return (
    <div>
      <LabelWithValue
        label="Username"
        alignment={ALIGNMENT_TYPE.VERTICAL}
        separator=":"
        valueComponent={
          <input
            type="text"
            value={currentState && currentState?.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
          />
        }
        errorMessage={currentState && currentState?.errors.username}
        isRequired
      />

      <LabelWithValue
        label="Email"
        alignment={ALIGNMENT_TYPE.VERTICAL}
        separator=":"
        valueComponent={
          <input
            type="text"
            value={currentState && currentState.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        }
        errorMessage={currentState && currentState.errors.email}
        isRequired
      />

      <LabelWithValue
        label="Password"
        alignment={ALIGNMENT_TYPE.VERTICAL}
        separator=":"
        valueComponent={
          <input
            type="password"
            value={currentState && currentState.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
        }
        errorMessage={currentState && currentState.errors.password}
        isRequired
      />

      <LabelWithValue
        label="Confirm Password"
        alignment={ALIGNMENT_TYPE.VERTICAL}
        separator=":"
        valueComponent={
          <input
            type="password"
            value={currentState && currentState.confirmPassword}
            onChange={(e) =>
              handleInputChange('confirmPassword', e.target.value)
            }
          />
        }
        errorMessage={currentState && currentState.errors.confirmPassword}
        isRequired
      />

      <button onClick={handleValidation}>Validate</button>
      <button onClick={handleSubmit}>Submit</button>
      <button>Clear</button>
    </div>
  );
};

export default Signup;

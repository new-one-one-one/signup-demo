import React from 'react';
import { ALIGNMENT_TYPE, LabelWithValueProps } from '../../interfaces/components';
import "./styles.css";

const LabelWithValue: React.FC<LabelWithValueProps> = ({
  errorMessage,
  label,
  alignment,
  separator,
  valueComponent,
  helperText,
  isRequired=false
}) => {

  return (
    <div className={`custom-input-field ${alignment}`}>
    {alignment === ALIGNMENT_TYPE.HORIZONTAL 
    ? 
    (
      <>
        <label className={errorMessage ? 'error-label' : 'label-text'}>{label + (isRequired ? "*" : "")} {separator}</label>
        &nbsp; &nbsp;
        <div className="input-container">
          {valueComponent}
          {!errorMessage && helperText && <div className="helper-text">{helperText}</div>}
        </div>
      </>
    ) 
    : (
        <>
          <div className="label-container">
            <label className={errorMessage ? 'error-label' : 'label-text'}>{label + (isRequired ? "*" : "")} {separator}</label>
          </div>
          <br/>
          <div className="input-container">
            {valueComponent}
            { !errorMessage && helperText && <div className="helper-text">{helperText}</div>}
          </div>
        </>
    )}
    {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default LabelWithValue;

import React, { useEffect, useState } from 'react';
import { ALIGNMENT_TYPE, ILabelWithValueProps } from '../../interfaces/components';
import "./styles.css";

const LabelWithValue: React.FC<ILabelWithValueProps> = ({
  errorMessage,
  label,
  alignment,
  separator,
  valueComponent,
  helperText,
  isRequired=false
}) => {

  const [hasError, setHasError] = useState<boolean>(false);
  useEffect(() => {
    if(errorMessage && errorMessage.length!==0) {
      setHasError(true)
    }
  }, [errorMessage])
  return (
    <div className={`custom-input-field ${alignment}`}>
    {alignment === ALIGNMENT_TYPE.HORIZONTAL 
    ? 
    (
      <>
        <label className={hasError ? 'error-label' : 'label-text'}>{label + (isRequired ? "*" : "")} {separator}</label>
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
            <label className={hasError ? 'error-label' : 'label-text'}>{label + (isRequired ? "*" : "")} {separator}</label>
          </div>
          <br/>
          <div className="input-container">
            {valueComponent}
            { !hasError && helperText && <div className="helper-text">{helperText}</div>}
          </div>
        </>
    )}
    {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default LabelWithValue;

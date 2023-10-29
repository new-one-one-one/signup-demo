import React from 'react';
import { ICardContainerProps } from '../../interfaces/components';
import "./styles.css";

const CardContainer: React.FC<ICardContainerProps> = ({
  header,
  footer,
  body,
  width,
  shadow,
}) => {
  const cardStyle: React.CSSProperties = {
    width,
    boxShadow: shadow ? '0 0 10px rgba(0, 0, 0, 0.2)' : 'none',
  };

  return (
    <div className="responsive-card" style={cardStyle}>
      <div className="card-header">{header}</div>
      <div className="card-body">{body}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
};

export default CardContainer;

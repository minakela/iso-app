import React from 'react';
import IButton from './IButton';
import styleButton from './ButtonStyle.module.css';

const IsoButton: React.FunctionComponent<IButton> = (prop) => {
  return (
    <button onClick={prop.action} style={styleButton} >
      {prop.name}
    </button>
  );
};

export default IsoButton;

import React from 'react';
import Form from 'react-bootstrap/Form';
import IInput from './IInput';

const Input: React.FunctionComponent<IInput> = ({
  label,
  type,
  placeholder,
}) => {
  return (
    <Form>
      <Form.Group controlId={`formBasic${label}`}>
        <Form.Label >{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}/>
      </Form.Group>
    </Form>
  );
};

export default Input;

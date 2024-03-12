import { useRef, useEffect } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: ${(props) => (props.radio ? "30px" : "50%")};
  height: 30px;
  outline: none;
  border-radius: 8px;
  margin: 16px auto;
`;

const Input = ({ value, handleChange, type, text }) => {
  const input = useRef();

  useEffect(() => {
    input.current.focus();
    input.current.blur();
  });

  return (
    <StyledInput
      ref={input}
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={text}
    />
  );
};

export default Input;

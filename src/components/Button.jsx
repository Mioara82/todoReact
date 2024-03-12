import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => (props.isClicked ? "lightblue" : "lightgrey")};
  width: ${(props) => (props.small ? "30px" : "160px")};
  height: ${(props) => (props.small ? "30px" : "40px")};
  margin: ${(props) => (props.small ? "8px" : "0 auto 16px auto")};
  border-radius: ${(props) => (props.options ? "50%" : "8px")};
  cursor: pointer;
`;

const Button = (props) => {
  return (
    <StyledButton
      isClicked={props.isClicked}
      small={props.small}
      options={props.options}
      onClick={props.handleClick}
    >
      {props.text}
    </StyledButton>
  );
};
export default Button;

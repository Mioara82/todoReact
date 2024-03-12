import { useState, createContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  height: 30px;
  width: 160px;
  background-color: lightblue;
  border-radius: 8px;
  padding: 12px 0 8px 0;
  font-size: 20px;
  text-align: center;
  margin: auto;
  text-decoration: none;
  color: #000;
  &:hover {
    color: blue;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  return <StyledLink to={`/newTodo/`}>Add new task</StyledLink>;
};

export default AddTodoForm;

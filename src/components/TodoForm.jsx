import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Datetime from "react-datetime";
import styled from "styled-components";
import "../../src/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useTodo } from "../contexts/ToDoContext";
import Button from "./Button";
import Input from "./Input";
import { setInLocalStorage } from "../utils";

const LinkWrapper = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  padding-top: 10px;
  border-radius: 50%;
`;

const TodoForm = () => {
  const { addTodo } = useTodo();
  const [value, setValue] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const [priority, setPriority] = useState(null);
  const [complexity, setComplexity] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [dueTime, setDueTime] = useState(null);
  const [subTasks, setSubTasks] = useState([]);
  const [tags, setTags] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const handlePriority = (buttonValue) => {
    setPriority(buttonValue);
    console.log("priority is", priority);
  };

  const handleButtonValueChange = (buttonValue) => {
    setSelectedButton((prevSelectedButton) => {
      prevSelectedButton === buttonValue ? null : buttonValue;
    });
    console.log("selected button is", selectedButton);
  };

  const handleComplexity = (e) => {
    if (!e.target.matches("button")) return;
    setComplexity(e.target.innerText);
  };

  const handleDateChange = (date) => {
    setDueDate(date);
  };

  useEffect(() => {
    setInLocalStorage("priority", priority);
    setInLocalStorage("complexity", complexity);
  }, [priority, complexity]);

  const getOptions = () => {
    return Array.from({ length: 10 }, (_, i) => i + 1).map((el) => {
      return (
        <button
          key={el}
          onClick={() => {
            handlePriority(el), handleButtonValueChange(el);
          }}
          style={{
            backgroundColor: selectedButton === el ? "lightblue" : "transparent"
          }}
        >
          {el}
        </button>
      );
    });
  };

  return (
    <div>
      <div>
        <LinkWrapper>
          <Link to={`/`}>
            <FontAwesomeIcon icon={faLeftLong} />
          </Link>
        </LinkWrapper>
        <h1>Add new task</h1>
      </div>
      <div>
        <h2>Task name</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name of task"
            type="text"
            onChange={handleChange}
            value={value}
          />
        </form>
      </div>
      <div>
        <h3>Select priority level</h3>
        <div>{getOptions()}</div>
      </div>
      <div>
        <h3>Select complexity level</h3>
        <div onClick={handleComplexity}>{getOptions()}</div>
      </div>
      <div>
        <div>
          <h3>select due date</h3>
          <input placeholder="Name of task" type="date" />
        </div>
        <div>
          <h3>select time</h3>
          <input placeholder="Name of task" type="time" />
        </div>
      </div>
      <div>
        <h3>Add checklist</h3>
        <input placeholder="Name of task" type="text" />
      </div>
      <div>
        <h3>Add tags</h3>
        <input placeholder="Name of task" type="text" />
      </div>
      <Link to={`/`}>Save task</Link>
    </div>
  );
};

export default TodoForm;

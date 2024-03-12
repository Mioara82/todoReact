import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoOptions from "./pages/TodoOptions";
import TodoDetails from "./pages/TodoDetails";
import Home from "./pages/Home";
import { GlobalStyles } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/newTodo/" element={<TodoOptions />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

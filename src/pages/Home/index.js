import AddTodoForm from "../../components/AddTodoForm";
import Todos from "../../components/Todos";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { MainWrapper } from "./styles";

const Home = () => {
  return (
    <div>
      <MainWrapper>
        <Input />
        <Button text="Filter" />
        <Button text="Sort" />
        <AddTodoForm />
        <Todos />
      </MainWrapper>
    </div>
  );
};
export default Home;

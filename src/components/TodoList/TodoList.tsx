import React from "react";
import AddTodo from "../AddTodo";
import DisplayTodos from "../DisplayTodos";
import { day, date, month, year } from "../../util/getDate";
import { useSelector } from "react-redux";
import {
  Container,
  InfoHeader,
  InfoDate,
  InfoDay,
  InfoMonth,
  InfoTotalTasks,
} from "./TodoList.style";
import { AppState } from "../../Types/Types";

const TodoList: React.FC = () => {
  const tasks = useSelector((state: AppState) => state.todos.length);
  return (
    <Container>
      <InfoHeader>
        <InfoDate>
          <InfoDay>
            {day}, {date}
          </InfoDay>
          <InfoMonth>
            {month} {year}
          </InfoMonth>
        </InfoDate>
        <InfoTotalTasks>
          {tasks > 0 && (
            <p>
              {tasks} Task{tasks === 1 ? null : "s"}
            </p>
          )}
        </InfoTotalTasks>
      </InfoHeader>
      <AddTodo />
      <DisplayTodos />
    </Container>
  );
};

export default TodoList;

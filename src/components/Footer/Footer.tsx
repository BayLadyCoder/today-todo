import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SummaryBox from "../SummaryBox";
import { AppState } from "../../Types/Types";

const FooterContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;

  > * {
    &:nth-child(1) {
      border-bottom-left-radius: 5px;
    }
    &:nth-child(3) {
      border-bottom-right-radius: 5px;
    }
  }
`;

const Footer = () => {
  const allTasks = useSelector(
    (state: AppState) => state.todoList.todos.length
  );
  const tasksDone = useSelector((state: AppState) => state.todoList.tasksDone);

  return (
    <FooterContainer>
      <SummaryBox title="All Tasks" total={allTasks} color="#f2f2f2" />
      <SummaryBox title="Tasks Done" total={tasksDone} color="#c7ffea" />
      <SummaryBox
        title="Remain Tasks"
        total={allTasks - tasksDone}
        color="#ffe3c2"
      />
    </FooterContainer>
  );
};

export default Footer;

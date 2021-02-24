import React, { useState } from "react";
import AddTodo from "../AddTodo";
import DisplayTodos from "../DisplayTodos";

const TodoList = () => {
  const [storage, setStorage] = useState([]);

  return (
    <div style={styles.container}>
      <div style={styles.infoHeader}>
        <div style={styles.infoDate}>
          <p style={styles.infoDay}>Tuesday, 9th</p>
          <p style={styles.infoMonth}>February 2021</p>
        </div>
        <div style={styles.infoTotalTasks}>
          <p>12 Tasks</p>
        </div>
      </div>
      <AddTodo storage={storage} setStorage={setStorage} />
      <DisplayTodos todos={storage} setStorage={setStorage} storage={storage} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    flexDirection: "column",
    minWidth: "350px",
    width: "40%",
    maxWidth: "550px",
    borderRadius: "15px",
  },
  infoHeader: {
    display: "flex",
    backgroundColor: "#f9f7ff",
    padding: "10px 30px",
    borderRadius: "15px",
    justifyContent: "space-between",
    borderBottom: "1px solid #ededed",
  },
  infoDate: {
    display: "flex",
    flexDirection: "column",
  },
  infoDay: {
    fontSize: "23px",
    fontWeight: "bold",
    color: "#573ef7",
  },
  infoMonth: {
    color: "#595959",
  },
  infoTotalTasks: {
    color: "#4f4f4f",
    fontWeight: "400",
  },
};

export default TodoList;

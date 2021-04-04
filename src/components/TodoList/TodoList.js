import React from "react";
import AddTodo from "../AddTodo";
import DisplayTodos from "../DisplayTodos";
import { connect } from "react-redux";
import { day, date, month, year } from "../../util/getDate";

const TodoList = ({ tasks }) => {
  return (
    <div style={styles.container}>
      <div style={styles.infoHeader}>
        <div style={styles.infoDate}>
          <p style={styles.infoDay}>
            {day}, {date}
          </p>
          <p style={styles.infoMonth}>
            {month} {year}
          </p>
        </div>
        <div style={styles.infoTotalTasks}>
          {tasks > 0 && (
            <p>
              {tasks} Task{tasks === 1 ? null : "s"}
            </p>
          )}
        </div>
      </div>
      <AddTodo />
      <DisplayTodos />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    flexDirection: "column",
    minWidth: "320px",
    width: "40%",
    maxWidth: "550px",
    borderRadius: "5px",
    marginBottom: "20px",
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
    color: "#5b45ed",
  },
  infoMonth: {
    color: "#595959",
  },
  infoTotalTasks: {
    color: "#6e6e6e",
    fontWeight: "500",
    fontSize: "15px",
  },
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, null)(TodoList);

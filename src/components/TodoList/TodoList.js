import React, { useState } from "react";
import AddTodo from "../AddTodo";
import DisplayTodos from "../DisplayTodos";
import { connect } from "react-redux";

const TodoList = ({ tasks }) => {
  const [storage, setStorage] = useState([]);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const day = days[today.getDay()];
  const dateNum = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  let date;
  switch (dateNum) {
    case 1:
    case 21:
    case 31:
      date = (
        <span>
          {dateNum}
          <sup>st</sup>
        </span>
      );
      break;
    case 2:
    case 22:
      date = (
        <span>
          {dateNum}
          <sup>nd</sup>
        </span>
      );
      break;
    case 3:
    case 23:
      date = (
        <span>
          {dateNum}
          <sup>rd</sup>
        </span>
      );
      break;
    default:
      date = (
        <span>
          {dateNum}
          <sup>th</sup>
        </span>
      );
  }

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
      <AddTodo storage={storage} setStorage={setStorage} />
      <DisplayTodos />
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
    borderRadius: "5px",
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

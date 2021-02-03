import React from "react";

const AddTodo = () => {
  return (
    <div style={styles.container}>
      <h2>Text Box</h2>
      <button>Add</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    backgroundColor: "lightgreen",
  },
};

export default AddTodo;

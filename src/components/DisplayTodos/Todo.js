import React from "react";

const Todo = () => {
  return (
    <div style={styles.container}>
      <input type="checkbox" />
      <p>Buy Pizza</p>
      <button>X</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
};

export default Todo;

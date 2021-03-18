import { connect } from "react-redux";
import Todo from "./Todo";
import {
  deleteTodo,
  updateTodo,
  completeTodo,
} from "../../actions/todoActions";
import { deleteTask } from "../../actions/taskActions";

const mapDispatchToProps = (dispatch) => ({
  deleteTask: () => dispatch(deleteTask()),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  completeTodo: (id) => dispatch(completeTodo(id)),
  updateTodo: (id, newValue) => dispatch(updateTodo(id, newValue)),
});

export default connect(null, mapDispatchToProps)(Todo);

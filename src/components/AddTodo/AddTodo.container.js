import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import { addTodo } from "../../actions/todoActions";
import { addTask } from "../../actions/taskActions";

const mapDispatchToProps = (dispatch) => ({
  addTodoAction: (todo) => dispatch(addTodo(todo)),
  addTaskAction: () => dispatch(addTask()),
});

export default connect(null, mapDispatchToProps)(AddTodo);

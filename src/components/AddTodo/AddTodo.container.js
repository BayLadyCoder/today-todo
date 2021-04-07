import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import { addTodo } from "../../redux/todoActions";

const mapDispatchToProps = (dispatch) => ({
  addTodoAction: (todo) => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(AddTodo);

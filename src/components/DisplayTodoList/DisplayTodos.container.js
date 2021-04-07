import { connect } from "react-redux";
import DisplayTodos from "./DisplayTodoList";
import { reorderTodos } from "../../redux/todoActions";

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { reorderTodos })(DisplayTodos);

import { connect } from "react-redux";
import DisplayTodos from "./DisplayTodos";
import { reorderTodos } from "../../store/todoActions";

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { reorderTodos })(DisplayTodos);

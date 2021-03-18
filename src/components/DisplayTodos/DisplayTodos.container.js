import { connect } from "react-redux";
import DisplayTodos from "./DisplayTodos";

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, null)(DisplayTodos);

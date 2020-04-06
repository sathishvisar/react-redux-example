
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";

import Todo from './Todo';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (options) => {
      dispatch(addTodo(options))
    }
  }
};

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodoContainer;

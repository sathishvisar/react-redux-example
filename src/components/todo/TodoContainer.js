
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../../store/actions/todoActions";

import Todo from './Todo';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => {
      dispatch(addTodo(todo))
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    }
  }
};

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodoContainer;

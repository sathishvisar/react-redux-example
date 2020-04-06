
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";

import Todo from './Todo';

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todo
  }
};

const mapDispatchToProps = dispatch => {
  return {
    adduser: (options) => {
      dispatch(addTodo(options))
    }
  }
};

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodoContainer;

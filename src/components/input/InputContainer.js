
import { connect } from "react-redux";
import { input } from "../../store/actions/inputActions";

import Input from './Input';

const mapStateToProps = (state, ownProps) => {
  console.log(state) // state
  console.log(ownProps) // {}
  return {
    typing: state.typing
  }
};

const mapDispatchToProps = dispatch => {
  return {
    input: (options) => {
      dispatch(input(options))
    }
  }
};

const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

export default InputContainer;

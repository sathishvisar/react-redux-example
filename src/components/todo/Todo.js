import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';


class Todo extends React.Component{

    componentDidMount(){
        console.log(this.props)
    }
  
    render(){
        let input
        return(
            <React.Fragment>
                <h2>Input Component</h2>
                <br/>
                <div>
                    <form
                        onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        this.props.adduser(input.value)
                        input.value = ''
                        }}
                    >
                        <input type="text" ref={node => input = node} />
                        <button className={'addTodo'} color="secondary">Add Todo</button>
                    </form>
                </div>
                {/* <span>My Name is : { this.props.users } </span> */}
            </React.Fragment>
        )
    }
    
}


Todo.propTypes = {
    config: PropTypes.shape({
      theme: PropTypes.string,
    }),
    input: PropTypes.func
};

export default Todo;

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
                        this.props.addTodo(input.value)
                        input.value = ''
                        console.log(this.props)
                        }}
                    >
                        <input type="text" ref={node => input = node} />
                        <button className={'addTodo'} color="secondary">Add Todo</button>
                    </form>
                    {/* List Dodo's */}
                    <div>
                        <ul>
                            {this.props.todos.map(todo =>
                                <li 
                                    key={todo.id}
                                    style={{
                                        textDecoration: todo.completed ? 'line-through' : 'none'
                                    }}
                                    onClick={()=> this.props.toggleTodo(todo.id)}
                                >{todo.text}</li> 
                            )}
                        </ul>
                    </div>
                </div>
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

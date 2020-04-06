import React from 'react';
import { connect } from "react-redux";


class Home extends React.Component{

    componentDidMount(){
        console.log(this.props)
    }

    render(){

        return(
            <React.Fragment>
                <h2>Home Component</h2>
                <br />
                <div>
                    <h3>List Todo's</h3>
                    <ul>
                        {this.props.todos.map(todo =>
                            <li 
                                key={todo.id}
                                style={{
                                    textDecoration: todo.completed ? 'line-through' : 'none'
                                }}
                            >{todo.text}</li> 
                        )}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
      todos: state.todos
    }
};


const HomeContainer = connect(
    mapStateToProps
)(Home);
  
  export default HomeContainer;

import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';


class Input extends React.Component{

    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        
    }

    render(){

        return(
            <React.Fragment>
                <h2>Input Component</h2>
                <br/>
                <div className={"inputSection"}>
                    {/* <input type="text" onChange={this.props.input()} /> */}
                    <span onClick={() => this.props.input()}> Action </span>
                </div>
                <span>My Name is : { this.props.typing } </span>
            </React.Fragment>
        )
    }
    
}


Input.propTypes = {
    config: PropTypes.shape({
      theme: PropTypes.string,
    }),
    input: PropTypes.func
};

export default Input;

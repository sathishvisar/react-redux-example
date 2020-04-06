import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';


class Counter extends React.Component{

    render(){

        return(
            <React.Fragment>
                <h2>Counter Component</h2>
                <br/>
                <div className={"counterSection"}>
                    <button className={'counter'} onClick={() => this.props.decrement()}> - </button>
                    <h1>{this.props.counter}</h1>
                    <button className={'counter'} onClick={() => this.props.increment()}> + </button>
                </div>
            </React.Fragment>
        )
    }
    
}


Counter.propTypes = {
    config: PropTypes.shape({
      theme: PropTypes.string,
    }),
    increment: PropTypes.func,
    decrement: PropTypes.func,
};

export default Counter;

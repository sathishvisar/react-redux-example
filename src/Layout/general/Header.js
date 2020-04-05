import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/counter">Counter with Redux</Link></li>
                    <li><Link to="/input">Input with Redux</Link></li>
                </ul>                
            </header>
        )
    }
}

export default Header;
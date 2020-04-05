import React from 'react';

// Layouts
import Header from './general/Header';
import Footer from './general/Footer';


class GeneralContainer extends React.Component{
    
    render(){
        const { children } = this.props;
        return(
            <React.Fragment>
                <Header />
                    { children }
                <Footer />
            </React.Fragment>
        )
    }
}

export default GeneralContainer;
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
                    <main>
                        { children }
                    </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default GeneralContainer;
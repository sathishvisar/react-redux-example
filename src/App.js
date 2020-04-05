import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from "history"

// Views
import Home from './Views/Home'

// Componets
import Counter from './Components/Counter'

// Containers
import GeneralContainer from './Layout/GeneralContainer'

// General Layouts
const defaultLayout = (ComponentComp) => () => <GeneralContainer><ComponentComp/></GeneralContainer>;

class App extends React.Component{
    render(){
        const customHistory = createBrowserHistory();

        return(
            <React.Fragment>
                <BrowserRouter>
                    <Switch history={customHistory}>
                        <Route path="/" exact={true} render={defaultLayout(Home)} />
                        <Route path="/counter" render={defaultLayout(Counter)} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App;

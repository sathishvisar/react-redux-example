import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from "history"
import { compose, createStore } from "redux";
import { Provider } from "react-redux";

// Views
import Home from './views/Home'

// Componets
import CounterContainer from './components/counter/CounterContainer'
import TodoContainer from './components/todo/TodoContainer'

// Containers
import GeneralContainer from './layout/GeneralContainer'

// Store
import rootReducer from "./store/reducers/index"

// General Layouts
const defaultLayout = (ComponentComp) => () => <GeneralContainer><ComponentComp/></GeneralContainer>;

// Create store
const enhancer = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );
const store = createStore(rootReducer, enhancer);

class App extends React.Component{
    render(){
        const customHistory = createBrowserHistory();

        return(
            <React.Fragment>
                <Provider store={store}>
                    <BrowserRouter>
                        <Switch history={customHistory}>
                            <Route path="/" exact={true} render={defaultLayout(Home)} />
                            <Route path="/counter" render={defaultLayout(CounterContainer)} />
                            <Route path="/todo" render={defaultLayout(TodoContainer)} />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </React.Fragment>
        )
    }
}

export default App;

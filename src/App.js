import React,{useState} from 'react'
import {Router, Route, Switch } from 'react-router-dom'
import Application from './application'
import history from'./history'
import Details from './components/details'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import 'hover.css'
import './style.scss'
import './media.scss'





const App = () => {
    const [data, setData] = useState([])
    
    const getItems = (items) => {
        
        setData(items)
    }
    return (
        
            < Router history = { history } >
            <Switch>
                <Route path="/" exact>
                    <Application getItems={getItems} />
                </Route>
                <Route path='/products/:id'>
                    <Details data={data} />
                </Route>
          </Switch>
        </ Router>
    )
}

export default App

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Repository from '../pages/Repository'


const Routes: React.FC = () => (
    <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route path='/repositories/:repositories+' component={Repository}></Route>
    </Switch>
)



export default Routes;

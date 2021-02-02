import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from './Home'
import Courses from './Courses'
import AdditionalGroups from './views/AdditionalGroupsView'
import Administrators from './Administrators'
import Rules from './Rules'
import Services from './Services'
import Representatives from './Representatives'
import { Route, Switch } from 'react-router-dom';

const Content = () => {
    const wrap = (element: React.ReactNode): React.ReactNode => {
        return (
            <main role="main" className="content mt-4 mb-4">
                {element}
            </main>
        )
    }

    return (
        <Switch>
            <Route path="/home" render={() => wrap(<Home/>)} />
            <Route path="/rules" render={() => wrap(<Rules/>)} />
            <Route path='/courses' render={() => wrap(<Courses/>)} />
            <Route path='/services' render={() => wrap(<Services/>)} />
            <Route path='/additional_groups' render={() => wrap(<AdditionalGroups/>)} />
            <Route path='/administrators' render={() => wrap(<Administrators/>)} />
            <Route path='/representatives' render={() => wrap(<Representatives/>)} />
        </Switch>
    )
}

export default Content;
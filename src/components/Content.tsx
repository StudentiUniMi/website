import Home from '../views/HomeView';
import Courses from './Courses';
import AdditionalGroups from '../views/AdditionalGroupsView';
import Administrators from '../views/AdministratorsView';
import Rules from '../views/RulesView';
import Services from '../views/ServicesView';
import Representatives from '../views/RepresentativesView';
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
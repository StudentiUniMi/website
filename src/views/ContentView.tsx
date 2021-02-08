import HomeView from './HomeView';
import CoursesView from './CoursesView';
import AdditionalGroupsView from './AdditionalGroupsView';
import AdministratorsView from './AdministratorsView';
import RulesView from './RulesView';
import ServicesView from './ServicesView';
import RepresentativesView from './RepresentativesView';
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
            <Route path="/home" render={() => wrap(<HomeView/>)} />
            <Route path="/rules" render={() => wrap(<RulesView/>)} />
            <Route path='/courses' render={() => wrap(<CoursesView/>)} />
            <Route path='/services' render={() => wrap(<ServicesView/>)} />
            <Route path='/additional_groups' render={() => wrap(<AdditionalGroupsView/>)} />
            <Route path='/administrators' render={() => wrap(<AdministratorsView/>)} />
            <Route path='/representatives' render={() => wrap(<RepresentativesView/>)} />
        </Switch>
    )
}

export default Content;
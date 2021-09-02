import HomeView from './HomeView';
import CoursesView from './CoursesView';
import NewsView from './NewsView';
import AdditionalGroupsView from './AdditionalGroupsView';
import OrganizationView from './OrganizationView';
import RulesView from './RulesView';
import ServicesView from './ServicesView';
import RepresentativesView from './RepresentativesView';
import ContributorsView from '../components/Home/Contributors';
import { Route, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';

const ContentView = () => {
    const wrap = (element: React.ReactNode): React.ReactNode => {
        return (<main role="main" className="content">{element}</main>)
    };
    return (
        <Switch>
            <Route path="/home" render={() => wrap(<HomeView/>)} />
            <Route path="/rules" render={() => wrap(<RulesView/>)} />
            <Route path='/news' render={() => wrap(<NewsView/>)} />
            <Route path='/courses' render={() => wrap(<CoursesView/>)} />
            <Route path='/services' render={() => wrap(<ServicesView/>)} />
            <Route path='/additional_groups' render={() => wrap(<AdditionalGroupsView/>)} />
            <Route path='/representatives' render={() => wrap(<RepresentativesView/>)} />
            <Route path='/contributors' render={() => wrap(<ContributorsView/>)} />
            <Route path='/organization' render={() => wrap(<OrganizationView/>)} />
        </Switch>
    )
}

export default withCookies(ContentView);
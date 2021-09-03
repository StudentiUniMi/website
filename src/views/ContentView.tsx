import HomeView from './HomeView';
import GroupsView from './GroupsView';
import OrganizationView from './OrganizationView';
import RulesView from './RulesView';
import ServicesView from './ServicesView';
import UniversityView from './UniversityView';
import { Route, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';

const ContentView = () => {
    const wrap = (element: React.ReactNode): React.ReactNode => {
        return (<main role="main" className="content">{element}</main>)
    };
    return (
        <Switch>
            <Route path="/home" render={() => wrap(<HomeView/>)} />
            <Route path='/courses' render={() => wrap(<GroupsView/>)} />
            <Route path='/services' render={() => wrap(<ServicesView/>)} />
            <Route path="/rules" render={() => wrap(<RulesView/>)} />
            <Route path='/representatives' render={() => wrap(<UniversityView/>)} />
            <Route path='/organization' render={() => wrap(<OrganizationView/>)} />
        </Switch>
    )
};

export default withCookies(ContentView);
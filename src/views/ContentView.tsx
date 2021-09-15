import HomeView from './HomeView';
import GroupsView from './GroupsView';
import OrganizationView from './OrganizationView';
import RulesView from './RulesView';
import ServicesView from './ServicesView';
import UniversityView from './UniversityView';
import LocalizationService from '../services/LocalizationService';
import { Route, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { Helmet } from "react-helmet";

const ContentView = () => {
    const locale = LocalizationService.strings();
    
    const wrap = (element: React.ReactNode): React.ReactNode => {
        return (<main role="main" className="content">{element}</main>)
    };

    return (
        <Switch>
            <Route path="/home" render={() => wrap(
                <>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>{locale.helmet.homepage.title}</title>
                        <meta name="description" content={locale.helmet.homepage.description} />
                        <link rel="canonical" href="https://studentiunimi.it/home/" />
                    </Helmet>
                    <HomeView/>
                </>
            )} />
            <Route path='/courses' render={() => wrap(
                <>
                    {/* React-helmet is handled in the GroupsView */}
                    <GroupsView/>
                </>
            )} />
            <Route path='/services' render={() => wrap(
                <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{locale.helmet.services.title}</title>
                    <meta name="description" content={locale.helmet.services.description} />
                    <link rel="canonical" href="https://studentiunimi.it/services/" />
                </Helmet>
                    <ServicesView/>
                </>
            )} />
            <Route path="/rules" render={() => wrap(
                <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{locale.helmet.rules.title}</title>
                    <meta name="description" content={locale.helmet.rules.description} />
                    <link rel="canonical" href="https://studentiunimi.it/rules/" />
                </Helmet>
                    <RulesView/>
                </>
            )} />
            <Route path='/representatives' render={() => wrap(
                <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{locale.helmet.university.title}</title>
                    <meta name="description" content={locale.helmet.university.description} />
                    <link rel="canonical" href="https://studentiunimi.it/representatives/" />
                </Helmet>
                    <UniversityView/>
                </>
            )} />
            <Route path='/organization' render={() => wrap(
                <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{locale.helmet.organization.title}</title>
                    <meta name="description" content={locale.helmet.organization.description} />
                    <link rel="canonical" href="https://studentiunimi.it/organization/" />
                </Helmet>
                    <OrganizationView/>
                </>
            )} />
        </Switch>
    )
};

export default withCookies(ContentView);
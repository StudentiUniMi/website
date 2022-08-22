import HomeView from './HomeView';
import GroupsView from './GroupsView';
import OrganizationView from './OrganizationView';
import RulesView from './RulesView';
import ServicesView from './ServicesView';
import UniversityView from './UniversityView';
import LocalizationService from '../services/LocalizationService';
import { Route, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { Helmet } from 'react-helmet';

const ContentView = () => {
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    
    const wrap = (element: React.ReactNode): React.ReactNode => {
        return (<main role="main" className="content">{element}</main>)
    };

    return (
        <Switch>
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
                    <title>{locale?.helmet.services.title}</title>
                    <meta name="description" content={locale?.helmet.services.description} />
                    <meta name="keywords" content="Unimia StudentiUnimi, Servizi StudentiUnimi, Studenti Unimi, StudentiUnimi, Network StudentiUnimi, Network Studenti Unimi, Servizi StudentiUnimi, Servizi Studenti Unimi, StudentiUnimi Services, Network StudentiUnimi Services" />
                    <link rel="canonical" hrefLang={language} href="https://studentiunimi.it/services/" />
                    <meta property="og:title" content={locale?.helmet.services.title} />
                    <meta property="og:description" content={locale?.helmet.services.description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://studentiunimi.it/services/" />
                </Helmet>
                    <ServicesView/>
                </>
            )} />
            <Route path="/rules" render={() => wrap(
                <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{locale?.helmet.rules.title}</title>
                    <meta name="description" content={locale?.helmet.rules.description} />
                    <meta name="keywords" content="Network StudentiUnimi regolamento gruppi, StudentiUnimi regolamento gruppi, Network StudentiUnimi rules, StudentiUnimi rules, Group rules network studentiunimi, Group rules studentiunimi, Studenti Unimi, StudentiUnimi, Network StudentiUnimi, Network Studenti Unimi" />
                    <link rel="canonical" hrefLang={language} href="https://studentiunimi.it/rules/" />
                    <meta property="og:title" content={locale?.helmet.rules.title} />
                    <meta property="og:description" content={locale?.helmet.rules.description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://studentiunimi.it/rules/" />
                </Helmet>
                    <RulesView/>
                </>
            )} />
            <Route path='/representatives' render={() => wrap(
                <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{locale?.helmet.university.title}</title>
                    <meta name="description" content={locale?.helmet.university.description} />
                    <meta name="keywords" content="Network StudentiUnimi ateneo, StudentiUnimi ateneo, Network StudentiUnimi ateneo, StudentiUnimi ateneo, Network StudentiUnimi rappresentanti, StudentiUnimi rappresentanti, Network StudentiUnimi rappresentanti, StudentiUnimi rappresentanti, Studenti Unimi, StudentiUnimi, Network StudentiUnimi, Network Studenti Unimi" />
                    <link rel="canonical" hrefLang={language} href="https://studentiunimi.it/representatives/" />
                    <meta property="og:title" content={locale?.helmet.university.title} />
                    <meta property="og:description" content={locale?.helmet.university.description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://studentiunimi.it/representatives/" />
                </Helmet>
                    <UniversityView/>
                </>
            )} />
            <Route path='/organization' render={() => wrap(
                <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{locale?.helmet.organization.title}</title>
                    <meta name="keywords" content="Network StudentiUnimi chi siamo?, StudentiUnimi chi siamo?, Network StudentiUnimi chi siamo, StudentiUnimi chi siamo, Network StudentiUnimi who we are, StudentiUnimi organization, Network StudentiUnimi organization, StudentiUnimi who we are, Studenti Unimi, StudentiUnimi, Network StudentiUnimi, Network Studenti Unimi" />
                    <meta name="description" content={locale?.helmet.organization.description} />
                    <link rel="canonical" hrefLang={language} href="https://studentiunimi.it/organization/" />
                    <meta property="og:title" content={locale?.helmet.organization.title} />
                    <meta property="og:description" content={locale?.helmet.organization.description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://studentiunimi.it/organization/" />
                </Helmet>
                    <OrganizationView/>
                </>
            )} />
            <Route path="/" render={() => wrap(
                <>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>{locale?.helmet.homepage.title}</title>
                        <meta name="description" content={locale?.helmet.homepage.description} />
                        <meta name="keywords" content="Network StudentiUniMi, Studenti UniMi, Studenti Unimi, StudentiUniMi, Network statale informatica, Gruppi telegram unimi, Gruppi unimi, Siti web corsi unimi, Faq corsi unimi, Wiki Unimi, Network Studenti Unimi" />
                        <link rel="canonical" hrefLang={language} href="https://studentiunimi.it/" />
                        <meta property="og:title" content={locale?.helmet.homepage.title} />
                        <meta property="og:description" content={locale?.helmet.homepage.description} />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="https://studentiunimi.it/" />
                    </Helmet>
                    <HomeView />
                </>
            )} />
        </Switch>
    )
};

export default withCookies(ContentView);
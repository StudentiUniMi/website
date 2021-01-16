import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';

const titleStyle = {
    fontWeight: 600
};

const members_informatica = [
    { username: 'giuseppetm', tutor:false, role:'' },
    { username: 'davidebusolin', tutor:false, role:'' },
    { username: 'alesiasommariva', tutor:true, role:'' },
    { username: 'MrBrionix', tutor:false, role:'' },
    { username: 'mattia_oldani', tutor:false, role:'' },
    { username: 'acetimarco', tutor:false, role:'' },
    { username: 'georgianiandrei', tutor:false, role:'' },
    { username: 'IrisCanole', tutor:false, role:'' },
    { username: 'Mantotheale', tutor:false, role:'' },
    { username: 'Weinsz', tutor:false, role:'' },
    { username: 'GbitGbit', tutor:false, role:'' },
    { username: 'davidemarchioriz', tutor:false, role:'' },
    { username: 'Aconithorn', tutor:false, role:'' }
];

const members_informatica_musicale = [
    { username: 'giolake', tutor:true, role:'' },
    { username: 'robertopinotti', tutor:false, role:'' },
    { username: 'elmalakomar', tutor:false, role:'' }
];

const members_informatica_com_dig = [
    { username: 'robertopinotti', tutor:true, role:'' },
    { username: 'giolake', tutor:false, role:'' },
    { username: 'elmalakomar', tutor:false, role:'' }
];

const members_sicurezza_sistemi_reti_informatiche = [
    { username: 'elmalakomar', tutor:true, role:'' },
    { username: 'robertopinotti', tutor:false, role:'' },
    { username: 'giolake', tutor:false, role:'' },
    { username: 'burzum00', tutor:false, role:'' }
];

const members_sicurezza_sistemi_reti_informatiche_online = [
    { username: 'salvadorbs', tutor:false, role:'' },
    { username: 'burzum00', tutor:false, role:'' }
];

const members_magistrali = [
    { username: 'giuseppetm', tutor:false, role:'' },
    { username: 'maca14', tutor:false, role:'' },
    { username: 'robertopinotti', tutor:false, role:'' }
];

const Administrators = () => {

    return (
        <Container className="administrators text-center">

            <Text style={{ fontSize: FontSizes.size16 }}>
                <p className="mb-5">
                    Ogni corso di laurea e i suoi relativi gruppi telegram hanno come riferimento degli amministratori che possono
                    essere contattati in caso di necessità. Qui è possibile trovare la lista degli admin di ogni corso di laurea: quelli evidenziati
                    sono i tutor di riferimento per le matricole attuali.
                </p>
            </Text>

            <Text style={{ fontSize: FontSizes.size14 }}>

                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-5">
                        <div style={titleStyle} className="title mb-2">Informatica</div>
                        {
                            members_informatica.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;
                                if (x.tutor === true) return (<p className="mb-1"><a href={telegramUsernameLink} className="tutor text-decoration-none">@{x.username}</a></p>);
                                else return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-5">
                        <div style={titleStyle} className="title mb-2">Informatica musicale</div>
                        {
                            members_informatica_musicale.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;
                                if (x.tutor === true) return (<p className="mb-1"><a href={telegramUsernameLink} className="tutor text-decoration-none">@{x.username}</a></p>);
                                else return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-5">
                        <div style={titleStyle} className="title mb-2">Informatica per la comunicazione digitale</div>
                        {
                            members_informatica_com_dig.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;
                                if (x.tutor === true) return (<p className="mb-1"><a href={telegramUsernameLink} className="tutor text-decoration-none">@{x.username}</a></p>);
                                else return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-5">
                        <div style={titleStyle} className="title mb-2">Sicurezza dei sistemi e delle reti informatiche</div>
                        {
                            members_sicurezza_sistemi_reti_informatiche.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;
                                if (x.tutor === true) return (<p className="mb-1"><a href={telegramUsernameLink} className="tutor text-decoration-none">@{x.username}</a></p>);
                                else return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-5">
                        <div style={titleStyle} className="title mb-2">Sicurezza dei sistemi e delle reti informatiche online</div>
                        {
                            members_sicurezza_sistemi_reti_informatiche_online.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;
                                if (x.tutor === true) return (<p className="mb-1"><a href={telegramUsernameLink} className="tutor text-decoration-none">@{x.username}</a></p>);
                                else return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-5">
                        <div style={titleStyle} className="title mb-2">Informatica e Sicurezza informatica (magistrali)</div>
                        {
                            members_magistrali.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;
                                if (x.tutor === true) return (<p className="mb-1"><a href={telegramUsernameLink} className="tutor text-decoration-none">@{x.username}</a></p>);
                                else return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                </div>

            </Text>

        </Container>
    )
};

export default Administrators;
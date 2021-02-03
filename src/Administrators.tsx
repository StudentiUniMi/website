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
    { username: 'MrBrionix', role:'' },
    { username: 'MattiaOldani', role:'' },
    { username: 'acetimarco', role:'' },
    { username: 'georgianiandrei', role:'' },
    { username: 'IrisCanole', role:'' },
    { username: 'Mantotheale', role:'' },
    { username: 'Weinsz', role:'' },
    { username: 'GbitGbit', role:'' },
    { username: 'davidemarchioriz', role:'' },
    { username: 'Aconithorn', role:'' }
];

const members_informatica_musicale = [
    { username: 'giolake', role:'' }
];

const members_informatica_com_dig = [
    { username: 'robertopinotti', role:'' }
];

const members_sicurezza_sistemi_reti_informatiche = [
    { username: 'burzum00', role:'' }
];

const members_sicurezza_sistemi_reti_informatiche_online = [
    { username: 'salvadorbs', role:'' }
];

const members_magistrale_informatica = [
    { username: 'robertopinotti', role:'' }
];

const members_magistrale_sicurezza_informatica = [
    { username: 'Spacer_ASC', role:'' }
];

const Administrators = () => {
    return (
        <Container className="administrators text-center">

            <Text style={{ fontSize: FontSizes.size16 }}>
                <p className="mb-5">
                    Ogni corso di laurea e i suoi relativi gruppi telegram hanno come riferimento degli amministratori che possono
                    essere contattati in caso di necessità. Qui è possibile trovare la lista degli admin di ogni corso di laurea (per ora solo dipartimento di Informatica).
                </p>
            </Text>

            <Text style={{ fontSize: FontSizes.size14 }}>

                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-5">
                        <div style={titleStyle} className="title mb-2">Informatica</div>
                        {
                            members_informatica.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-5">
                        <div style={titleStyle} className="title mb-2">Informatica musicale</div>
                        {
                            members_informatica_musicale.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;
                                return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-5">
                        <div style={titleStyle} className="title mb-2">Informatica per la comunicazione digitale</div>
                        {
                            members_informatica_com_dig.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;
                                return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-5">
                        <div style={titleStyle} className="title mb-2">Sicurezza dei sistemi e delle reti informatiche</div>
                        {
                            members_sicurezza_sistemi_reti_informatiche.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;
                                return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-5">
                        <div style={titleStyle} className="title mb-2">Sicurezza dei sistemi e delle reti informatiche online</div>
                        {
                            members_sicurezza_sistemi_reti_informatiche_online.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;
                                return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-5">
                        <div style={titleStyle} className="title mb-2">Informatica (Magistrale)</div>
                        {
                            members_magistrale_informatica.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;
                                return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-5">
                        <div style={titleStyle} className="title mb-2">Sicurezza informatica (Magistrale)</div>
                        {
                            members_magistrale_sicurezza_informatica.map(x => {
                                var telegramUsernameLink = 'https://t.me/' + x.username;
                                return (<p className="mb-1"><a href={telegramUsernameLink} className="text-decoration-none">@{x.username}</a></p>);
                            })
                        }
                    </div>
                </div>

            </Text>

        </Container>
    )
};

export default Administrators;
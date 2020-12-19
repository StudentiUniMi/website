import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';

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
                        <h6 style={{ fontWeight: 500 }}>Informatica</h6>
                        <p className="mb-1"><a href="https://t.me/giuseppetm">@giuseppetm</a></p>
                        <p className="mb-1"><a href="https://t.me/davidebusolin">@davidebusolin</a></p>
                        <p className="mb-1"><a href="https://t.me/alesiasommariva" className="tutor">@alesiasommariva</a></p>
                        <p className="mb-1"><a href="https://t.me/MrBrionix">@MrBrionix</a></p>
                        <p className="mb-1"><a href="https://t.me/mattia_oldani">@mattia_oldani</a></p>
                        <p className="mb-1"><a href="https://t.me/acetimarco">@acetimarco</a></p>
                        <p className="mb-1"><a href="https://t.me/georgianiandrei">@georgianiandrei</a></p>
                        <p className="mb-1"><a href="https://t.me/IrisCanole">@IrisCanole</a></p>
                        <p className="mb-1"><a href="https://t.me/Mantotheale">@Mantotheale</a></p>
                        <p className="mb-1"><a href="https://t.me/Weinsz">@Weinsz</a></p>
                        <p className="mb-1"><a href="https://t.me/GbitGbit">@GbitGbit</a></p>
                        <p className="mb-1"><a href="https://t.me/davidemarchioriz">@davidemarchioriz</a></p>
                        <p className="mb-1"><a href="https://t.me/Aconithorn">@Aconithorn</a></p>
                        <p className="mb-1"><a href="https://t.me/Palmastizio">@Palmastizio</a></p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-5">
                        <h6 style={{ fontWeight: 500 }}>Informatica musicale</h6>
                        <p className="mb-1"><a href="https://t.me/giolake" className="tutor">@giolake</a></p>
                        <p className="mb-1"><a href="https://t.me/robertopinotti">@robertopinotti</a></p>
                        <p className="mb-1"><a href="https://t.me/elmalakomar">@elmalakomar</a></p>
                        <p className="mb-1"><a href="https://t.me/giuseppetm">@giuseppetm</a></p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-5">
                        <h6 style={{ fontWeight: 500 }}>Informatica per la comunicazione digitale</h6>
                        <p className="mb-1"><a href="https://t.me/robertopinotti" className="tutor">@robertopinotti</a></p>
                        <p className="mb-1"><a href="https://t.me/giolake">@giolake</a></p>
                        <p className="mb-1"><a href="https://t.me/elmalakomar">@elmalakomar</a></p>
                        <p className="mb-1"><a href="https://t.me/giuseppetm">@giuseppetm</a></p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-5">
                        <h6 style={{ fontWeight: 500 }}>Sicurezza dei sistemi e delle reti informatiche</h6>
                        <p className="mb-1"><a href="https://t.me/elmalakomar" className="tutor">@elmalakomar</a></p>
                        <p className="mb-1"><a href="https://t.me/robertopinotti">@robertopinotti</a></p>
                        <p className="mb-1"><a href="https://t.me/giolake">@giolake</a></p>
                        <p className="mb-1"><a href="https://t.me/burzum00">@burzum00</a></p>
                        <p className="mb-1"><a href="https://t.me/giuseppetm">@giuseppetm</a></p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 mb-5">
                        <h6 style={{ fontWeight: 500 }}>Sicurezza dei sistemi e delle reti informatiche online</h6>
                        <p className="mb-1"><a href="https://t.me/salvadorbs">@salvadorbs</a></p>
                        <p className="mb-1"><a href="https://t.me/burzum00">@burzum00</a></p>
                        <p className="mb-1"><a href="https://t.me/giuseppetm">@giuseppetm</a></p>
                    </div>
                </div>
            </Text>
        </Container>
    )
};

export default Administrators;
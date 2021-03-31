import { Text, ITextStyles } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { FontSizes, FontWeights } from '@fluentui/theme';
import { Icon, Link } from 'office-ui-fabric-react';
import { useTheme } from '@fluentui/react-theme-provider';
//import { SelectedPeopleList } from '@uifabric/experiments/lib/SelectedItemsList';
import { IPersona } from '@fluentui/react/lib/Persona';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const cardTokens: ICardTokens = { childrenMargin: 12 };
const helpfulTextStyles: ITextStyles = { root: { fontWeight: FontWeights.regular } };
const sectionCard = {
    minHeight: '160px',
    height: '100%',
    width: '100%',
    maxWidth: 'none',
    maxHeight: 'none'
};

const developerPic = {
    width: '100px',
    height: '100px',
    marginTop: '5px',
    marginBottom: '5px',
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
}

const ContributorsView = () => {
    var theme = useTheme();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const profileIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };

    return (
        <Container className="contributors text-center">

            <div className="mb-4">
                <h4 style={{fontWeight: 400}}>
                    Di seguito è possibile trovare tutte le persone che hanno contribuito allo sviluppo del sito web, dei servizi che offre, della wiki, e del network in generale.
                </h4>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-3" style={iconStyle} />

            <div className="primary-section mb-4">
                <h5 className="mb-3">Manutentori principali</h5>

                <Row className="justify-content-center">
                    <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div className="justify-content-center">
                                <img id="logo"
                                    src={process.env.PUBLIC_URL + "/giuseppetm.jpg"}
                                    alt='Giuseppe Del Campo'
                                    style={developerPic}
                                />
                                </div>
                                <h6 className="mb-0">Giuseppe Del Campo</h6>
                                <Text variant="medium" styles={helpfulTextStyles}>
                                    Sviluppatore principale del sito web.
                                </Text>
                                <div>
                                    <i className="fab fa-github mr-2" style={profileIconStyle}></i>
                                    <i className="fas fa-globe" style={profileIconStyle}></i>
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>
                    <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div className="justify-content-center">
                                <img id="logo"
                                    src={process.env.PUBLIC_URL + "/manuele.jpg"}
                                    alt='Manuele Lucchi'
                                    style={developerPic}
                                />
                                </div>
                                <h6 className="mb-0">Manuele Lucchi</h6>
                                <Text variant="medium" styles={helpfulTextStyles}>
                                    Sviluppatore principale del sito web.
                                </Text>
                                <div>
                                    <i className="fab fa-github mr-2" style={profileIconStyle}></i>
                                    <i className="fas fa-globe" style={profileIconStyle}></i>
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>
                    <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div className="justify-content-center">
                                <img id="logo"
                                    src={process.env.PUBLIC_URL + "/aceti.jpg"}
                                    alt='Marco Aceti'
                                    style={developerPic}
                                />
                                </div>
                                <h6 className="mb-0">Marco Aceti</h6>
                                <Text variant="medium" styles={helpfulTextStyles}>
                                    Sviluppatore del bot e di servizi.
                                </Text>
                                <div>
                                    <i className="fab fa-github mr-2" style={profileIconStyle}></i>
                                    <i className="fas fa-globe" style={profileIconStyle}></i>
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
            </div>


            <div className="primary-section mb-4">
                <h5 className="mb-3">Contributori del Network</h5>

                <div>
                    {/*
                    <SelectedPeopleList
                        key={'normal'}
                        selectedItems={[...this.state.currentSelectedItems]}
                    />
                    */}
                </div>
            </div>
        </Container>
    )
}

export default ContributorsView;
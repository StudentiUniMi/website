import { Persona, PersonaSize, Link, Icon, useTheme, Text } from '@fluentui/react';
import { Representative } from '../../models/Models';
import { Container } from 'react-bootstrap';
import { CSSProperties, useContext, useEffect, useState } from 'react';
import { semibold } from 'services/Fonts';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../../services/LocalizationService";
import ErrorMessage from 'components/Atoms/ErrorMessage';
import GlobalContext from 'services/GlobalContext';
import Chip from 'components/Atoms/Chip';

interface Props { 
    representatives: Array<Representative>,
    errorLoadingRepresentatives: boolean 
};

const RapresentativesList = (props: Props) => {
    var theme = useTheme();
    //const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();

    const [domLoaded, setDomLoaded] = useState<boolean>(false);

    useEffect(() => { setDomLoaded(true); }, []);

    const { isHeaderPinned } = useContext(GlobalContext);

    const subHeader: CSSProperties = { 
        backgroundColor: theme.palette.neutralLighter, 
        borderTop: `1px solid ${theme.palette.neutralQuaternary}`,
        borderBottom: `1px solid ${theme.palette.neutralQuaternary}`,
        padding: '10px 0px', 
        position: 'sticky',
        top: isHeaderPinned ? 44 : 0,
        transition: 'top 0.2s ease-in-out 0s',
        zIndex: 2
    };

    const buildRepresentativesNumberString = (n: number) => {
        if (n === 0) {
            switch (language!) {
                case "it":
                    return "Nessun rappresentante disponibile.";
                case "en":
                    return "No representatives available.";
            }
        } else {
            switch (language!) {
                case "it":
                    return `${n === 1 ? 'Rappresentante disponibile' : 'Rappresentanti disponibili'}`
                case "en":
                    return `${n === 1 ? 'Representative available' : 'Representatives available'}`
            }
        }
    };

    return (
        <div className="representatives mb-4" id="representatives">
            <div className="pb-2 pt-2 mb-4" style={subHeader}>
                <Container>
                    <div className="d-flex flex-row align-items-center" style={{ gap: 5 }}>
                        <Text 
                            variant='medium' 
                            style={{ color: theme.palette.black }} 
                            styles={semibold}
                        >
                            <Chip 
                                label={props.representatives.length.toString()}
                                textColor={theme.palette.white}
                                theme={theme}
                                bgColor={theme.palette.themePrimary}
                                size="small" 
                                className="mr-1"
                            />
                            {buildRepresentativesNumberString(props.representatives.length)}
                        </Text>
                    </div>
                </Container>
            </div>

            <Container>
            {
                props.errorLoadingRepresentatives
                ? <ErrorMessage error={props.errorLoadingRepresentatives} />
                :             
                <Row className="representatives-list" style={{ justifyContent: props.representatives?.length === 0 ? 'center' : "" }}>
                    {domLoaded && props.representatives.length !== 0 && props.representatives.map((x,i) => 
                        <Col key={i} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                            {
                                ( () => { 
                                    var primaryText : any; 
                                    var imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.tguser?.id}.png`;
                                    if (x.tguser?.username !== "") primaryText = (<><Icon iconName="IoIosMail" style={{ color: theme.palette.themePrimary }} />&nbsp;<Link href={`mailto:${x.tguser?.username}`}>{`${x.tguser?.first_name ?? ""} ${x.tguser?.last_name ?? ""}`}</Link></>);
                                    else { primaryText = `${x.tguser?.first_name ?? ""} ${x.tguser?.last_name ?? ""}`};
                                    return <Persona imageUrl={imageUrl} onRenderPrimaryText={() => primaryText} text={`${x.tguser?.first_name ?? ""} ${x.tguser?.last_name ?? ""}`} secondaryText={x.degree_name} size={PersonaSize.size40} /> 
                                })()
                            }
                        </Col>
                    )}
                </Row>
            }
            </Container>
        </div>
    )
};

export default RapresentativesList;
import { Persona, PersonaSize, Link, Icon, useTheme } from '@fluentui/react';
import { Representative } from '../../models/Models';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LoadingSpinner from '../Atoms/LoadingSpinner';
import Message from '../Atoms/Message';
import LocalizationService from "../../services/LocalizationService";

interface Props { data: Representative[], loadingRepresentatives: boolean, errorLoadingRepresentatives: boolean };

const RapresentativesList = (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();

    return (
        <div className="representatives pb-4 pt-4">
            {
                props.loadingRepresentatives || props.errorLoadingRepresentatives ? <LoadingSpinner loading={props.loadingRepresentatives} error={props.errorLoadingRepresentatives} />
                : props.data.length === 0 ?
                    <div className="justify-content-center">
                        <Message text={locale?.university.representativesNotAvailable!} />
                    </div> : <></>
            }
            
            <Row className="people-list text-center">
                {props.data.length !== 0 && !props.errorLoadingRepresentatives && !props.loadingRepresentatives ? props.data.map((x,i) => 
                    <Col key={i} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                        {
                            ( () => { 
                                var primaryText : any; 
                                var imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.tguser?.id}.png`;
                                if (x.tguser?.username !== "") primaryText = (<><Icon iconName="FaTelegram" style={{ color: theme.palette.themePrimary }} />&nbsp;<Link href={`https://t.me/${x.tguser?.username}`}>{`${x.tguser?.first_name ?? ""} ${x.tguser?.last_name ?? ""}`}</Link></>);
                                else { primaryText = `${x.tguser?.first_name ?? ""} ${x.tguser?.last_name ?? ""}`};
                                return <Persona imageUrl={imageUrl} onRenderPrimaryText={() => primaryText} text={`${x.tguser?.first_name ?? ""} ${x.tguser?.last_name ?? ""}`} secondaryText={x.degree_name} size={PersonaSize.size40} /> 
                            })()
                        }
                    </Col>
                ) : <></> }
            </Row>
        </div>
    )
};

export default RapresentativesList;
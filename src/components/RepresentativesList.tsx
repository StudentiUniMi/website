import Representative from '../models/Representative';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { Link, Icon } from 'office-ui-fabric-react';
import { useTheme } from '@fluentui/react-theme-provider';

interface Props { data: Representative[] };

const RapresentativesList = (props: Props) => {
    var theme = useTheme();
    const iconStyle: any = { color: theme.palette.themePrimary };
    return (
        <Row className="people-list text-center">
            {props.data.map((x,i) => 
                <Col key={i} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                    {
                        ( () => { 
                            var primaryText : any; 
                            var imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.user_id}.png`;
                            if (x.username !== "") primaryText = (<><Icon iconName="Send" className="homeIcon" styles={iconStyle} />&nbsp;<Link href={`https://t.me/${x.username}`}>{`${x.name ?? ""} ${x.surname ?? ""}`}</Link></>); 
                            else { primaryText = `${x.name ?? ""} ${x.surname ?? ""}`};
                            return <Persona imageUrl={imageUrl} onRenderPrimaryText={() => primaryText} text={`${x.name ?? ""} ${x.surname ?? ""}`} secondaryText={x.cdl} size={PersonaSize.size40} />
                        })()
                    }
                </Col>
            )}
        </Row>
    )
};

export default RapresentativesList;
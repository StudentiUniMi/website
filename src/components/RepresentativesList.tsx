//import Representative from '../models/Representative';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { Link, Icon } from 'office-ui-fabric-react';
import { useTheme } from '@fluentui/react-theme-provider';

import { Representative } from '../models/Models';

interface Props { data: Representative[] };

const RapresentativesList = (props: Props) => {
    var theme = useTheme();
    return (
        <Row className="people-list text-center">
            {props.data.map((x,i) => 
                <Col key={i} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                    {
                        ( () => { 
                            var primaryText : any; 
                            var imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.tguser?.id}.png`;
                            if (x.tguser?.username !== "") primaryText = (<><Icon iconName="Send" style={{ color: theme.palette.themePrimary }} />&nbsp;<Link href={`https://t.me/${x.tguser?.username}`}>{`${x.tguser?.first_name ?? ""} ${x.tguser?.last_name ?? ""}`}</Link></>); 
                            else { primaryText = `${x.tguser?.first_name ?? ""} ${x.tguser?.last_name ?? ""}`};
                            return <Persona imageUrl={imageUrl} onRenderPrimaryText={() => primaryText} text={`${x.tguser?.first_name ?? ""} ${x.tguser?.last_name ?? ""}`} secondaryText={"Fixami"} size={PersonaSize.size40} /> 
                            /* To-do: adjust cdl of rep */
                        })()
                    }
                </Col>
            )}
        </Row>
    )
};

export default RapresentativesList;
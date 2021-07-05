import Admin from '../models/Admin';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontSizes } from '@fluentui/theme';
import { Link, Icon, Text } from 'office-ui-fabric-react';
import { Separator } from '@fluentui/react/lib/Separator';
import { useTheme } from '@fluentui/react-theme-provider';
import { semibold } from '../fonts';

interface Props { data?: Admin[] };

const AdminsList = (props: Props) => {
    var theme = useTheme();

    return (
        <>
        <div className='mb-4'>
            <Separator>
                <Icon iconName="DoubleChevronDown8" style={{ color: theme.palette.themePrimary }} />
                <Text variant="medium" styles={semibold} style={{ color: theme.palette.themePrimary, fontSize: FontSizes.size18 }}> Amministratori disponibili </Text>
                <Icon iconName="DoubleChevronDown8" style={{ color: theme.palette.themePrimary }} />
            </Separator>
        </div> 
        <Row className="admin-list" style={{ justifyContent: props.data?.length === 0 ? 'center' : ""}}>
            {props.data?.length !== 0 ? props.data?.map((x,i) =>
                <Col key={i} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                    {(() => {
                        var imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.user_id}.png`;
                        if (x.year !== "") var secondaryText = `${x.year} Anno`; 
                        else { secondaryText = ""}
                        return <Persona imageUrl={imageUrl} onRenderPrimaryText={() => (<><Icon iconName="Send" className="homeIcon"/>&nbsp;<Link href={`https://t.me/${x.username}`}>{`${x.username ?? ""}`}</Link></>)} text={`@${x.username}` ?? ""} secondaryText={secondaryText} size={PersonaSize.size40} />
                    })()}
                </Col>
                ) : <div className="text-center">
                        <Text style={{ fontSize: FontSizes.size14, backgroundColor: theme.palette.neutralLighter, padding: '4px' }}><Icon iconName="Info"/> Nessun amministratore disponibile.</Text>
                    </div>
            }
        </Row>
        </>
    )
};

export default AdminsList;
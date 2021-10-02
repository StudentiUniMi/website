import Admin from '../../models/Admin';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { Link, Icon, Text } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { useTheme } from '@fluentui/react-theme-provider';
import { semibold } from '../../services/fonts';
import { getDegreeAdmins } from '../../services/Requests';
import Message from '../Message';
import LocalizationService from "../../services/LocalizationService";

import { Degree } from '../../models/Models';

interface Props { degree?: Degree };

const AdminsList = (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();

    const admins: Admin[] = getDegreeAdmins(props.degree?.slug!);

    return (
        <div className="mb-2">
            <div className="pb-2 pt-2 mb-4" style={{ backgroundColor: theme.palette.neutralLight }}>
                <Container>
                    <div><Text variant="medium" styles={semibold}><Icon iconName="WorkforceManagement" /> {locale?.groups.availableAdmins}</Text></div>
                </Container>
            </div>

            <Container>
                <Row className="admin-list" style={{ justifyContent: admins?.length === 0 ? 'center' : ""}}>
                    {admins?.length !== 0 ? admins?.map((x,i) =>
                        <Col key={i} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                            {(() => {
                                var imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.user_id}.png`;
                                if (x.year !== "") var secondaryText = `${x.year} Anno`; 
                                else { secondaryText = ""}
                                return <Persona imageUrl={imageUrl} onRenderPrimaryText={() => (<><Icon iconName="Send" style={{ color: theme.palette.themePrimary }}/>&nbsp;<Link href={`https://t.me/${x.username}`}>{`${x.username ?? ""}`}</Link></>)} text={`@${x.username}` ?? ""} secondaryText={secondaryText} size={PersonaSize.size40} />
                            })()}
                        </Col>
                    ) : <Message text={locale?.groups.adminsNotFound!} />
                    }
                </Row>
            </Container>
        </div>
    )
};

export default AdminsList;
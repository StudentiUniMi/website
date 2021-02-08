import Admin from '../models/Admin';
import { IPersonaSharedProps, Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'office-ui-fabric-react';

interface Props {
    data: Admin[]
}

const defaultPersona: IPersonaSharedProps = {
    //secondaryText: 'Ruolo',
};

const AdminListView = (props: Props) => {
    return (
        <Row className="admin-list text-center">
            {props.data.map(x => 
                <Col xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                    <Persona {...defaultPersona} onRenderPrimaryText={() => <Link href={`t.me/${x.username}`}>{`@${x.username ?? ""}`}</Link>} text={`@${x.username}` ?? ""} size={PersonaSize.size40} />
                </Col>
            )}
        </Row>
    )
};

export default AdminListView;
import Admin from '../models/Admin';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'office-ui-fabric-react';

interface Props {
    data: Admin[]
}

const AdminsList = (props: Props) => {
    return (
        <Row className="admin-list text-center">
            {props.data.map((x,i) =>
                <Col key={i} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                    {(() => {
                        if (x.year !== "") var secondaryText = `${x.year} Anno`; 
                        else { secondaryText = ""}
                        return <Persona onRenderPrimaryText={() => <Link href={`https://t.me/${x.username}`}>{`@${x.username ?? ""}`}</Link>} text={`@${x.username}` ?? ""} secondaryText={secondaryText} size={PersonaSize.size40} />
                    })()}
                </Col>
            )}
        </Row>
    )
};

export default AdminsList;
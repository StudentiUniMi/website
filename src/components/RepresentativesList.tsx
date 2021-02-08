import Representative from '../models/Representative';
import { IPersonaSharedProps, Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface Props {
    data: Representative[]
}

const defaultPersona: IPersonaSharedProps = {
    //secondaryText: 'Rappresentante degli studenti',
};

const PeopleListView = (props: Props) => {
    return (
        <Row className="people-list text-center">
            {props.data.map(x => 
                <Col xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                    <Persona {...defaultPersona} text={`${x.name ?? ""} ${x.surname ?? ""}`} secondaryText={x.cdl} size={PersonaSize.size40} />
                </Col>
            )}
        </Row>
    )
};

export default PeopleListView;
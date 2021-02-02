import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Person from '../models/Person';
import { IPersonaSharedProps, Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';

interface Props {
    data: Person[]
}

const defaultPersona: IPersonaSharedProps = {
    //secondaryText: 'Rappresentante degli studenti',
};

const PeopleListView = (props: Props) => {
    return (
        <div className="people-list row text-center">
            {props.data.map(x => 
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
                    <Persona {...defaultPersona} text={`${x.name ?? ""} ${x.surname ?? ""}`} size={PersonaSize.size40} />
                </div>
            )}
        </div>
    )
};

export default PeopleListView;
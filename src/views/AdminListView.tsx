import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Admin from '../models/Admin';
import { IPersonaSharedProps, Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';

interface Props {
    data: Admin[]
}

const defaultPersona: IPersonaSharedProps = {
    //secondaryText: 'Ruolo',
};

const AdminListView = (props: Props) => {
    return (
        <div className="admin-list row text-center">
            {props.data.map(x => 
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
                    <Persona {...defaultPersona} text={`@${x.username ?? ""}`} size={PersonaSize.size40} />
                </div>
            )}
        </div>
    )
};

export default AdminListView;
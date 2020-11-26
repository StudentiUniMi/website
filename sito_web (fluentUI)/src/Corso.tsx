import * as React from 'react';
import './App.css';

interface Props {
    name: string;
    website: string;
}


const Corso = (props: Props) => {
    return (
        <div>
            {props.name}
            {props.website}
        </div>
    )
};

export default Corso;
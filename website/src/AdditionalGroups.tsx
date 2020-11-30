import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { IconButton, IIconProps, IContextualMenuProps } from 'office-ui-fabric-react';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap';

/*const stackStyles: IStackStyles = {
    root: {
        background: DefaultPalette.themeTertiary,
    },
};*/

const Home = () => {
    return (
        <Container id="additional-groups">
            Gruppi aggiuntivi
        </Container >
    )
};

export default Home;
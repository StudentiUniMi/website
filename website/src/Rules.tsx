import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';

const Rules = () => {
    return (
        <Container className="rules text-center">
            {/*
            <Text style={{ fontSize: FontSizes.size16 }}>
                <p className="mb-3">
                    Qui è possibile trovare il regolamento del network: si consiglia di leggere le regole indicate prima di utilizzare qualsiasi gruppo telegram del network.
                </p>
            </Text>
            */}
                        <Text style={{ fontSize: FontSizes.size16 }}>
                <p className="mb-3">
                    Non disponibile.
                </p>
            </Text>
            </Container>
    )
}

export default Rules;


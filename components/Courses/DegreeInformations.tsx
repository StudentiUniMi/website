import React from "react";
import { semibold } from '../../services/Fonts';
import { Text, Icon, useTheme } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import LocalizationService from "../../services/LocalizationService";
import Message from '../GenericComponents/Message';
import ItemsGroup, { Item } from "components/GenericComponents/ItemsGroup";

interface Props { degreeInformations: any[] };

const DegreeInformations= (props: Props) => {
    const theme = useTheme();
    const locale = LocalizationService.strings();

    const degreeInformations: any[] = props.degreeInformations;
     
    const items: Array<Item> = degreeInformations?.map((x) => ({
        name: x.name,
        href: x.link,
        iconName: x.icon
    }));

    return (   
        <div className='degree-informations mb-4'>
            <div className="pb-2 pt-2 mb-4" style={{ backgroundColor: theme.palette.neutralLight }}>
                <Container>
                    <div>
                        <Text variant="medium" styles={semibold}><Icon iconName="AiOutlineLink" /> {locale?.courses.availableRedirects}</Text>
                    </div>
                </Container>
            </div>

            {
                items.length === 0 ? <Message text={locale?.noRedirectsAvailable!} />
                :
                <ItemsGroup items={items} />
            }
        </div>
    );
};

export default DegreeInformations;
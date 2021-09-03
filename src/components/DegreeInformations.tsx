import React from "react";
import { semibold } from '../services/fonts';
import { Text } from 'office-ui-fabric-react';
import { redirectToLink } from '../services/Utils';
import { useTheme } from '@fluentui/react-theme-provider';
import { Container } from 'react-bootstrap';
import { IChoiceGroupOptionStyles } from "@fluentui/react";
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import LocalizationService from "../services/LocalizationService";
import Message from './Message';
import { getDegreeInformations } from '../services/Requests';

/* Updated models */
import { Degree } from '../models/Models'; 

interface Props { degree?: Degree };

const DegreeInformations= (props: Props) => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string = LocalizationService.getLanguage();
    const iconProps: any = { fontSize: '24px' };

    const degreeInformations: any[] = getDegreeInformations(props.degree?.slug!);
    /* Workaround to not show selected choicegroup */
    const [selectedChoiceGroup, setSelectedChoiceGroup] = React.useState<string>("");
    const selectionChanged = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption): void => { setSelectedChoiceGroup(""); }
     
    const options: IChoiceGroupOption[] = [];

    const itemSize = 100;
    const choiceGroupOptionsStyle: IChoiceGroupOptionStyles = {
        choiceFieldWrapper: {
            width: itemSize + "px",
            height: itemSize + "px"
        },
        labelWrapper: {
            maxWidth: itemSize / (3 / 4) + "px",
            height: "auto",
        },
        field: {
            height: "100%",
            padding: "0px"
        }
    };

    degreeInformations?.map((x) => {
        return options.push({ 
            key: x.name![language], 
            text: x.name![language], 
            styles: choiceGroupOptionsStyle, 
            iconProps: { iconName: x.icon!, className: iconProps, color: theme.palette.themePrimary }, 
            onClick: () => {redirectToLink(x.link!)} 
        });
    });

    return (   
        <div className='degree-informations mb-4'>
            <div className="pb-3 pt-3 mb-4" style={{ backgroundColor: theme.palette.themeSecondary }}>
                <Container>
                    <div><Text variant="large" styles={semibold} style={{ color: theme.palette.white }}>{locale.courses.availableRedirects}</Text></div>
                </Container>
            </div>

            {
                options.length === 0 ? <Message text={locale.noRedirectsAvailable} />
                :
                <div className="text-center justify-content-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <ChoiceGroup options={options} onChange={selectionChanged} selectedKey={selectedChoiceGroup} />
                </div>
            }
        </div>
    );
};

export default DegreeInformations;
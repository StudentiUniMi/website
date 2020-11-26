import * as React from 'react';
import './App.css';
import { Text, ITextProps } from 'office-ui-fabric-react/lib/Text';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { initializeIcons } from '@uifabric/icons';
import GrouplistInformatica from './GrouplistInformatica'

initializeIcons();

const options: IChoiceGroupOption[] = [
    { key: 'informatica', text: 'Informatica', iconProps: { iconName: 'WebAppBuilderFragment' } },
    { key: 'informatica_musicale', text: 'Informatica musicale', iconProps: { iconName: 'WebAppBuilderFragment' } },
    { key: 'informatica_com_digitale', text: 'Informatica comunicazione digitale', iconProps: { iconName: 'WebAppBuilderFragment' } },
    { key: 'sicurezza_sistemi_reti_informatiche', text: 'Sicurezza sistemi e reti informatiche', iconProps: { iconName: 'WebAppBuilderFragment' } }
];

const Groups = () => {
    return (
        <div>
            <ChoiceGroup label="Scegli un corso di Laurea" defaultSelectedKey="" options={options} />
            {/* 
            L'idea è questa: c'è un input che ti fa scegliere tra i 4 corsi di laurea
            crei un componente gruppi per ogni cdl. A seconda di quello che selezioni nell'input
            ti mostra il componente gruppi relativo.
            Quindi ad esempio premi informatica
            -> <GroupsInformatica />
            Premi sicurezza
            -> <GroupsSicurezza />

            Ogni componente avrà al suo interno tanti corsi del tipo
            <Corso name="Matematica del continuo" website="" />
            <Corso name="Programmazione I" website="" /> 
            magari anche con l'immagine allegata.
            Usa il componente lista
            */}
            <GrouplistInformatica />
        </div>
    )
};

export default Groups;
import React from 'react';
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { useHistory } from 'react-router-dom';
import Admin from '../models/Admin';
import AdminListView from '../components/AdminsList';
import { getAllCdls } from '../services/Requests'
import Degree from '../models/Degree'

const AdministratorsView = () => {
    const history = useHistory();

    const [selectedCdl, setSelectedCdl] = React.useState<string>('');
    var cdls: Degree[] = getAllCdls();
    var cdlOptions: IDropdownOption[] = cdls.map(x => ({key: x.id ?? "", text: x.name ?? ""}));

    const cdlSelectionChanged = (
        ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
        option?: IDropdownOption
    ): void => {
        setSelectedCdl(option?.key as string ?? '');
        history.push(`/administrators/${option?.key as string}`);
    };

    let didMount = React.useRef(false);

    React.useEffect(() =>
    {
        if(!didMount.current)
        {
            didMount.current = true
            var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
            var initialCdl = states.length >= 2 ? states[1] : '';
            setSelectedCdl(initialCdl)
            history.push(`/administrators/${initialCdl}`)
        }
    }, [history]);

    var admins: Admin[] = cdls.filter(x => x.id === selectedCdl)[0]?.admins ?? [];

    return (
        <Container className="administrators text-center">

            <Text style={{ fontSize: FontSizes.size14 }}>
                <div className="mb-3">
                    Ogni corso di laurea e i suoi relativi gruppi telegram hanno come riferimento degli amministratori che possono
                    essere contattati in caso di necessità. Qui è possibile trovare la lista degli admin di ogni corso di laurea e i loro contatti (per ora solo dipartimento di Informatica).
                </div>
            </Text>

            <Container className="mb-4 justify-content-center" style={{maxWidth: '500px'}}>
                <Dropdown
                    label="Seleziona un corso di laurea"
                    placeholder="Seleziona un corso di laurea"
                    selectedKey={selectedCdl}
                    onChange={cdlSelectionChanged}
                    options={cdlOptions}
                />
            </Container>

            <div>
                <AdminListView data={admins}/>
            </div>
        </Container>
    )
};

export default AdministratorsView;
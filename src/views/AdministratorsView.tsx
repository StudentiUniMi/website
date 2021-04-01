import React from 'react';
import { FontSizes } from '@fluentui/theme';
import { Icon } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { useTheme } from '@fluentui/react-theme-provider';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { useHistory } from 'react-router-dom';
import Admin from '../models/Admin';
import AdminListView from '../components/AdminsList';
import { getAllCdls } from '../services/Requests'
import Degree from '../models/Degree'

const AdministratorsView = () => {
    const history = useHistory();
    var theme = useTheme();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };

    const [selectedCdl, setSelectedCdl] = React.useState<string>('');
    var cdls: Degree[] = getAllCdls();
    var cdlOptions: IDropdownOption[] = cdls.map(x => ({key: x.id ?? "", text: x.name ?? "", disabled: x.admins!.length === 0}));

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
            
            <div className="mb-2">
                <h5 style={{fontWeight: 400}} className="mb-2">
                    Ogni corso di laurea e i suoi relativi gruppi telegram hanno come riferimento degli amministratori che possono essere contattati in caso di necessità.
                </h5>

                <h6 style={{fontWeight: 400}}>
                    Qui è possibile trovare la lista degli admin di ogni corso di laurea e i loro contatti (per ora solo dipartimento di Informatica).
                </h6>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-1" style={iconStyle} />

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
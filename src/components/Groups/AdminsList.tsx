import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Admin, Degree } from '../../models/Models';
import { getDegreeAdmins } from '../../services/Requests';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib-commonjs/Persona';
import { Link, Icon, Text } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { useTheme } from '@fluentui/react-theme-provider';
import { semibold } from '../../services/Fonts';
import Message from '../GenericComponents/Message';
import LocalizationService from "../../services/LocalizationService";
import LoadingSpinner from "../GenericComponents/LoadingSpinner";

interface Props { degree?: Degree };

const AdminsList = (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    let [admins, setAdmins] = React.useState<Admin[]>([]); // Amministratori
    const [loadingAdmins, setLoadingAdmins] = React.useState<boolean>(false);
    const [errorLoadingAdmins, setErrorLoadingAdmins] = React.useState<boolean>(false);

    /* Admins callBack */
    const updateAdmins = React.useCallback(async () => {
        if (props.degree?.slug === '' || props.degree?.slug === undefined) return;
        setErrorLoadingAdmins(false);
        setLoadingAdmins(true);
        let adminsResult = await getDegreeAdmins(props.degree?.slug);

        if (adminsResult.status !== 200) {
            setLoadingAdmins(false);
            setErrorLoadingAdmins(true);
            return;
        }

        setLoadingAdmins(false);
        setAdmins(adminsResult.value ?? []);
    }, [props.degree?.slug]);


    React.useEffect(() => {
        updateAdmins();
    }, [props.degree, updateAdmins]);

    return (
        <div className="mb-2">
            <div className="pb-2 pt-2 mb-4" style={{ backgroundColor: theme.palette.neutralLight }}>
                <Container>
                    <div><Text variant="medium" styles={semibold}><Icon iconName="WorkforceManagement" /> {locale?.groups.availableAdmins}</Text></div>
                </Container>
            </div>

            {
                loadingAdmins || errorLoadingAdmins ? <LoadingSpinner loading={loadingAdmins} error={errorLoadingAdmins} />
                    : admins.length === 0 ?
                        <div className="justify-content-center">
                            <Message text={locale?.groups.adminsNotFound!} />
                        </div> : <></>
            }

            {admins.length !== 0 && !errorLoadingAdmins && !loadingAdmins ?
                <Container>
                    <Row className="admin-list" style={{ justifyContent: admins?.length === 0 ? 'center' : ""}}>
                        {admins?.length !== 0 ? admins?.map((x,i) =>
                            <Col key={i} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                                {(() => {
                                    var imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.id}.png`;
                                    return <Persona imageUrl={imageUrl} onRenderPrimaryText={() => (<><Icon iconName="Send" style={{ color: theme.palette.themePrimary }}/>&nbsp;<Link href={`https://t.me/${x.username}`}>{`${x.first_name ?? ""} ${x.last_name ?? ""}`}</Link></>)} text={`@${x.first_name ?? ""} ${x.last_name ?? ""}`} secondaryText={`@${x.username}`} size={PersonaSize.size40} />
                                })()}
                            </Col>
                        ) : <Message text={locale?.groups.adminsNotFound!} />
                        }
                    </Row>
                </Container> : <></>
            }
        </div>
    )
};

export default AdminsList;
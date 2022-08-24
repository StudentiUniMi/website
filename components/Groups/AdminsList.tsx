import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Admin } from '../../models/Models';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib-commonjs/Persona';
import { Link, Icon, Text } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { useTheme } from '@fluentui/react-theme-provider';
import { semibold } from '../../services/Fonts';
import ErrorMessage from "../GenericComponents/ErrorMessage";
import Message from '../GenericComponents/Message';
import LocalizationService from "../../services/LocalizationService";

interface Props { admins: Admin[], errorLoadingAdmins: boolean };

const AdminsList = (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    let admins: Admin[] = props.admins;
    let errorLoadingAdmins: boolean = props.errorLoadingAdmins;

    return (
        <div className="mb-2">
            <div className="pb-2 pt-2 mb-4" style={{ backgroundColor: theme.palette.neutralLight }}>
                <Container>
                    <div><Text variant="medium" styles={semibold}><Icon iconName="WorkforceManagement" /> {locale?.groups.availableAdmins}</Text></div>
                </Container>
            </div>

            {
                admins.length === 0 &&
                <div className="justify-content-center">
                    <Message text={locale?.groups.adminsNotFound!} />
                </div>
            }

            {admins.length !== 0 && !errorLoadingAdmins ?
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
                </Container>
                :
                <ErrorMessage error={errorLoadingAdmins} />
            }
        </div>
    )
};

export default AdminsList;
import { Admin } from '../../models/Models';
import { Persona, PersonaSize, Link, Text, useTheme } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { semibold } from '../../services/Fonts';
import { Icon } from '@fluentui/react';
import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ErrorMessage from "../Atoms/ErrorMessage";
import Message from '../Atoms/Message';
import LocalizationService from "../../services/LocalizationService";

interface Props { admins: Admin[], errorLoadingAdmins: boolean };

const AdminsList = (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const [domLoaded, setDomLoaded] = useState<boolean>(false);
    let admins: Admin[] = props.admins;
    let errorLoadingAdmins: boolean = props.errorLoadingAdmins;

    useEffect(() => { setDomLoaded(true); }, []);

    return (
        <div className="mb-2">
            <div className="pb-2 pt-2 mb-4" style={{ backgroundColor: theme.palette.neutralLight }}>
                <Container>
                    <div><Text variant="medium" styles={semibold}><Icon iconName="AiOutlineQuestionCircle" /> {locale?.courses.availableAdmins}</Text></div>
                </Container>
            </div>

            {
                errorLoadingAdmins
                ? <ErrorMessage error={errorLoadingAdmins} />
                :
                admins.length === 0 
                ?
                <div className="justify-content-center">
                    <Message text={locale?.courses.adminsNotFound!} />
                </div>
                :
                <Container>
                    <Row className="admin-list" style={{ justifyContent: admins?.length === 0 ? 'center' : "" }}>
                        {domLoaded && admins?.length !== 0 ? admins?.map((x, i) =>
                            <Col key={i} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                                {(() => {
                                    var imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.id}.png`;
                                    return <Persona imageUrl={imageUrl} onRenderPrimaryText={() => (<><Icon iconName="FaTelegram" style={{ color: theme.palette.themePrimary }} />&nbsp;<Link href={`https://t.me/${x.username}`}>{`${x.first_name ?? ""} ${x.last_name ?? ""}`}</Link></>)} text={`@${x.first_name ?? ""} ${x.last_name ?? ""}`} secondaryText={`@${x.username}`} size={PersonaSize.size40} />
                                })()}
                            </Col>
                        ) : <Message text={locale?.courses.adminsNotFound!} />
                        }
                    </Row>
                </Container>
            }
        </div>
    )
};

export default AdminsList;
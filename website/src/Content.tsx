import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemsKeys } from './HeaderMenu';
import Home from './Home'
import Courses from './Courses'
import FaqProposer from './FaqProposer'
import AdditionalGroups from './views/AdditionalGroupsView'
import Administrators from './Administrators'
import Rules from './Rules'
import Materiali from './Materiali'

interface Props {
    view: ItemsKeys
}

const Content = (props: Props) => {
    switch (props.view) {
        case ItemsKeys.home:
            return <main role="main" className="content mt-4 mb-4">
                <Home />
            </main>
        case ItemsKeys.rules:
            return <main role="main" className="content mt-4 mb-4">
                <Rules />
            </main>
        case ItemsKeys.materiali:
            return <main role="main" className="content mt-4 mb-4">
                <Materiali />
            </main>
        case ItemsKeys.courses:
            return <main role="main" className="content mt-4 mb-4">
                <Courses />
            </main>
        case ItemsKeys.administrators:
            return <main role="main" className="content mt-4 mb-4">
                <Administrators />
            </main>
        case ItemsKeys.additional_groups:
            return <main role="main" className="content mt-4 mb-4">
                <AdditionalGroups />
            </main>
        case ItemsKeys.faq_proposer:
            return <main role="main" className="content mt-4 mb-4">
                <FaqProposer />
            </main>
    }
}

export default Content;






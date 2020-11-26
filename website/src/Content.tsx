import * as React from 'react';
import './App.css';
import { ItemsKeys } from './HeaderMenu';
import Homepage from './Homepage'
import Groups from './Groups'
import FaqProposer from './FaqProposer'
import Faq from './Faq'

interface Props {
    view: ItemsKeys
}

const Content = (props: Props) => {
    switch (props.view) {
        case ItemsKeys.homepage:
            return <div id="content">
                <Homepage />
            </div>
        case ItemsKeys.groups:
            return <div id="content">
                <Groups />
            </div>
        case ItemsKeys.faqProposer:
            return <div id="content">
                <FaqProposer />
            </div>
        case ItemsKeys.faq:
            return <div id="content">
                <Faq />
            </div>
    }
}

export default Content;






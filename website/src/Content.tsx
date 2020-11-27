import * as React from 'react';
import './App.css';
import { ItemsKeys } from './HeaderMenu';
import Home from './Home'
import Courses from './Courses'
import FaqProposer from './FaqProposer'

interface Props {
    view: ItemsKeys
}

const Content = (props: Props) => {
    switch (props.view) {
        case ItemsKeys.home:
            return <div id="content">
                <Home />
            </div>
        case ItemsKeys.courses:
            return <div id="content">
                <Courses />
            </div>
        case ItemsKeys.faqProposer:
            return <div id="content">
                <FaqProposer />
            </div>
    }
}

export default Content;






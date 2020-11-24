import * as React from 'react';
import './App.css';
import { ItemsKeys } from './Menu';


interface Props {
    view: ItemsKeys
}

const Content = (props: Props) => {
    switch (props.view) {
        case ItemsKeys.homepage:
            return <div>homepage</div>
        case ItemsKeys.groups:
            return <div>groups</div>
        case ItemsKeys.faqProposer:
            return <div>faq</div>
    }
}

export default Content;






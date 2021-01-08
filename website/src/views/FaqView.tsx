import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Text } from "office-ui-fabric-react/lib/Text";
import { FontSizes } from '@fluentui/theme';
import { useBoolean } from '@uifabric/react-hooks';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';

interface Props {
    cdl?:string,
    name?:string,
    anno?:number|string,
    semestre?:number,
    cfu?:number,
    gruppo?:string,
    websites?:any[]
}

const modelProps = {
    isBlocking: false,
    styles: { main: { maxWidth: 450 } },
};

const dialogContentProps = {
    type: DialogType.largeHeader,
    title: 'All emails together',
    subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.',
};


const FaqView = (props: Props) => {
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

    return (
        <>
            {/* E' qui che viene aperto il componente credo */}
            <DefaultButton secondaryText="Opens the Sample Dialog" onClick={toggleHideDialog} text="Open Dialog" />
            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                dialogContentProps={dialogContentProps}
                modalProps={modelProps}
            >
                <DialogFooter>
                    footer of dialog (dennis)
                </DialogFooter>
            </Dialog>
        </>
    )
};

export default FaqView;
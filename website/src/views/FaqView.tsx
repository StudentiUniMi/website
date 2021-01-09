import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link, Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { useBoolean } from '@uifabric/react-hooks';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import AnswerQuestionView from './AnswerQuestionView';

interface Props {
    cdl?: string,
    name?: string,
    anno?: number | string,
    semestre?: number,
    cfu?: number,
    gruppo?: string,
    websites?: any[],
    faqFile?: string
}

const modelProps = {
    isBlocking: false,
    styles: { main: { textAlign: 'center' } },
};

const getProperties = (props: Props) => {
    var courseProperties = props.cfu + ' CFU, ';

    if (props.anno === "Complementare") {
        courseProperties += "Corso complementare, ";
    } else {
        courseProperties = courseProperties + props.anno + '° Anno, ';
    }

    if (props.semestre as any !== "") {
        courseProperties = courseProperties + props.semestre + '° Semestre';
    }
    return courseProperties;
};

const faqBaseUrl = "https://raw.githubusercontent.com/NetworkStataleInformatica/network/master/website/src/data/faq/"

const FaqView = (props: Props) => {
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const [faqPairs, setFaqPairs]  = React.useState<any[]>([])

    React.useEffect(() =>
    {
        let f = async () =>
        {
            var faqFetch = await fetch(faqBaseUrl + props.cdl + '/' + props.faqFile)
            console.log(faqBaseUrl, props.cdl, props.faqFile);
            var faqXML = await faqFetch.text()
            let parser = new DOMParser();
            let fetchObj = parser.parseFromString(faqXML, "text/xml");
            let pairs = fetchObj.getElementsByTagName('faq').item(0)?.getElementsByTagName('pair')
            var out = []
            for (let i =0; i<(pairs?.length ?? 0); i++)
            {
                let pair = pairs?.item(i)!
                out.push(
                    {
                        question: pair.getElementsByTagName('question').item(0)?.innerHTML,
                        answer:pair.getElementsByTagName('answer').item(0)?.innerHTML
                    }
                )
            }
            setFaqPairs(out)
        }

        f()
    }, [props.faqFile, props.cdl])

    

    var courseProperties = getProperties(props);

    const dialogContentProps = {
        type: DialogType.largeHeader,
        title: 'FAQ - ' + props.name,
        subText: courseProperties
    };

    return (
        <>
            <Link className="text-decoration-none" onClick={toggleHideDialog}>Faq</Link>
            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                dialogContentProps={dialogContentProps}
                modalProps={modelProps}
            >

            {faqPairs.map(x => <AnswerQuestionView question={x.question as string} answer={x.answer as string}/> )}

                <DialogFooter>
                    {/* Magari nel footer un pulsante che permette di proporne una nuova reindirizzando al form già compilato? Oppure sostituisci proprio la pagina per proporre le faq */}

                </DialogFooter>
            </Dialog>
        </>
    )
};

export default FaqView;
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

interface Props {
    question?: string,
    answer?: string
}

const AnswerQuestionView = (props: Props) => {
    return (
        <>
            <div className="mb-3" style={{fontWeight: 600}}>{props.question}</div>
            <div className="mb-3">{props.answer}</div>
        </>
    )
}

export default AnswerQuestionView;
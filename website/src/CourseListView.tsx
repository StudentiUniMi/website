import * as React from "react";
import "./App.css";
import CourseItemView from "./CourseItemView";
import Course from "./models/Course";

interface Props {
    cdl?: string;
}

const getCourses = (cdl?: string) => {
    switch (cdl) {
        case "informatica":
            return [
                // Testing, poi vanno in un json
                {
                    name: "Matematica del continuo",
                    anno: "Primo",
                    semestre: "Primo",
                    gruppo: "https://t.me/joinchat/ALnoP1LJj2lM8MLaaKK02w",
                    website: "https://ccavaterramc.ariel.ctu.unimi.it/v5/home/Default.aspx",
                    faq: "faq_files/matematica_del_continuo/matematica_del_continuo.pdf"
                },
                {
                    name: "Programmazione I",
                    anno: "Primo",
                    semestre: "Primo",
                    gruppo: "link telegram Programmazione I",
                    website: "link sito web Programmazione I",
                    faq: "faq Programmazione I"
                },
                {
                    name: "Architettura degli elaboratori I",
                    anno: "Primo",
                    semestre: "Primo",
                    gruppo: "link telegram Architettura degli elaboratori I",
                    website: "link sito web Architettura degli elaboratori I",
                    faq: "faq Architettura degli elaboratori I"
                }
            ];
        case "informatica_musicale":
            return [];
        case "informatica_com_digitale":
            return [];
        case "sicurezza_sistemi_reti_informatiche":
            return [];
        default:
            return [];
    }
};

const CourseListView = (props: Props) => {
    const courses: Course[] = getCourses(props.cdl);

    return (
        <div>
            {courses.map((x) => (
                <CourseItemView data={x} />
            ))}
        </div>
    );
};

export default CourseListView;

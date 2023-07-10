import { LocalizedField } from "./Models";

/* To-be replaced soon */
export interface TempDegree {
    slug: string,
    degreeInformations: Array<DegreeInformation>
};

export interface DegreeInformation {
    name: LocalizedField,
    description: LocalizedField,
    link: string,
    icon: string
};
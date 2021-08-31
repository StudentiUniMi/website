/**
 * Updated models to support apis.
 * @author Giuseppe Del Campo
 */

export interface Department {
    pk: number,
    name?: string,
    icon?: string,
    slug?: string,
    degree_count?: number,
    representative_count?: number
}

export interface Degree {
    pk: number,
    name?: string,
    icon?: string,
    type?: string,
    group?: Group,
    slug?: string
}

export interface CourseDegree {
    course?: Course,
    year?: number,
    semester?: number
}

export interface Representative {
    tguser: Tguser,
    degree_name?: string
}

/* This is a model created just to retrieve degree and department when visiting for example courses/triennale_informatica and initialize the component. */
export interface VerboseDegree {
    pk: number,
    name?: string,
    type?: string,
    group?: Group,
    slug?: string,
    department?: Department
}

export interface Course {
    pk?: number,
    name?: string,
    cfu?: number,
    wiki_link?: string,
    links: Website[],
    group?: Group,
}

export interface Tguser {
    id: number,
    first_name?: string,
    last_name?: string,
    username?: string
}

export interface Group {
    id: number,
    title?: string,
    profile_picture?: string,
    invite_link?: string
}


export interface Website {
    name?: string,
    url?: string
}
/**
 * Updated models to support API responses.
 * @author Giuseppe Del Campo
 */

export interface Department {
    pk: number,
    name: string,
    icon?: string,
    slug: string,
    degree_count: number,
    representative_count: number
};

export interface Degree {
    pk: number,
    name: string,
    icon?: string,
    type: string,
    group: Group,
    slug: string
};

export interface CourseDegree {
    course: Course,
    year: number,
    semester: number
};

export interface Representative {
    tguser: Tguser,
    degree_name: string
};

/* This is a model created just to retrieve degree and department when visiting for example courses/triennale_informatica and initialize the component. */
export interface VerboseDegree {
    pk: number,
    name: string,
    type: string,
    group: Group,
    slug: string,
    department: Department
};

/* The null values are used to support main groups that do not have those fields. */
export interface Course {
    pk: number,
    name: string,
    cfu: number,
    wiki_link: string | null,
    links: Website[],
    group: Group,
    professor: Professor | null
};

export interface Tguser {
    id: number,
    first_name: string,
    last_name: string,
    username: string
};

export interface Group {
    id: number,
    title: string,
    profile_picture: string,
    invite_link: string
};

export interface Website {
    name: string,
    url: string
};

export interface Admin {
    id: number,
    first_name: string,
    last_name: string,
    username: string
};

export interface Professor {
    first_name: string,
    last_name: string,
    url: string
};
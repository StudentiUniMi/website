/**
 * Updated models to support apis.
 * @author Giuseppe Del Campo
 */

export interface Department {
    pk: number,
    name?: string,
    icon?: string,
    degree_count?: number,
    representative_count?: number
}

export interface Degree {
    pk: number,
    name?: string,
    icon?: string,
    type?: string,
    slug?: string
}

export interface Course {
    pk: number,
    name?: string,
    cfu?: number,
    wiki_link?: string,
    links: Website[],
    group?: Group,
    year?: number,
    semester?: number
}

export interface Representative {
    tguser: Tguser,
    title?: string
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
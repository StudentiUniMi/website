import data from '../data/Data.json';
import extraGroups from '../data/ExtraGroups.json';
import OldDegree from '../models/Degree';
import Admin from '../models/Admin';
import Service from '../models/Service';
import serviceData from '../data/Services.json';
import Contributor from '../models/Contributor';
import Contributors from '../data/Contributors.json';
import Faqs from '../data/Faqs.json';
import Faq from '../models/Faq';
import CanMembers from '../data/CanMembers.json';
import CanMember from '../models/CanMember';
import Rules from '../data/Rules.json';
import Rule from '../models/Rule';

/* Updated models */
import { Department, Degree, Course, Representative } from '../models/Models';

const api_endpoint = 'https://api.studentiunimi.it/api';
const department_endpoint = '/departments';
const degree_endpoint = '/degrees';
const course_endpoint = '/courses';
const representative_endpoint = '/representatives';

/* Main class to build response */
class Result<T>
{
    public status:number;
    public value?:T;
    public message:string;

    constructor(status: number, value?:T, message:string = "")
    {
        this.status = status;
        this.value = value;
        this.message = message;
    }
}

/**
 * Main function to retrieve data from endpoints.
 * @param path Path of the resource
 */
async function getAsync<T>(path: string) : Promise<Result<T>>
{
    const response = await fetch(path);

    if (!response.ok) {
        return new Result<T>(response.status, undefined, response.statusText);
    }

    let res = await response.json() as T;
    return new Result<T>(200,res);
}

/**
 * This function retrieves the existing departments.
 */
export async function getDepartments(): Promise<Result<Department[]>> {
    return getAsync<Department[]>(api_endpoint + department_endpoint);
};

/**
 * This function retrieves the degrees of a specific department.
 * @param departmentKey Key or parameter to query by department
 */
export async function getDegrees(departmentKey: string): Promise<Result<Degree[]>> {
    return getAsync<Degree[]>(`${api_endpoint}${degree_endpoint}?dep_id=${departmentKey}`);
}

/**
 * This function retrieves the courses of a specific degree.
 * @param degreeKey Key or parameter to query by degree
 */
export async function getCourses(degreeKey: string): Promise<Result<Course[]>> {
    return getAsync<Course[]>(`${api_endpoint}${course_endpoint}?deg_id=${degreeKey}`);
}

/**
 * This function retrieves the representatives of a specific department.
 * @param departmentKey Key or parameter to query by department
 */
export async function getRepresentatives(departmentKey: string): Promise<Result<Representative[]>> {
    return getAsync<Representative[]>(`${api_endpoint}${representative_endpoint}?dep_id=${departmentKey}`);
}



/* Temporary function to retrieve degree informations. */
export const getDegreeInformations = (degreeSlug: string): any[] => {
    return getAllCdls().filter(x => x.id === degreeSlug)[0]?.redirects ?? [];
}

/* Temporary function to retrieve degree admins. */
export const getDegreeAdmins = (degreeSlug: string): Admin[] => {
    return getAllCdls().filter(x => x.id === degreeSlug)[0]?.admins ?? [];
}

export const getExtraGroups = () => extraGroups;

export const getServices = (): Service[] => serviceData;

export const getAllCdls = (): OldDegree[] => ([] as OldDegree[]).concat(...(data.departments.map(x => x.cdls as any as OldDegree[])));

export const getContributors = (): Contributor[] => Contributors;

export const getAdmins = (): Admin[] => ([] as Admin[]).concat(...(getAllCdls().map(x => x.admins as any as Admin[])));

export const getGroupsLength = (): number => extraGroups.length + ([] as Course[]).concat(...getAllCdls().map(x => x.courses as any as Course[])).length;

export const getCdlsLength = (): number => getAllCdls().length;

export const getFaqs = (): Faq[] => Faqs;

export const getCanMembers = (): CanMember[] => CanMembers;

export const getRules = (): Rule[] => Rules;
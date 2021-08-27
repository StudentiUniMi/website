import data from '../data/Data.json';
import extraGroups from '../data/ExtraGroups.json';
//import Course from '../models/Course';
import OldDegree from '../models/Degree';
import Admin from '../models/Admin';
//import Representative from '../models/Representative';
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
    return getAsync<Degree[]>(`${api_endpoint}${department_endpoint}/${departmentKey}`);
}

/**
 * This function retrieves the courses of a specific degree.
 * @param degreeKey Key or parameter to query by degree
 */
export async function getCourses(degreeKey: string): Promise<Result<Course[]>> {
    return getAsync<Course[]>(`${api_endpoint}${degree_endpoint}/${degreeKey}`);
}

/**
 * This function retrieves the representatives of a specific department.
 * @param departmentKey Key or parameter to query by department
 */
export async function getRepresentatives(departmentKey: string): Promise<Result<Representative[]>> {
    return getAsync<Representative[]>(`${api_endpoint}${department_endpoint}/${departmentKey}`);
}








/* Temporary function to retrieve degree informations. */
export const getDegreeInformations = (degreeKey: string): any[] => {
    const degree: any = getAllCdls().filter(x => x.id === degreeKey);
    return degree.redirects;
}

/* Temporary function to retrieve degree admins. */
export const getDegreeAdmins = (degreeKey: string): Admin[] => {
    const degree: any = getAllCdls().filter(x => x.id === degreeKey);
    return degree.admins;
}


//export const getDepartments = (): Department[] => data.departments as any as Department[];
//export const getRepresentatives = (departmentId:string): Representative[] => (data.departments.filter(x => x.id === departmentId)[0]?.representatives ?? []);

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
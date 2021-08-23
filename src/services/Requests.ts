import data from '../data/Data.json';
import extraGroups from '../data/ExtraGroups.json';
import Course from '../models/Course';
import Degree from '../models/Degree';
import Admin from '../models/Admin';
import Department from '../models/Department';
import Representative from '../models/Representative';
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

const api_endpoint = 'http://api.studentiunimi.it';
const department_endpoint = '/department';
const degree_endpoint = '/degree';
const courses_endpoint = '/course';
const representatives_endpoint = '/representative';

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
export async function getDegrees(departmentKey: String): Promise<Result<Degree[]>> {
    return getAsync(`${api_endpoint}${degree_endpoint}?department=${departmentKey}`);
}

/**
 * This function retrieves the courses of a specific degree.
 * @param degreeKey Key or parameter to query by degree
 */
export async function getCourses(degreeKey: String): Promise<Result<Course[]>> {
    return getAsync(`${api_endpoint}${courses_endpoint}?degree=${degreeKey}`);
}

/**
 * This function retrieves the representatives of a specific department.
 * @param departmentKey Key or parameter to query by department
 */
export async function getRepresentatives(departmentKey: String): Promise<Result<Representative[]>> {
    return getAsync(`${api_endpoint}${representatives_endpoint}?department=${departmentKey}`);
}




//export const getDepartments = (): Department[] => data.departments as any as Department[];

export const getExtraGroups = () => extraGroups;

export const getServices = (): Service[] => serviceData;

//export const getRepresentatives = (departmentId:string): Representative[] => (data.departments.filter(x => x.id === departmentId)[0]?.representatives ?? []);

export const getAllCdls = (): Degree[] => ([] as Degree[]).concat(...(data.departments.map(x => x.cdls as any as Degree[])));

export const getContributors = (): Contributor[] => Contributors;

export const getAdmins = (): Admin[] => ([] as Admin[]).concat(...(getAllCdls().map(x => x.admins as any as Admin[])));

export const getGroupsLength = (): number => extraGroups.length + ([] as Course[]).concat(...getAllCdls().map(x => x.courses as any as Course[])).length;

export const getCdlsLength = (): number => getAllCdls().length;

export const getFaqs = (): Faq[] => Faqs;

export const getCanMembers = (): CanMember[] => CanMembers;

export const getRules = (): Rule[] => Rules;
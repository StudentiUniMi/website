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
const courses_endpoint = 'course';
const representatives_endpoint = '/representative';


/**
 * This function retrieves the existing departments.
 */
export async function getDepartments(): Promise<Department[]> {
    const response = await fetch(api_endpoint + department_endpoint);
    
    if (!response.ok) {
        throw new Error(`Error in getDepartments, name: ${response.status}, message: ${response.statusText}.`);
    }
    
    return response.json().catch(() => ({})); // may error if there is no body, return empty array
};

/**
 * This function retrieves the degrees of a specific department.
 * @param departmentKey Key or parameter to query by department
 */
export async function getDegrees(departmentKey: String): Promise<Degree[]> {
    const response = await fetch(api_endpoint + degree_endpoint + `?department=${departmentKey}`);
    
    if (!response.ok) {
        throw new Error(`Error in getDegrees, name: ${response.status}, message: ${response.statusText}.`);
    }
    
    return response.json().catch(() => ({})); 
}

/**
 * This function retrieves the courses of a specific degree.
 * @param degreeKey Key or parameter to query by degree
 */
export async function getCourses(degreeKey: String): Promise<Course[]> {
    const response = await fetch(api_endpoint + courses_endpoint + `?degree=${degreeKey}`);

    if (!response.ok) {
        throw new Error(`Error in getCourses, name: ${response.status}, message: ${response.statusText}.`);
    }

    return response.json().catch(() => ({})); 
}

/**
 * This function retrieves the representatives of a specific department.
 * @param departmentKey Key or parameter to query by department
 */
export async function getRepresentatives(departmentKey: String): Promise<Representative[]> {
    const response = await fetch(api_endpoint + representatives_endpoint + `?department=${departmentKey}`);

    if (!response.ok) {
        throw new Error(`Error in getRepresentatives, name: ${response.status}, message: ${response.statusText}.`);
    }

    return response.json().catch(() => ({}));
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
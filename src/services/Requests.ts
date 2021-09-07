/**
 * Main file for handling requests.
 * @author Giuseppe Del Campo
 */

/* Models */
import OldDegree from '../models/Degree';
import OldCourse from '../models/Course';
import Admin from '../models/Admin';
import Service from '../models/Service';
import Contributor from '../models/Contributor';
import Faq from '../models/Faq';
import NetworkMember from '../models/NetworkMember';
import Rule from '../models/Rule';

/* Updated models */
import { Department, Degree, VerboseDegree, CourseDegree, Representative } from '../models/Models';

/* Data (this will be replaced by api soon) */
import data from '../data/Data.json';
import extraGroups from '../data/ExtraGroups.json';
import serviceData from '../data/Services.json';
import Contributors from '../data/Contributors.json';
import Faqs from '../data/Faqs.json';
import NetworkMembers from '../data/NetworkMembers.json';
import Rules from '../data/Rules.json';
import UniversityLinks from '../data/UniversityLinks.json';

/* Endpoints */
const api_endpoint = 'https://api.studentiunimi.it/api';
const departments_endpoint = '/departments';
const degrees_endpoint = '/degrees';
const degree_endpoint = '/degree';
const courses_endpoint = '/courses';
const representatives_endpoint = '/representatives';
const typingDegrees_endpoint = '/typing-degrees';

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
};

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
};

/**
 * This function retrieves the existing departments.
 */
export async function getDepartments(): Promise<Result<Department[]>> {
    return getAsync<Department[]>(api_endpoint + departments_endpoint);
};

/**
 * IN PROGRES: This function retrieves existing degrees (search-box api).
 */
export async function getDegreesForSearchBox(): Promise<Result<Degree[]>> {
    return getAsync<Department[]>(api_endpoint + degrees_endpoint);
};

/**
 * This function retrieves the degrees of a specific department.
 * @param departmentKey Key or parameter to query by department
 */
export async function getDegrees(departmentKey: string): Promise<Result<Degree[]>> {
    return getAsync<Degree[]>(`${api_endpoint}${degrees_endpoint}?dep_id=${departmentKey}`);
};

/**
 * This function retrieves the courses of a specific degree.
 * @param degreeKey Key or parameter to query by degree
 */
export async function getCourses(degreeKey: string): Promise<Result<CourseDegree[]>> {
    return getAsync<CourseDegree[]>(`${api_endpoint}${courses_endpoint}?deg_id=${degreeKey}`);
};

/**
 * This function retrieves the representatives of a specific department.
 * @param departmentKey Key or parameter to query by department
 */
export async function getRepresentatives(departmentKey: string): Promise<Result<Representative[]>> {
    return getAsync<Representative[]>(`${api_endpoint}${representatives_endpoint}?dep_id=${departmentKey}`);
};

/**
 * This function retrieves a degree filtering by slug.
 * @param degreeSlug Slug of the degree
 */
export async function getVerboseDegree(degreeSlug: string): Promise<Result<VerboseDegree>> {
    return getAsync<VerboseDegree>(`${api_endpoint}${degree_endpoint}?slug=${degreeSlug}`);
};

/**
 * This function retrieves an array of string referred to Degree names (used in Homepage).
 */
export async function getStringDegrees(): Promise<Result<string[]>> {
    return getAsync<string[]>(`${api_endpoint}${typingDegrees_endpoint}`)
};

/* ----------------------------------------------------------- */

/* Temporary function to retrieve degree informations. */
export const getDegreeInformations = (degreeSlug: string): any[] => {
    return getAllCdls().filter(x => x.id === degreeSlug)[0]?.redirects ?? [];
};

/* Temporary function to retrieve degree admins. */
export const getDegreeAdmins = (degreeSlug: string): Admin[] => {
    return getAllCdls().filter(x => x.id === degreeSlug)[0]?.admins ?? [];
};

/* Temporary function to retrieve University Links */
export const getUniversityLinks = (): any[] => {
    return UniversityLinks ?? [];
};

export const getExtraGroups = () => extraGroups;

export const getServices = (): Service[] => serviceData;

export const getAllCdls = (): OldDegree[] => ([] as OldDegree[]).concat(...(data.departments.map(x => x.cdls as any as OldDegree[])));

export const getContributors = (): Contributor[] => Contributors;

export const getAdmins = (): Admin[] => ([] as Admin[]).concat(...(getAllCdls().map(x => x.admins as any as Admin[])));

export const getGroupsLength = (): number => extraGroups.length + ([] as OldCourse[]).concat(...getAllCdls().map(x => x.courses as any as OldCourse[])).length;

export const getCdlsLength = (): number => getAllCdls().length;

export const getFaqs = (): Faq[] => Faqs;

export const getNetworkMembers = (): NetworkMember[] => NetworkMembers;

export const getRules = (): Rule[] => Rules;
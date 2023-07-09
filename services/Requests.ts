/**
 * Main file for handling requests.
 * @author Giuseppe Del Campo
 * @author Manuele Lucchi
 */

/* Old Models (to be replaced when remaining APIs are implemented) */
import Service from '../models/Service';
import Contributor from '../models/Contributor';
import Faq from '../models/Faq';
import NetworkMember from '../models/NetworkMember';
import Developer from 'models/Developer';
import UniversityLink from 'models/UniversityLink';
import Group from 'models/Group';
import { DegreeInformation, TempDegree } from 'models/DegreeInformation';

/* Updated models */
import { Department, Degree, VerboseDegree, CourseDegree, Representative, Admin } from '../models/Models';

/* Data (these will be replaced by api soon) */
import groups from '../data/groups/Groups.json';
import announcementsGroups from '../data/groups/Announcements.json';
import studentsAssociations from '../data/groups/StudentsAssociations.json';
import redirectsData from '../data/Services/Redirects.json';
import guidesData from '../data/Services/Guides.json';
import toolsData from '../data/Services/Tools.json';
import Contributors from '../data/Contributors.json';
import Faqs from '../data/Faqs.json';
import NetworkMembers from '../data/NetworkMembers.json';
import Developers from '../data/Developers.json';
import UniversityLinks from '../data/UniversityLinks.json';
import DegreeInformations from '../data/DegreeInformations.json';

/* Endpoints */
const api_endpoint = process.env.NEXT_PUBLIC_API_URL || 'https://api.studentiunimi.it/api';
const departments_endpoint = '/departments';
const degrees_endpoint = '/degrees';
const degree_endpoint = '/degree';
const courses_endpoint = '/courses';
const representatives_endpoint = '/representatives';
const typingDegrees_endpoint = '/typing-degrees';
const searchDegrees_endpoint = '/search-degrees';
const admins_endpoint = '/admins';

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
    try {
        const response = await fetch(path);

        if (!response.ok) {
            return new Result<T>(response.status, undefined, response.statusText);
        }

        let res = await response.json() as T;
        return new Result<T>(200,res);
    } catch(err) {
        console.error(err);
        return new Result<T>(500,undefined);
    }
};

/**
 * This function retrieves the existing departments.
 */
export async function getDepartments(): Promise<Result<Array<Department>>> {
    return getAsync<Array<Department>>(api_endpoint + departments_endpoint);
};

/**
 * This function retrieves the degrees of a specific department.
 * @param departmentKey Key or parameter to query by department
 */
export async function getDegrees(departmentKey: string): Promise<Result<Array<Degree>>> {
    return getAsync<Array<Degree>>(`${api_endpoint}${degrees_endpoint}?dep_id=${departmentKey}`);
};

/**
 * This function retrieves the courses of a specific degree.
 * @param degreeKey Key or parameter to query by degree
 */
export async function getCourses(degreeKey: string): Promise<Result<Array<CourseDegree>>> {
    return getAsync<Array<CourseDegree>>(`${api_endpoint}${courses_endpoint}?deg_id=${degreeKey}`);
};

/**
 * This function retrieves the representatives of a specific department.
 * @param departmentKey Key or parameter to query by department
 */
export async function getRepresentatives(departmentKey: string): Promise<Result<Array<Representative>>> {
    return getAsync<Array<Representative>>(`${api_endpoint}${representatives_endpoint}?dep_id=${departmentKey}`);
};

/**
 * This function retrieves a degree filtering by slug.
 * @param degreeSlug Slug of the degree
 */
export async function getVerboseDegreeBySlug(degreeSlug: string): Promise<Result<VerboseDegree>> {
    return getAsync<VerboseDegree>(`${api_endpoint}${degree_endpoint}?slug=${degreeSlug}`);
};

/**
 * This function retrieves a degree filtering by ID.
 * @param degreeID ID of the degree
 */
 export async function getVerboseDegreeByID(degreeID: string): Promise<Result<VerboseDegree>> {
    return getAsync<VerboseDegree>(`${api_endpoint}${degree_endpoint}?pk=${degreeID}`);
};

/**
 * This function retrieves an array of string referred to Degree names (used in Homepage).
 */
export async function getStringDegrees(): Promise<Result<Array<String>>> {
    return getAsync<Array<String>>(`${api_endpoint}${typingDegrees_endpoint}`)
};

/**
 * This function retrieves existing degrees (search-box api).
 */
 export async function getDegreesForSearchBox(searchText: string): Promise<Result<Degree[]>> {
    return getAsync<Array<Degree>>(`${api_endpoint}${searchDegrees_endpoint}?q=${searchText}`);
};

/**
 * This function retrieves admins of a certain degree.
 */
export async function getDegreeAdmins(degreeSlug: string): Promise<Result<Array<Admin>>> {
    return getAsync<Array<Admin>>(`${api_endpoint}${admins_endpoint}?slug=${degreeSlug}`);
};



/* -------- STATIC DATA -------- */

/* Homepage section */
export const getContributors = (): Array<Contributor> => Contributors; // not used at the moment

export const getFaqs = (): Array<Faq> => Faqs;

/* Courses section - Degree informations (static data at the moment) */
const getTempDegrees = (): Array<TempDegree> => DegreeInformations;
export const getDegreeInformations = (degreeSlug: string): Array<DegreeInformation> => (getTempDegrees()).find((tempDegree: TempDegree) => tempDegree.slug === degreeSlug)?.degreeInformations ?? [];

/* Groups section */
export const getGroups = (): Array<Group> => groups;

export const getGroupsAnnouncements = (): Array<Group> => announcementsGroups;

export const getStudentsAssociations = (): Array<Group> => studentsAssociations;

/* Services section */
export const getRedirects = (): Array<Service> => redirectsData;

export const getGuides = (): Array<Service> => guidesData;

export const getTools = (): Array<Service> => toolsData;

/* University section */
export const getUniversityLinks = (): Array<UniversityLink> => UniversityLinks;

/* Organization section */
export const getNetworkMembers = (): Array<NetworkMember> => NetworkMembers;

export const getDevelopers = (): Array<Developer> => Developers
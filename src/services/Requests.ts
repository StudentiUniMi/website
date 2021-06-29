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

export const getExtraGroups = () => extraGroups;

export const getDepartments = (): Department[] => data.departments as any as Department[];

export const getServices = (): Service[] => serviceData;

export const getRepresentatives = (departmentId:string): Representative[] => (data.departments.filter(x => x.id === departmentId)[0]?.representatives ?? []);

export const getAllCdls = (): Degree[] => ([] as Degree[]).concat(...(data.departments.map(x => x.cdls as any as Degree[])));

export const getContributors = (): Contributor[] => Contributors;

export const getAdmins = (): Admin[] => ([] as Admin[]).concat(...(getAllCdls().map(x => x.admins as any as Admin[])));

export const getGroupsLength = (): number => extraGroups.length + ([] as Course[]).concat(...getAllCdls().map(x => x.courses as any as Course[])).length;

export const getCdlsLength = (): number => getAllCdls().length;

export const getFaqs = (): Faq[] => Faqs;

export const getCanMembers = (): CanMember[] => CanMembers;
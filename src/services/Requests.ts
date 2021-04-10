import data from '../data/Data.json';
import extraGroups from '../data/ExtraGroups.json';
import Degree from '../models/Degree';
import Admin from '../models/Admin';
import Department from '../models/Department';
import Representative from '../models/Representative';
import Service from '../models/Service';
import serviceData from '../data/Services.json';
import Contributor from '../models/Contributor';
import contributors from '../data/Contributors.json';

export const getExtraGroups = () => extraGroups;

export const getDepartments = (): Department[] => data.departments as any as Department[];

export const getServices = (): Service[] => serviceData;

export const getRepresentatives = (departmentId:string): Representative[] => (data.departments.filter(x => x.id === departmentId)[0]?.representatives ?? []);

export const getAllCdls = (): Degree[] => ([] as Degree[]).concat(...(data.departments.map(x => x.cdls as any as Degree[])));

export const getContributors = (): Contributor[] => contributors;

export const getAdmins = (): Admin[] => ([] as Admin[]).concat(...(getAllCdls().map(x => x.admins as any as Admin[])));
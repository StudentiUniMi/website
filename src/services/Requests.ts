import extraGroups from '../data/ExtraGroups.json';
import data from '../data/Data.json';
import Department from '../models/Department';
import Service from '../models/Service';
import HomeLink from '../models/HomeLink';
import Representative from '../models/Representative';
import serviceData from '../data/Services.json';
import homeLinksData from '../data/HomeLinks.json';
import Degree from '../models/Degree';

export const getExtraGroups = () => extraGroups;

export const getDepartments = (): Department[] => data.departments as any as Department[];

export const getServices = (): Service[] => serviceData;

export const getHomeLinks = (): HomeLink[] => homeLinksData;

export const getRepresentatives = (departmentId:string): Representative[] => (data.departments.filter(x => x.id === departmentId)[0]?.representatives ?? []);

export const getAllCdls = (): Degree[] => ([] as Degree[]).concat(...(data.departments.map(x=>x.cdls as any as Degree[])));
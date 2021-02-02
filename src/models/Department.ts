import Degree from "./Degree";
import Person from "./Person";

export default interface Department
{
    id: string,
    name?: string,
    description?: string,
    icon?: string,
    representatives: Person[],
    cdls: Degree[]
}
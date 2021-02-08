import Degree from "./Degree";
import Representative from "./Representative";

export default interface Department
{
    id: string,
    name?: string,
    description?: string,
    icon?: string,
    representatives: Representative[],
    cdls: Degree[]
}
import Course from "./Course";
import Admin from "./Admin";

export default interface Degree
{
    id: string,
    name?: string,
    description?: string,
    admins?: Admin[],
    courses: Course[]
}
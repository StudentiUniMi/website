import Course from "./Course";

export default interface Degree
{
    id: string,
    name?: string,
    description?: string,
    courses: Course[]
}
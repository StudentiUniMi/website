import Course from "./Course";
import Admin from "./Admin";
import Redirect from "./Redirect";

export default interface Degree
{
    id: string,
    name?: string,
    description?: string,
    icon?: string,
    redirects?: Redirect[],
    admins?: Admin[],
    courses: Course[],
    is_master: boolean,
    has_years: boolean
}
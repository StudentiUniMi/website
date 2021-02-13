import Course from "./Course";
import Admin from "./Admin";

export default interface Degree
{
    id: string,
    name?: string,
    description?: string,
    main_website?: string,
    server_discord?: string,
    manifest?: string,
    virtual_classroom?: string,
    admins?: Admin[],
    courses: Course[],
    is_master: boolean,
    has_years: boolean
}
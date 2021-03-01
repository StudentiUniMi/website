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

/*
{
    "id": "",
    "name": "",
    "description": "",
    "main_website": "",
    "server_discord": "",
    "manifest": "",
    "virtual_classroom": "",
    "admins": [
    ],
    "courses": [],
    "is_master": false,
    "has_years": true
}
*/
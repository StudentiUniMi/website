<img src="public/logo/unimi500.png" width="120" height="120" align="right" />

# [studentiunimi.it](https://studentiunimi.it/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) 
[![GitHub contributors](https://badgen.net/github/contributors/StudentiUniMi/website)](https://GitHub.com/StudentiUniMi/website/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/StudentiUniMi/website)](https://github.com/StudentiUniMi/website/issues/)
[![telegram](./public/svg/telegram.svg)](https://t.me/studenti_unimi) 
[![React](./public/svg/react.svg)](https://it.reactjs.org/) 
[![typescript](./public/svg/typescript.svg)](https://www.typescriptlang.org/) 

[studentiunimi.it](https://studentiunimi.it/) is a fully responsive website built with React and [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/), with the aim of providing services and access to all groups of didactic courses and general purposes to students of the [University of Milan](https://www.unimi.it/). This website displays data and interacts with a database thanks to the APIs made available by the [backend](https://github.com/StudentiUniMi/backend).

![preview](https://user-images.githubusercontent.com/52317197/169861477-0b81f4ae-8c49-4a0b-8e23-a75bb9107ae6.png)

# Features ✨
## Dark Theme 🌚
What world would it be without a dark mode?

![dark theme](https://user-images.githubusercontent.com/52317197/177864085-5764fc13-9657-45f3-bba5-48bd9edce863.png)

## Localization 🌍
Localization is crucial for a website that can be used by international students; we make it available without further page loads.

![localization](https://user-images.githubusercontent.com/52317197/177864684-6def6e5e-2fda-46e2-9435-2e5801db024f.png)

## Color Themes 🍭
Infinite possibilities for multi-color palette usage.

![palette](https://user-images.githubusercontent.com/52317197/177862579-77602480-a180-4ffd-bc8a-6f9df14f337a.png)

## [APIs Usage Service](https://github.com/StudentiUniMi/website/blob/master/src/services/Requests.ts) 🐝
Simple service to create requests and handle APIs responses.

```typescript
/**
 * Class to build response
 */
class Result<T>
{
    public status:number;
    public value?:T;
    public message:string;

    constructor(status: number, value?:T, message:string = "")
    {
        this.status = status;
        this.value = value;
        this.message = message;
    }
};
```

```typescript
/**
 * Main function to retrieve data from endpoints.
 * @param {string} path Path of the resource
 */
async function getAsync<T>(path: string) : Promise<Result<T>>
{
    try {
        const response = await fetch(path);

        if (!response.ok) {
            return new Result<T>(response.status, undefined, response.statusText);
        }

        let res = await response.json() as T;
        return new Result<T>(200,res);
    } catch(err) {
        console.error(err);
        return new Result<T>(500,undefined);
    }
};
```

Example of academic courses retrieve:

```typescript
/**
 * This function retrieves the courses of a specific degree.
 * @param {string} degreeKey
 */
export async function getCourses(degreeKey: string): Promise<Result<CourseDegree[]>> {
    return getAsync<CourseDegree[]>(`${api_endpoint}${courses_endpoint}?deg_id=${degreeKey}`);
};
```

## Main links of [StudentiUnimi Network](https://github.com/StudentiUnimi)
- 🛫 [Telegram channel](https://t.me/studenti_unimi) (You can find everything here);
- 📝 [Groups](https://studentiunimi.it/courses/) (You can find all our groups here);
- 👨‍👨‍👦 [Main group](https://t.me/unimichat) (Here you can talk about anything related to our University)
- 📮 [Rules of Telegram groups](https://studentiunimi.it/rules/) (Read before using any of our groups);
- 📖 [Wiki](https://wiki.studentiunimi.it/) (Resource to exchange useful materials about teaching courses);
- 👁‍🗨 [Services and guides](http://unimia.studentiunimi.it/) (How to download video lessons from Ariel, Unsubscribe from webmail lists, Unimia, Sifa Services, Webmail, Student Portal, Virtual classroom, etc.);
- 👨‍💻 [University related informations](https://studentiunimi.it/representatives/) (Useful informations about our University and Representatives list).

> The network and its website are not affiliated with the University of Milan.

## Contributors
<a href="https://github.com/StudentiUniMi/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=StudentiUniMi/website" />
</a>

export default interface Website {
    link?:string,
    etichetta?:string
}

export default interface Course
{
    id?:string,
    cdl?: string,
    name?:string,
    anno?:number|string,
    semestre?:number,
    cfu?:number,
    gruppo?:string,
    websites:any[],
    drive?:string,
    wiki?:string,
}
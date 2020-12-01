export default interface Website {
    link?:string,
    etichetta?:string
}

export default interface Course
{
    name?:string,
    anno?:string,
    semestre?:string,
    cfu?:string,
    gruppo?:string,
    websites:any[],
    faq?:string,
}
export interface ProjectProps {
    title:string,
    tagline:string,
    description:string,
    thumbnail:string,
    cover:string,
    addl:string[],
    link:string
}

export default function Project(props:ProjectProps) {
    return (<div className="project-page">
        <h1>{props.title}</h1>
        <p>{props.tagline}</p>
    </div>
    );
}
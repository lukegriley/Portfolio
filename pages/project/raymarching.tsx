import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { fetchProjectsDataById } from "@/utils/projectsparser";
import { ProjectProps } from "../components/project";
import "@/styles/projectpage.css"
import "@/app/globals.css"
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import CircleCursor from "../components/circlecursor";
import VideoPlayer from "../components/videoplayer";

export default function Page() {
  // const router = useRouter();
  // const projectId  = router.query.projectId;
  // const params = useParams<{projectId:string}>();
  const params = useParams();
  
  const [project, setProject] = useState<ProjectProps | null>(null);
  
  useEffect(() => {
      fetchProjectsDataById('raymarching', setProject);
  }, []);
    if(project==null){
        return(<h1>Project ID not found.</h1>);
    } 
    else {
  return ( <div>
      <CircleCursor/>
      <Navbar collapse={false}/>
      <div className="project-body">
      <img src={project.cover} alt="Project Cover" />
      <h1 className="proj-title">{project.title}</h1>
      <p className="proj-tagline">{project.tagline}</p>
      <strong><a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-link hoverable">Link to repo</a></strong>
      <br/>
      <br/>
      <div className="proj-desc">
        Ray marching is very cool. I've been playing around with <u><a href="https://www.shadertoy.com/">Shader Toy</a></u> a lot recently,
        and often find that the most eye-capturing visuals on the home page involve some form of ray marching. And why wouldn't they?
        Volumetric rendering (clouds, smoke), fractals, procedural generation, implicit surface rendering can all be achieved with (relative) ease 
        using ray marching. 
        <br />
        <br />
        I started this project by seeing what I could make with raymarching alone. Using my <u><a href="https://lukeriley.io/project/rasterizer">real-time template</a></u>,
        I chose to write my raymarching code in my texture shader, which would normally sample from a render buffer and apply post-processing effects. This is because I could 
        calculate the ray directions based on UV coordinates, not any virtual camera. I would come to change this later on in the project. Anyway, here are some visuals I was able to create
        fairly simply (adding mod, sine functions, and movement of the origin where I thought interesting).

        <br/>
        <VideoPlayer src={"https://i.imgur.com/OOO3dhK.mp4"}></VideoPlayer>
        <br/>
        [1/11/24: This project (and writeup) is still in progress. Come back later this week for info on integration into the pipeline!]
      </div>
      <br/>
      
      {project.addl &&
          project.addl.map((additionalImage, index) => (
            <img className="addl-img" key={index} src={additionalImage} alt={`Additional Image ${index + 1}`}/>
      ))}
      </div>
    </div>)
    }
      
     
  }
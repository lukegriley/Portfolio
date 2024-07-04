import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { fetchProjectsDataById } from "@/utils/projectsparser";
import { ProjectProps } from "../components/project";
import "@/app/globals.css"
import "@/styles/projectpage.css"
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import Bars from "../components/bars";
import Navs from "../components/Nav";
import CircleCursor from "../components/circlecursor";
import VideoPlayer from "../components/videoplayer";

export default function Page() {
  const params = useParams();
  
  const [project, setProject] = useState<ProjectProps | null>(null);
  
  useEffect(() => {
      fetchProjectsDataById('physics', setProject);
  }, []);
    if(project==null){
        return(<h1>Project ID not found.</h1>);
    } 
    else {
      return ( <div>
        <Bars/>
        <div className="inside">
        <Navs selected={0}/>
        <br></br>
        <div className="project-body">
        <iframe src="https://drive.google.com/file/d/1hkqQdZKfSBudEc16rXedYG5Sh09-pvr1/preview" width="640" height="360" allow="autoplay"></iframe>
    <h1 className="proj-title">{project.title}</h1>
    <p className="proj-tagline">{project.tagline}</p>
    <strong><a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-link hoverable">Link to repo</a></strong>
    <br/>
    <br/>
    <div className="proj-desc">
     A generalized improvement on my Finite Element Method project for CSCI 2240. Check out the repo + video, linked above!
     <br/><br/> This is an ongoing side project for me. Improvement are coming in the following weeks - I would love to port this to WebGL!
    </div>
    <br/>
    
    {project.addl &&
        project.addl.map((additionalImage, index) => (
          <img className="addl-img" key={index} src={additionalImage} alt={`Additional Image ${index + 1}`}/>
    ))}
    </div>
        </div>
      </div>)
    }
      
    
  }
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { fetchProjectsDataById } from "@/utils/projectsparser";
import { ProjectProps } from "../components/project";
import "@/styles/projectpage.css"
import "@/app/globals.css"
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import CircleCursor from "../components/circlecursor";

export default function Page() {
  // const router = useRouter();
  // const projectId  = router.query.projectId;
  // const params = useParams<{projectId:string}>();
  const params = useParams();
  
  const [project, setProject] = useState<ProjectProps | null>(null);
  
  useEffect(() => {
      fetchProjectsDataById('quakeclone', setProject);
  }, []);
    if(project==null){
        return(<h1>Project ID not found.</h1>);
    } 
    else {
  return ( <div>
      <CircleCursor/>
      <Navbar collapse={false}/>
      <div className="project-body">
      <iframe src="https://drive.google.com/file/d/1oyknDe_eDyTXVMn1sffx-3-eQqQfbj4V/preview" width="1280" height="720" allow="autoplay"></iframe>  
      <h1 className="proj-title">{project.title}</h1>
      <p className="proj-tagline">{project.tagline}</p>
      <strong><a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-link hoverable">Link to repo</a></strong>
      <br/>
      <br/>
      <p dangerouslySetInnerHTML={{ __html: project.description }} />
      <br/>
      
      {project.addl &&
          project.addl.map((additionalImage, index) => (
            <img className="addl-img" key={index} src={additionalImage} alt={`Additional Image ${index + 1}`}/>
      ))}
      </div>
    </div>)
    }
      
     
  }
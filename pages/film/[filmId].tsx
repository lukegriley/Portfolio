import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { fetchFilmDataById, fetchProjectsDataById, FilmProps } from "@/utils/projectsparser";
import { ProjectProps } from "../components/project";
import "@/styles/filmpage.css"
import "@/app/globals.css"
import { useRouter } from "../node_modules/next/router";
import { useParams } from "../node_modules/next/navigation";
import CircleCursor from "../components/circlecursor";

export default function Page() {
  // const router = useRouter();
  // const projectId  = router.query.projectId;
  // const params = useParams<{projectId:string}>();
  const params = useParams();
  const filmId: string | null = params?.filmId || null;
  
  const [project, setProject] = useState<FilmProps | null>(null);
  
  useEffect(() => {
    if (filmId) {
      fetchFilmDataById(filmId, setProject);
    }
  }, [filmId]);
    if(project==null){
        return(<h1>Film ID not found.</h1>);
    } 
    else {
  return ( <div>
      <CircleCursor/>
      <Navbar collapse={false}/>
      <div className="project-body">
      
      <h1 className="proj-title">{project.title}</h1>
      <p className="proj-tagline">{project.role}</p>
      <div dangerouslySetInnerHTML={{ __html: project.embed }}></div>
      <br/>
      <h3 className="proj-desc">{project.description}</h3>
      <br/>
      
      </div>
    </div>)
    }
      
     
  }
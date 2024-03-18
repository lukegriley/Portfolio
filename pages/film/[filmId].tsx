import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { fetchFilmDataById, fetchProjectsDataById, FilmProps } from "@/utils/projectsparser";
import { ProjectProps } from "../components/project";
import Navs from "../components/Nav";
import Bars from "../components/bars";
import "@/styles/filmpage.css"
import "@/app/globals.css"
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

export default function Page() {
  // const router = useRouter();
  // const projectId  = router.query.projectId;
  // const params = useParams<{projectId:string}>();
  const params = useParams();
  const filmId: string | string[] | null = params?.filmId || null;
  
  const [project, setProject] = useState<FilmProps | null>(null);
  
  useEffect(() => {
    if (typeof filmId==='string') {
      fetchFilmDataById(filmId, setProject);
    }
  }, [filmId]);
    if(project==null){
        return(<h1>Film ID not found.</h1>);
    } 
    else {
  return ( <div>
      <Bars/>
      <div className="inside">
      <Navs selected={0}/>
      <div className="project-body">
      
      <h1 className="proj-title">{project.title}</h1>
      <p className="proj-tagline">{project.role}</p>
      <div dangerouslySetInnerHTML={{ __html: project.embed }}></div>
      <br/>
      <h3 className="proj-desc">{project.description}</h3>
      <br/>
      </div>
      </div>
    </div>)
    }
  }
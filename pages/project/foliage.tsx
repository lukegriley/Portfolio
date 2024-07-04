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
      fetchProjectsDataById('foliage', setProject);
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
    <img src={project.cover} alt="Project Cover" width={500}/>
    <h1 className="proj-title">{project.title}</h1>
    <p className="proj-tagline">{project.tagline}</p>
    <strong><a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-link hoverable">Link to repo</a></strong>
    <br/>
    <br/>
    <div className="proj-desc">
     The world of physically-based rendering has dedicated a large body of work to simulating plant life. Proper physics and rendering of foliage is important
     for photorealistic rendering in VFX and games, as well as an integral source of training data for agricultural technology. For my group's final project in 
     CSCI 2240 - Advanced Computer Graphics, we sought to simulate a plant's full lifecycle, staying as true as possible to both its biological functions and anatomical structure.
     In the end, we were able to simulate the full lifecycle and physics of multiple kinds of foliage. We based part of our work on <a href={"https://dl.acm.org/doi/pdf/10.1145/3610548.3618218"} >Maggioli et al. (2023)</a>

      <br />
      <br/>
      As an overview, our simulation is derived from two parts. The first attempts to model the relative water content across the plant using a diffusion-based fluid simulation. 
      The second part uses a PBD (Position-Based Dynamics) physics solver to simulate its physical properties, changing elasticity based on the relative water content in each part of the plant.
      <br />
      <br/>
      To accomplish the diffusion model, we split plant geometry into discrete nodes and edges. Each node is approximated as a cylinder - its 
      initial water content is equal to its volume, and its water loss rate (representative of evaporation, if it is a leaf) is based on its surface area. 
      As the simulation runs, leaf nodes experience evaporation, drawing fluid from neighboring nodes and causing water to run up the plant. 
      To calculate this analytically, we created a dense matrix S based on initial water content, loss rate, and flow resistance. We can solve for water content at time t using
      a matrix exponential of S. However, this is computationally expensive, so instead of using a closed solution, we implemented a sparse linear system. You can read more about how we did this in <a href={"https://docs.google.com/presentation/d/1lH1Wb7QXo5G1ScPoZ1s3_hLIU3m5K-Tay6ghRCXKeso/edit?usp=sharing"}>our presentation</a>.
      <br />
      <img src={"https://i.imgur.com/NFVMPTY.png"} width={300}/><img src={"https://i.imgur.com/JfAJkR6.png"} width={300}/>
      <br />
      After simulating water diffusion across the plant, the only thing left to do is calculate and animate the variable elasticity of the plant geometry based on its water content
      Macklin et al.'s paper (<a href={"https://matthias-research.github.io/pages/publications/XPBD.pdf"}>XPBD: Position-Based Simulation of Compliant Constrained Dynamics</a>) was integral to accomplish this.
      We approximated plant geometry as stiff rods with elasticity inversely proportional to water content, as a wilting plant would be. Again, for efficiency's sake,
      we exploited the sparseness of the system to find a faster convergence (also, again, read more about this in our presentation!)
      
      <img src={"https://i.imgur.com/2OPhZQs.png"} width={500}/>

      <br />
      <br/>
      
       <iframe src="https://drive.google.com/file/d/1CdBOXmepORQDpuiTANxQhL_2tWIa-Lw0/preview" width="640" height="480" allow="autoplay"></iframe>
      <br/>
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
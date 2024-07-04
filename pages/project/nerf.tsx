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
      fetchProjectsDataById('nerf', setProject);
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
     <iframe src="https://drive.google.com/file/d/1gYnKbRWSUzoCDutjleLkuXslA9Xq-Nbk/preview" width="850" height="480" allow="autoplay"></iframe>
    <h1 className="proj-title">{project.title}</h1>
    <p className="proj-tagline">{project.tagline}</p>
    <strong><a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-link hoverable">Link to repo</a></strong>
    <br/>
    <br/>
    <div className="proj-desc">
     For my final project in CSCI 1430 - Computer Vision, my group and I wanted to implement some form of 3D reconstruction
     using uncalibrated image sequences. As a hot topic in computer graphics (and a very active research in the Brown Visual Computing Lab!), we decided on neural radiance fields. 
     <a href={"https://www.matthewtancik.com/nerf"} >The original paper was released in 2020</a>. I will spare a detailed explanation of its structure - in essence neural radiance fields generate novel views from calibrated image sequences using raycasting and volumetric rendering.
     A keyword for us is <strong>calibrated</strong> views. Since our goal was reconstruction using uncalibrated image sequences, our pipeline had to include a previous part 
     to estimate the camera pose of each image before we could generate our dataset. For this we used the open-source SfM library Colmap. Structure-from-motion works by identifying key 3D points across
     multiple overlapping images to estimate the camera poses. After calculating camera pose data, we created a dataset for our own NeRF model written in PyTorch. A typical NeRF dataset is a collection of rays representing each pixel in each image. Each ray contains 3 pieces of information:
     Ray origin (camera position), ray direction (from camera to pixel), and RGB color values. From this, NeRF is generate novel views by interpolating ray data through raycasting and volumetric rendering.
     
     <br/>
     <br/>
     You can see our <a href={"https://drive.google.com/file/d/1SbmAs34mVpoV7KQk_S-l2syD_132uBps/view?usp=sharing"}>final presentation poster here</a>.
     <br/>
     You can also read our <a href={"https://drive.google.com/file/d/1B6slcSrd4Co6t-NUe72se0GMu8MOaIpG/view?usp=sharing"}>write-up, including our entire technical process, here</a>.
        <br/><br/>
      Many improvements and optimizations have been made to neural fields since the original 2020 paper that we implemented. When generating novel views 
      from our own datasets, we often only had the time/resources to train for a single epoch at a few thousand iterations. Nevertheless, we were able to generate some 
      eye-popping visuals, which I will charmingly call "lo-fi." Below is an animation generated from around 40 images of my wonderful father. The next is generated from only 8(!) images of the statue in front of the Sharpe Refectory on Brown's campus.
      <br/>
      <br/>
      <iframe src="https://drive.google.com/file/d/1phiHxgqyPSa668nE93m2PcmAm9bLxALz/preview" width="640" height="360" allow="autoplay"></iframe>
      <br/>
      <iframe src="https://drive.google.com/file/d/1kCpfZjRqDqFpcVqg1OlvQP3-AFOSJ414/preview" width="640" height="360" allow="autoplay"></iframe>
      <br />
      <br/>
      
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
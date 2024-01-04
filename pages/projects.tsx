"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Project, { ProjectProps } from "./components/project";
import { fetchProjectsData, parseProjects } from "../utils/projectsparser";
import "../styles/landing.css";
import "../app/globals.css"
import Link from "@/../node_modules/next/link";
import CircleCursor from "./components/circlecursor";

export default function Projects() {
    const [projects, setProjects] = useState<ProjectProps[] | null>(null);

    useEffect(() => {
      fetchProjectsData(setProjects);
    }, []);
  
    return (
      <div className="landing">
          <CircleCursor/>
        <Navbar collapse={false}/>
        <div className="projectsList">
        {projects &&
          projects.map((project, index) => (
              <Link key={index} href={`/project/${project.id}`}>
            <Project
              key={index}
              title={project.title}
              tagline={project.tagline}
              description={project.description}
              link={project.link}
              addl={project.addl}
              cover={project.cover}
              thumbnail={project.thumbnail}
              id={project.id}
            />
            </Link>
          ))}
      </div>
      </div>
    );
}
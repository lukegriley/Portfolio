"use client";

import React, { useEffect, useState } from "react";
import Project, { ProjectProps } from "./components/project";
import { fetchProjectsData, parseProjects } from "@/utils/projectsparser";
import Link from "next/link";
import CircleCursor from "./components/circlecursor";
// import "@/styles/globals.css"
import "@/app/globals.css"
import "@/styles/project.css"
import Navs from "./components/Nav";
import Bars from "./components/bars";
import Footer from "./footer";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectProps[] | null>(null);

  useEffect(() => {
    fetchProjectsData(setProjects);
  }, []);

  return (
    <div>
      <Bars/>
      <div className="inside">
      <Navs selected={1}/>
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
    </div>
  );
}
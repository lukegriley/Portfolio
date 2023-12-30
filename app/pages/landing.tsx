"use client";

import React, { useEffect, useState } from "react";
import Logo from "./components/logo";
import Project, { ProjectProps } from "./components/project";
import { fetchProjectsData, parseProjects } from "../utils/projectsparser";
import "../styles/landing.css";

export default function LandingPage() {
  const [projects, setProjects] = useState<ProjectProps[] | null>(null);

  useEffect(() => {
    fetchProjectsData(setProjects);
  }, []);

  return (
    <div className="landing">
      <Logo />
      {projects &&
        projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            addl={project.addl}
            cover={project.cover}
            thumbnail={project.thumbnail}
          />
        ))}
    </div>
  );
}

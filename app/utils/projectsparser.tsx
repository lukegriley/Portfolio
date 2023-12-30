import { readFile } from "fs/promises";
import React from "react";
import { ProjectProps } from "../pages/components/project";

export async function parseProjects(jsonFilePath: string):Promise<ProjectProps[] | null> {
    const response = await fetch(jsonFilePath);
    const data:any = await response.json();
    if(data==null || data.projects==null) {
        return null;
    }
    const projects:ProjectProps[] = data.projects;
    return projects;
}

export async function fetchProjectsData(setFunc: React.Dispatch<React.SetStateAction<ProjectProps[] | null>>) {
    try {
      const parsedProjects = await parseProjects("/projects.json");
      setFunc(parsedProjects);
    } catch (error) {
      console.error("Error parsing projects:", error);
    }
  };
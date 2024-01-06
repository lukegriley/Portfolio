import { readFile } from "fs/promises";
import React from "react";
import { ProjectProps } from "../pages/components/project";

export interface FilmProps {
  title:string,
  role:string,
  description:string,
  embed:string,
  id:string,
  thumbnail:string
}

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

export async function fetchProjectsDataById(id:string, setFunc: React.Dispatch<React.SetStateAction<ProjectProps | null>>) {
  try {
    const parsedProjects = await parseProjects("/projects.json");

    if (parsedProjects && id) {
      const matchingProject = parsedProjects.find(project => project.id === id);
      setFunc(matchingProject || null);
    }
  } catch (error) {
    console.error("Error parsing projects:", error);
  }
};

export async function parseFilms(jsonFilePath: string):Promise<FilmProps[] | null> {
  const response = await fetch(jsonFilePath);
  const data:any = await response.json();
  console.log("after data",data);
  if(data==null || data.films==null) {
      return null;
  } 
  const projects:FilmProps[] = data.films;
  return projects;
}

export async function fetchFilmData(setFunc: React.Dispatch<React.SetStateAction<FilmProps[] | null>>) {
  try {
    const parsedProjects = await parseFilms("/films.json");
    console.log("after awaing",parsedProjects);
    setFunc(parsedProjects);
  } catch (error) {
    console.error("Error parsing projects:", error);
  }
};

export async function fetchFilmDataById(id:string, setFunc: React.Dispatch<React.SetStateAction<FilmProps | null>>) {
try {
  const parsedProjects = await parseFilms("/films.json");

  if (parsedProjects && id) {
    const matchingProject = parsedProjects.find(project => project.id === id);
    setFunc(matchingProject || null);
  }
} catch (error) {
  console.error("Error parsing projects:", error);
}
};


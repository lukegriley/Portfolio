"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Project, { ProjectProps } from "./components/project";
import { fetchFilmData, fetchProjectsData, FilmProps, parseProjects } from "@/utils/projectsparser";
import "@/styles/landing.css";
import "@/app/globals.css"
import Link from "next/link";
import CircleCursor from "./components/circlecursor";
import Bars from "./components/bars";
import Navs from "./components/Nav";
import Footer from "./footer";

export default function Projects() {
  const [films, setFilms] = useState<FilmProps[] | null>(null);

  useEffect(() => {
    fetchFilmData(setFilms);
    console.log(films);
  }, []);

  return (
    <div className="landing">
      <Bars/>
      <div className="inside">
      <Navs selected={2}/>
      <div className="projectsList">
        
      {films &&
        films.map((film, index) => (
          <Link key={index} href={`/film/${film.id}`}>
          <Project
            key={index}
            title={film.title}
            tagline={film.role}
            description={" "}
            link={" "}
            addl={[""]}
            cover={" "}
            thumbnail={film.thumbnail}
            id={film.id}
          />
          </Link>
        ))}
    </div>
    <Footer/>
    </div>
    </div>
  );
}
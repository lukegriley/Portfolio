"use client";
import CircleCursor from "./components/circlecursor";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Project, { ProjectProps } from "./components/project";
import { fetchProjectsData, parseProjects } from "@/utils/projectsparser";
import "@/styles/landing.css";
import Link from "next/link";
import Logo from "./components/logo";
import CV from "./cv";

export default function LandingPage() {

  useEffect(() => {
  }, []);

  return (
    <div className="landing">
      <CircleCursor/>
      <Navbar collapse={true}/>
      <div className="center-content">
      <div className="title">
      <h1 className="name-title">LUKE RILEY</h1>
      </div>
      <div className="scroll">
    <p className="solid-scroll">
        COMPUTER SCIENCE &amp;{' '}<span className="stroke-scroll">MODERN CULTURE &amp;</span><span className="second-scroll"> MEDIA &amp;{' '}</span>
        COMPUTER SCIENCE &amp;{' '}<span className="stroke-scroll">MODERN CULTURE &amp;</span><span className="second-scroll"> MEDIA &amp;{' '}</span>
    </p>
</div>

      </div>
      <div className="middle">
      <div className="intro">
        <p>I&apos;m a fourth-year student at Brown University double concentrating Computer Science and Modern Culture &amp; Media. I'm interested in software development, computer graphics, data science, and making movies :) This portfolio showcases my work in all areas. </p>
      </div>
      <div className="cv-hint">
        {/* <strong className="exp-hint hoverable">EXPERIENCE</strong> */}
        {/* <FaAngleDoubleDown/> */}
      </div>
      </div>
    </div>
  );
}

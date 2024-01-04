"use client";
import CircleCursor from "./components/circlecursor";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Project, { ProjectProps } from "./components/project";
import { fetchProjectsData, parseProjects } from "../utils/projectsparser";
import "../styles/landing.css";
import Link from "@/node_modules/next/link";
import Logo from "./components/logo";

export default function LandingPage() {

  useEffect(() => {
  }, []);

  return (
    <div className="landing">
      <CircleCursor/>
      <Navbar collapse={true}/>
      <div className="center-content">
      <div className="title">
      <h1 className="name-title">Luke Riley</h1>
      </div>
      <div className="scroll">
      <p className="solid-scroll">
        Computer Science  &amp; {' '}
        <span className="stroke-scroll">Modern Culture &amp;</span>{' '}
        <span className="second-scroll"> Media &amp;</span>{' '}
        Computer Science  &amp; {' '}
        <span className="stroke-scroll">Modern Culture &amp;</span>{' '}
        <span className="second-scroll"> Media &amp;</span>{' '} 
    </p>
        </div>
      </div>
    </div>
  );
}

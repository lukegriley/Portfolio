import React from "react";
import "@/app/globals.css"
import CircleCursor from "./components/circlecursor";
import "@/styles/cv.css"
import Navbar from "./components/navbar";

export default function CV() {
  return (
    <>
    <Navbar collapse={false}/>
    <CircleCursor/>
    <div className="cvbody">
      <h1>LUKE G. RILEY</h1>
      <section>
        <h2>EDUCATION</h2>
            <h3>Brown University, Providence, RI</h3>
            <ul>
              <li>A.B., expected May 2025; GPA 3.91</li>
              <li>Double concentrations in Computer Science and Modern Culture & Media</li>
            </ul>
            <h3>Harvard-Westlake School, Los Angeles, CA</h3>
            <ul className="bullet">
              <li>Class of 2021; Cum Laude; GPA 4.5</li>
            </ul>
      </section>

      <section>
        <h2>MEDIA &amp; BUSINESS EXPERIENCE</h2>

        <h3>PBS Distribution, Arlington, VA</h3>
        <p>Content and Operations Intern | June - July 2023</p>
        <ul className="bullet">
          <li>Participated in activities across content teams, including tracking acquisitions, production status, release schedules, and distribution planning.</li>
          <li>Provided editorial coverage, including screening of projects in consideration and comments on the same.</li>
          <li>Participated in content reviews, pitch, and partnership meetings with filmmakers, producers, and distributors.</li>
          <li>Reviewed and researched program rights, verified content launches, and compiled release strategies.</li>
        </ul>

        <h3>Brown Film Magazine, Providence, RI</h3>
        <p>Staff Writer | January 2023 – Present</p>
        <ul className="bullet">
          <li>Write articles for Brown Univ.’s film magazine, including movie reviews, creative nonfiction, and interviews with members of the entertainment industry.</li>
        </ul>

        <h3>Brown Motion Pictures Club, Providence, RI</h3>
        <p>Editor, Assistant Producer, Location Sound Recordist | October 2021 – May 2023</p>
        <ul className="bullet">
          <li>Spring 2023 (Editor): Responsible for editing film, communicating with the film director and director of photography regarding footage and editing goals, and managing post-production work.</li>
          <li>Spring 2022 (Assistant Producer): Assisted the production team in location scouting, coordinated notes on each shot to communicate with the editor in post-production.</li>
          <li>Fall 2021 (Location Sound Recordist): Set up and operated sound recording equipment on set and monitored audio levels during shots.</li>
        </ul>

        <h3>The Myriad, Los Angeles, CA</h3>
        <p>Head Translator and Global Manager | July 2020 – January 2021</p>
        <ul className="bullet">
          <li>Wrote, researched, and translated news articles for an online international relations journal at themyriad.news.</li>
        </ul>
      </section>

      <section>
        <h2>TECHNICAL EXPERIENCE</h2>

        <h3>Brown Technology Consulting Group, Providence, RI</h3>
        <p>Member | Sept. 2023 – present</p>
        <ul className="bullet">
          <li>Provide consulting and web development services to LevelUp, a digital marketing agency.</li>
        </ul>

        <h3>Full Stack@Brown, Providence, RI</h3>
        <p>Developer | February 2023 – May 2023; Sept. 2023 - present</p>
        <ul className="bullet">
          <li>Design and develop a website for Brown U.’s chapter of 180 Degrees Consulting, as well as IgniteCS.</li>
        </ul>

        <h3>Hack@Brown, Providence, RI</h3>
        <p>Web Developer | September 2022 – January 2023; Sept. 2023 - present</p>
        <ul className="bullet">
          <li>Design and deploy the website and internal tools as part of the Dev Team for Hack@Brown hackathon, which hosts over 500 college students in a 48-hour competitive event.</li>
        </ul>

        <h3>Curious Cardinals, Providence, RI</h3>
        <p>Instructor | July 2022 – Present</p>
        <ul className="bullet">
          <li>Taught and mentored middle school students in topics ranging from Python, game design with Unity and C#, filmmaking, and photography.</li>
        </ul>
      </section>

      <section>
        <h2>TECHNICAL SKILLS AND PROJECTS</h2>

        <h3>Technical Skills</h3>
        <ul className="bullet">
          <li>Typescript/React.js: Utilized in the development of various websites including Hack@Brown, 180 Degrees Consulting’s Brown U. Chapter, IgniteCS, and LevelUp Digital Marketing.</li>
          <li>MongoDB, Express.js, Node.js: Utilized MERN stack to create a full-stack language-learning flashcard web app.</li>
          <li>Python: Data analytics with Pandas library. Tutor introductory programming in Python, as well as game design with the PyGame library.</li>
          <li>C++: Created a 3D vector graphics engine in CSCI 1230.</li>
          <li>C: Utilized in CSCI 0330, along with x86-64 assembly.</li>
          <li>Unity Game Engine/C#: Taught an introductory game design course in Unity, including the basics of creating C# scripts to interact with in-game objects.</li>
          <li>Java: Learned the principles of object-oriented programming in CSCI 200 – Program Design with Data Structures and Algorithms, as well as AP Computer Science A and Design and Data Structures.</li>
          <li>Office Software: Microsoft Office, Google Suite, Slack, Agile.</li>
          <li>Languages: Fluent in English and Spanish; intermediate in Russian and German.</li>
        </ul>

        <h3>Projects</h3>
        <ul className="bullet">
          <li>Designed and developed websites for various organizations, including Hack@Brown, 180 Degrees Consulting’s Brown U. Chapter, IgniteCS, and LevelUp Digital Marketing.</li>
          <li>Utilized the MERN stack to create a full-stack language-learning flashcard web app.</li>
          <li>Created a 3D vector graphics engine in C++ as part of the CSCI 1230 course.</li>
          <li>Contributed to the development of internal tools for the Hack@Brown hackathon as a Web Developer.</li>
          <li>Taught and mentored middle school students in topics such as Python, game design with Unity and C#, filmmaking, and photography as an Instructor at Curious Cardinals.</li>
        </ul>
      </section>
    </div>
    </>
  );
};


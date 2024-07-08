import React from "react";
import "@/app/globals.css"
import CircleCursor from "./components/circlecursor";
import "@/styles/cv.css"
// import "@/app/globals.css"
import Navbar from "./components/navbar";
import Link from "next/link"
import Bars from "./components/bars";
import Navs from "./components/Nav";
import Footer from "./footer";

export default function CV() {
  return (
    <>
    <Bars/>
    <div className="inside">
    <Navs selected={3}/>
    <Link href="/Luke Riley Resume 2024.pdf" className="pdfLink hoverable">See single-page PDF</Link>
    <div className="cvbody">
      <h1>LUKE G. RILEY</h1>
      <section>
        <h2>EDUCATION</h2>
            <h3>Brown University, Providence, RI</h3>
            <ul>
              <li>A.B., expected May 2025; GPA 3.90</li>
              <li>Double concentrations in Computer Science and Modern Culture & Media</li>
              <div className="course-container">
              <details>
                <summary className="courses hoverable">Relevant CS Courses</summary>
                <ul className="courselist">
                  <li>CSCI 1430: Computer Vision</li>
                  <li>CSCI 2240: Advanced Computer Graphics</li>
                  <li>CSCI 1230: Computer Graphics</li>
                  <li>CSCI 0330: Computer Systems</li>
                  <li>CSCI 0320: Introduction to Software Engineering</li>
                  <li>CSCI 0200: Data Structures and Algorithms</li>
                  <li>CSCI 0111: Computing Foundations</li>
                  <li>MATH 0520: Linear Algebra</li>
                </ul>
              </details>
              <details>
                <summary className="courses hoverable">Relevant Business Courses</summary>
                <ul className="courselist">
                  <li>ENGN 1010: The Entrepreneurial Process</li>
                  <li>APMA 1650: Statistical Inference</li>
                  <li>ECON 0110: Principles of Economics</li>
                </ul>
              </details>
              </div>
            </ul>
            <h3>Harvard-Westlake School, Los Angeles, CA</h3>
            <ul className="bullet">
              <li>Class of 2021; Cum Laude; GPA 4.5</li>
            </ul>
      </section>

      <section>
        <h2>PROFESSIONAL EXPERIENCE</h2>
        
        <h3>Wizard / Genius Productions</h3>
        <p>A.I. Intern | May 2024 - August 2024</p>
        <ul className="bullet">
          <li>Assisted media tech startup producing content using AI stylization and original footage; content acquired by Warner Bros. and various social media channels.</li>
          <li>Implemented AI style transfer model for live-action footage using Python and Tensorflow.</li>
          <li>Compiled training datasets using Python, Pandas, and OpenCV.</li>
          <li>Maintained realtime media pipeline using FFMPEG, Unreal Engine, and Adobe API.</li>
          <li>Constructed virtual sets and graphics in Unreal Engine and After Effects.</li>
        </ul>

        <h3>PBS Distribution, Arlington, VA</h3>
        <p>Content and Operations Intern | June - July 2023</p>
        <ul className="bullet">
          <li>Analyzed PBSd revenue and streaming data to recommend renewals for programs reaching their expirations.</li>
          <li>Compiled research for promotion of the Oscar-winning PBS documentary 20 Days in Mariupol.</li>
          <li>Tracked acquisitions, production status, release schedules and distribution planning.</li>
          <li>Reviewed and researched program rights, verified content launches; compiled release strategies</li>
          <li>Coordinated content reviews, pitch, and partnership meetings with filmmakers, producers and distributors</li>
        </ul>

        <h3>Brown University</h3>
        <p>Teaching Assistant, CSCI 1230 – Computer Graphics</p>
        <ul className="bullet">
          <li>Assist instruction in concepts related to 3D vector graphics, raytracing, and OpenGL.</li>
          <li>Modify curriculum and educational tools prior to start of semester.</li>

        </ul>

        <h3>Curious Cardinals, Providence, RI</h3>
        <p>Instructor | July 2022 – Present</p>
        <ul className="bullet">
          <li>Teach and mentor middle school students in topics ranging from Python, game design with Unity and C#, filmmaking, and photography.</li>
        </ul>

        
      </section>

      <section>
        <h2>STUDENT ACTIVITIES</h2>

        <h3>Brown Technology Consulting Group, Providence, RI</h3>
        <p>Member | Sept. 2023 – May 2024 </p>
        <ul className="bullet">
          <li>Compiled market research and provided UI/development services to SMASH Partners Capital, as well as LevelUp, a digital marketing agency.</li>
        </ul>


        <h3>Full Stack@Brown, Providence, RI</h3>
        <p>Developer | February 2023 – May 2023; Sept. 2023 - May 2024</p>
        <ul className="bullet">
          <li>Designed and developed a website for Brown U.’s chapter of 180 Degrees Consulting, as well as IgniteCS.</li>
        </ul>

        <h3>Hack@Brown, Providence, RI</h3>
        <p>Web Developer | September 2022 – January 2023; Sept. 2023 - February 2024</p>
        <ul className="bullet">
          <li>Design and deploy the website and internal tools as part of the Dev Team for Hack@Brown hackathon, which hosts over 500 college students in a 48-hour competitive event.</li>
        </ul>

        <h3>Brown Motion Pictures Club, Providence, RI</h3>
        <p>Editor, Assistant Producer, Location Sound Recordist | October 2021 – Present</p>
        <ul className="bullet">
          <li>Spring 2024 - Present (Technical Coordinator): Manage equipment, software, and technical practices for all club members involved in BMP productions. </li>
          <li>Spring 2023 (Editor): Responsible for editing film, communicating with the film director and director of photography regarding footage and editing goals, and managing post-production work.</li>
          <li>Spring 2022 (Assistant Producer): Assisted the production team in location scouting, coordinated notes on each shot to communicate with the editor in post-production.</li>
          <li>Fall 2021 (Location Sound Recordist): Set up and operated sound recording equipment on set and monitored audio levels during shots.</li>
        </ul>

        <h3>Brown Film Magazine, Providence, RI</h3>
        <p>Staff Writer | January 2023 – Present</p>
        <ul className="bullet">
          <li>Write articles for Brown Univ.’s film magazine, including movie reviews, creative nonfiction, and interviews with members of the entertainment industry.</li>
        </ul>

        
      </section>
    </div>
    <Footer/>
    </div>
    </>
  );
};


import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Aspak, and I am a software engineer Motivated Software Engineer with hands-on experience in VoLTE (IMS) testing, core IMS validation, and telecom network analysis. 
          </p>
          <p className="about-grid-info-text">
            Skilled in Java, Python, and cloud technologies. 
            Proficient in analyzing SIP and Diameter signaling using Wireshark. 
            
          </p>

          <p className="about-grid-info-text">
            Eager to contribute to innovative software development and network engineering projects.
          </p>
          
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">DSA</li>
            <li className="about-grid-info-list-item">Python Basic</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/aspak.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

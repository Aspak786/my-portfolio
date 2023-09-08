import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    // {
    //   name: "Rapidops",
    //   role: "Full Stack Developer",
    //   url: "https://www.rapidops.com",
    //   start: "January 2021",
    //   end: "Present",
    //   shortDescription: [
    //     "I had experience working on a large codebase utilizing Kibana and Elasticsearch.",
    //     "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others.",
    //     "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
    //     "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
    //   ],
    // },
    {
      name: "Lorem",
      role: "Ipsum",
      url: "#",
      start: "Any Month XXXX",
      end: "Any Month XXXX",
      shortDescription: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque.",
        "Curabitur sit amet quam nec nisi feugiat consequat sed vel leo. Phasellus tristique erat a nisi pharetra, nec ultrices sem euismod.",
      ],
    },
    // {
    //   name: "ACES",
    //   role: "President",
    //   url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
    //   start: "Any Month XXXX",
    //   end: "Any Month XXXX",
    //   shortDescription: [
    //     "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
    //     "Additionally, I secured sponsorships from reputable brands to support our events.",
    //     "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
    //   ],
    // },
    // {
    //   name: "ISTE",
    //   role: "Web Developer",
    //   url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
    //   start: "Any Month XXXX",
    //   end: "Any Month XXXX",
    //   shortDescription: [
    //     "Write modern, performant, maintainable code for a diverse array of client and internal projects",
    //     "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
    //     "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    //   ],
    // },
    {
      name: "Lorem",
      role: "Ipsum",
      url: "#",
      start: "Any Month XXXX",
      end: "Any Month XXXX",
      shortDescription: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque.",
        "Curabitur sit amet quam nec nisi feugiat consequat sed vel leo. Phasellus tristique erat a nisi pharetra, nec ultrices sem euismod.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I've Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/Movix.jpg",
      projectName: "Movix",
      projectLink: "https://movix-aspak786.vercel.app/",
      projectDescription:
        "Movix is the best movies database application with top notch frontend technologies . Create a fully responsive movies recommendation web application by using JavaScript XML, Sassy CSS. This website was built with React.js with React-Router-Dom and with using APIs of TMDB. This website is fully functional.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "React Router Dom",
        "Javascript XML",
        "SCSS",
        "TMDBApi",
      ],
      projectExternalLinks: {
        github: "https://github.com/Aspak786/Movix",
        externalLink: "https://movix-aspak786.vercel.app/",
      },
    },
    {
      image: "/Spotify-clone.jpg",
      projectName: "Spotify Clone",
      projectLink: "https://spotify-clone-aspak786.vercel.app/",
      projectDescription:
        "Full Stack Spotify Clone with Next 13.4, React, Tailwind, Supabase, PostgreSQL, and Stripe. Using the power of Next.js 13 and React, i create a responsive and dynamic user interface that closely resembles Spotify's sleek design. Harnessing the flexibility of Tailwind CSS, you'll style your application with ease and achieve a visually stunning result.",
      projectTech: [
        "React",
        "Next.js 13",
        "Typescript",
        "Tailwind CSS",
        "Postgre SQL",
        "Supabase",
        "Stripe",
      ],
      projectExternalLinks: {
        github: "https://github.com/Aspak786/spotify-clone",
        externalLink: "https://spotify-clone-aspak786.vercel.app/",
      },
    },
    // {
    //   image: "/project3.png",
    //   projectName: "Netflix App",
    //   projectLink: "https://netlify.com",
    //   projectDescription:
    //     "I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.",
    //   projectTech: [
    //     "React",
    //     "Node.js",
    //     "Firebase",
    //     "MongoDB",
    //     "Express",
    //     "Redux Toolkit",
    //   ],
    //   projectExternalLinks: {
    //     github: "",
    //     externalLink: "",
    //   },
    // },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;

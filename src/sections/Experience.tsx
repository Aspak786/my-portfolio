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
    {
      name: "client - Vodafone Idea LTD",
      role: "Software Engineer",
      url: "https://www.myvi.in/vodafone-idea",
      start: "July 2024",
      end: "April 2025",
      shortDescription: [
        "Tested VoLTE (IMS) UE registration, verified successful call setup, and ensured proper signaling and call quality from registration to call completion.",
        "Conducted functional testing of the Core IMS to validate voice, video, and messaging services. Developed and executed functional test cases for VoLTE, including lawful interception and other specialized test cases.",
        "Utilized Diameter protocol for AAA (Authentication, Authorization, and Accounting) in network services.",
        "Support HSS Expansion including installations and configuration tasks. Gained hand on experience with Oracle Virtual box for virtualized environment setups and testing.Contributed to Nokia HSS installation at Kolkata HFE, assisted in Niam installation and integration for enhanced management and monitoring.",
      ],
    },
    {
      name: "client - Bharti India PVT LTD",
      role: "Software Engineer",
      url: "#",
      start: "Any Month XXXX",
      end: "Any Month XXXX",
      shortDescription: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque.",
        "Curabitur sit amet quam nec nisi feugiat consequat sed vel leo. Phasellus tristique erat a nisi pharetra, nec ultrices sem euismod.",
      ],
    },
    {
      name: "client - Deutsche Telekom",
      role: "Software Engineer",
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
        <h2>Where I&apos;ve Worked</h2>
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

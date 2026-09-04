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
      name: "Vodafone Idea",
      role: "Software Engineer",
      url: "https://www.myvi.in/vodafone-idea",
      start: "July 2024",
      end: "April 2025",
      shortDescription: [
        "Developed and executed functional test cases for VoLTE, including lawful interception and other specialized test cases.",
        "Utilized Diameter protocol for AAA (Authentication, Authorization, and Accounting) in network services.",
        "Gained hand on experience with Oracle Virtual box for virtualized environment setups and testing.",
        "Contributed to Nokia HSS installation at Kolkata HFE, assisted in Niam installation and integration for enhanced management and monitoring.",
      ],
    },
    {
      name: "Bharti India",
      role: "Software Engineer",
      url: "https://www.airtel.in/about-bharti/about-bharti-airtel/",
      start: "August 2024",
      end: "April 2026",
      shortDescription: [
        "Developed and executed functional test cases for VoLTE, including lawful interception and other specialized test cases.",
        "National Long distance [NLD] E2E testing with proper test case execution.",
        "Taking and analysis traces from diff circles to validate feature implementation and network behaviour. Troubleshooting and identifying issues based on SIP, Diameter and IMS signalling testing activities.",
        "Worked in Bharti SDS project, performing Wireshark trace capture and analysis.",
      ],
    },
    {
      name: "Deutsche Telekom",
      role: "Software Engineer",
      url: "https://www.telekom.com/en",
      start: "April 2026",
      end: "Currently working",
      shortDescription: [
        "Created NREs and Test Cases based on functional requirements.",
        "Executed manual and automated test scenarios for IMS features.",
        "Analyzed SIP, Diameter, and IMS signaling using Wireshark.",
        "Investigated defects, validated fixes, and collaborated with development teams.",
        "Supported feature validation and regression testing for critical telecom releases.",
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

import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
              position="Software Developer"
              company="Funded Futues Family"
              time="June 2024 - Augest 2024"
              address="Los Angeles, CA"
              work="Worked on a team responsible for installing Ubuntus 20.04LTS on Windows Enterprise, added network drivers for ECU communication, and authored a guide for Ubuntu installation on Hyper-V."
            />
          <Details
              position="Linux and Virtual Machine Administrator(Temporary)"
              company="Ford"
              time="Summer 2023"
              address="Dearborn, MI."
              work="Worked on a team responsible for installing Ubuntus 20.04LTS on Windows Enterprise, added network drivers for ECU communication, and authored a guide for Ubuntu installation on Hyper-V."
            />

            <Details
              position="Python Trainer"
              company="PythonWithK"
              time="2021-2022"
              address="Farmington Hills, MI"
              work="I have established a Python Tutoring program tailored for beginners, encompassing fundamental Python concepts through Object-Oriented Programming (OOP) within a concise 4-week timeframe. With each session accommodating a cohort of over 20 individuals, spanning diverse age groups from 10 years and above, I have effectively imparted comprehensive Python knowledge to my students."
            />

            <Details
              position="Cybersecurity Trainer(Intership)"
              company="Careerera"
              companyLink="https://www.careerera.com/cyber-security/pgp-in-cyber-security-and-ethical-hacking"
              time="June 2021- March 2022"
              address="Work From Home"
              work="Collaborated within a dedicated team to deliver comprehensive Cybersecurity education, covering a spectrum of topics including Dos-Attacks, Social Engineering, Honeypots, and the fundamentals of Cryptography. Engaged in a holistic approach to equip students with a thorough understanding of Cybersecurity from A to Z. "
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;

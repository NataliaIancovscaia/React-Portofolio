import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

import html1 from "../../assets/news.png";
import html2 from "../../assets/spa.png";
import react1 from "../../assets/react1.png";
import react2 from "../../assets/react2.png";
import react3 from "../../assets/react3.png";
import react4 from "../../assets/react4.png";
import java1 from "../../assets/spel.png";
import java2 from "../../assets/butik.png";
import node1 from "../../assets/node.png";
import node2 from "../../assets/Virus.png";

function Projects() {
  const [activeTab, setActiveTab] = useState("html");

  const projects = {
    html: [
      {
        title: "HTML/CSS",
        description: "Portfolio for Spa Salon",
        imgUrl: html2,
        link: "https://github.com/NataliaIancovscaia/HTML-Portofolio-SpaSalon",
      },
      {
        title: "HTML/CSS",
        description: "News web page - Nyhetsbyrån",
        imgUrl: html1,
        link: "https://github.com/NataliaIancovscaia/HTML-project-Nyhetsbyran",
      },
    ],
    js: [
      {
        title: "JavaScript",
        description:
          "Candy boutique — simple online shop with cart and checkout.",
        imgUrl: java2,
        link: "https://statuesque-sundae-e4caf3.netlify.app/",
      },
      {
        title: "JavaScript",
        description: "Quiz game: guess the classmate's name.",
        imgUrl: java1,
        link: "https://quizspelwhyisthis.netlify.app",
      },
    ],
    node: [
      {
        title: "NodeJS",
        description:
          "REST API with authentication for a future photo app backend.",
        imgUrl: node1,
        link: "https://github.com/NataliaIancovscaia/Backend-f-r-en-framtida-foto-app",
      },
      {
        title: "NodeJS",
        description:
          "2-player realtime game: click on the virus fastest to score.",
        imgUrl: node2,
        link: "https://github.com/NataliaIancovscaia/Node-.js-2-player-realtids-spel",
      },
    ],
    react: [
      {
        title: "React",
        description: "Star Wars encyclopedia — browse characters and movies.",
        imgUrl: react1,
        link: "https://iancovscaiastarwarsencyclopedia.netlify.app",
      },
      {
        title: "React",
        description: "TMDB interface — browse, filter and view movie details.",
        imgUrl: react2,
        link: "https://moviegallery200625.netlify.app",
      },
      {
        title: "React",
        description: "Portfolio written in React",
        imgUrl: react3,
        link: "https://portofolioprojectnatalia.netlify.app",
      },
      {
        title: "React",
        description: "En app som  fungerar som en matguide när man är hangry ",
        imgUrl: react4,
        link:"https://fed24hungryhub.netlify.app/",
      },
    ],
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>

      <div className={styles.tabs}>
        {["html", "js", "node", "react"].map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className={styles.projectsContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {projects[activeTab].map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              src={project.imgUrl}
              link={project.link}
              h3={project.title}
              p={project.description}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Projects;

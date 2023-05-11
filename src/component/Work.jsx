import { useState } from "react";
import { ProjectTypes, Projects, SectionTitle } from "./elements";
import { PORTFOLIO } from "./protfolio/portfolio";
import { motion } from "framer-motion";
import { fadeIn } from "../data";
import "../../src/App.css";

const Work = () => {
  const [selectedType, setselectedType] = useState("All");
  const { title, subtitle, typeWriter, types, projects, github } = PORTFOLIO;
  return (
    <section className="sec lg:work mt-72 mb-64 lg:mb-32" id="work">
      <motion.div
        className="container"
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* === Section Title === */}
        <SectionTitle
          center
          title={title}
          subtitle={subtitle}
          typeWriter={typeWriter}
        />
        {/* === Project Types === */}
        <ProjectTypes
          types={types}
          onChange={setselectedType}
          selected={selectedType}
        />
        {/* === Projects === */}
        <Projects projects={projects} type={selectedType} />
      </motion.div>
    </section>
  );
};

export default Work;

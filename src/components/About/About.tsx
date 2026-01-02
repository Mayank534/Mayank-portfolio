import { Container } from "./styles";
import MayankAgrawal from "../../assets/mayank_2.png";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import { motion } from "framer-motion";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About me</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            Hi there! I'm Mayank Agrawal, a 4th year undergrad @ IIT Kanpur, I am interested in anything related to dev, finance, blockchains, robotics, ML, competitive programming.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
           I am the Team head of <a href="https://era.sntiitk.com/">ERA IITK</a> a team for autonomous robotics, I am also the deputy contingent leader of IIT Kanpur for InterIIT TechMeet 14.0
           </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="education">
            <h3>Education:</h3>
            <h4> BTech Mechanical Engineering & Computer Science and Engineering</h4>
            <p>Indian Institute of Technology, Kanpur | Oct 2022 - Present</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <div className="experience">
             <h3>Internships:</h3>
             <h4>Quantitative Investment Strategies (QIS)</h4>
            <p>Nomura | May 2025 - July 2025</p>
            <p>Mumbai, India</p>
            <br />
            <h4>SDE-I</h4>
            <p>Dentira | Dec 2024 - May 2025</p>
            <p>Remote</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Here are my main skills:</h3>
        </motion.div>
        <div className="hard-skills">
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.10 }}
            >
              <img src={python} alt="python" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.11 }}
            >
              <img src={java} alt="java" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <img src={jsIcon} alt="JavaScript" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.13 }}
            >
              <img src={reactIcon} alt="React" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
            >
              <img src={typescriptIcon} alt="Typescript" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <img src={vueIcon} alt="Vue" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              <img src={wordpress} alt="Wordpress" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.17 }}
            >
              <img src={shopify} alt="shopify" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              <img src={htmlIcon} alt="Html" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.19 }}
            >
              <img src={cssIcon} alt="Css" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={boostrapIcon} alt="bootstrap" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="about-image">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.21 }}
        >
          <img src={MayankAgrawal} alt="Mayank Agrawal" />
        </motion.div>
      </div>
    </Container>
  )
}

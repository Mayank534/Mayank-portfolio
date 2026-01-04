import { Container } from "./styles";
import MayankAgrawal from "../../assets/mayank_2.png";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import adobephotoshop from "../../assets/Adobe Photoshop.svg";
import arduino from "../../assets/arduino.svg";
import bash from "../../assets/Bash.svg";
import blender from "../../assets/Blender.svg";
import bloomberg from "../../assets/bloomberg.svg";
import canva from "../../assets/Canva.svg";
import cpp from "../../assets/c++.svg";
import docker from "../../assets/Docker.svg";
import gazebo from "../../assets/Gazebo.svg";
import git from "../../assets/Git.svg";
import jupyter from "../../assets/Jupyter.svg";
import markdown from "../../assets/Markdown.svg";
import matplotlib from "../../assets/Matplotlib.svg";
import mysql from "../../assets/MySQL.svg";
import numpy from "../../assets/NumPy.svg";
import opencv from "../../assets/OpenCV.svg";
import pandas from "../../assets/Pandas.svg";
import pytorch from "../../assets/PyTorch.svg";
import ros from "../../assets/Robot Operating System (ROS).svg";
import sckitlearn from "../../assets/scikit-learn.svg";
import solidity from "../../assets/Solidity.svg";
import tensorflow from "../../assets/TensorFlow.svg";
import unity from "../../assets/Unity.svg";

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
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={adobephotoshop} alt="Adobe Photoshop" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={arduino} alt="Arduino" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={bash} alt="bash" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={blender} alt="blender" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={bloomberg} alt="bloomberg" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={cpp} alt="cpp" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={canva} alt="canva" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={docker} alt="docker" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={gazebo} alt="gazebo" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={git} alt="git" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={jupyter} alt="jupyter" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={markdown} alt="markdown" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.20 }}
            >
              <img src={matplotlib} alt="matplotlib" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.21 }}
            >
              <img src={mysql} alt="MySQL" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
            >
              <img src={numpy} alt="NumPy" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.23 }}
            >
              <img src={opencv} alt="OpenCV" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <img src={pandas} alt="Pandas" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <img src={pytorch} alt="PyTorch" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
            >
              <img src={ros} alt="ROS" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.27 }}
            >
              <img src={sckitlearn} alt="scikit-learn" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              <img src={solidity} alt="Solidity" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.29 }}
            >
              <img src={tensorflow} alt="TensorFlow" />
            </motion.div>
          </div>
          <div className="hability">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.30 }}
            >
              <img src={unity} alt="Unity" />
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

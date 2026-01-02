import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import { motion } from "framer-motion"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import codeforces from '../../assets/codeforces.svg'
import codechef from '../../assets/codechef.svg'
import Hello from '../../assets/Hello.gif'
import interviewbit from '../../assets/interviewbit.svg'
import HeroImage from "../../assets/mayank.png";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1>Mayank Agrawal</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Student</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="small-resume">4th Year Undergraduate
            <br /> Pursuing Mechanical Engineering with minor in CSE (AI/ML, Algorithms, Systems) at <b>IIT Kanpur</b>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
      <div className="social-media"><a
        href="https://www.linkedin.com/in/mayank-agrawal-209085254/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/Mayank534"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Mayank+I+found+your+contact+through+portfolio+site.%0A%0A"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://codeforces.com/profile/mayanka22"
          target="_blank"
          rel="noreferrer"
        >
          <img src={codeforces} alt="Codeforces" />
        </a>
        <a
          href="https://www.codechef.com/users/mayankagrawal0"
          target="_blank"
          rel="noreferrer"
        >
          <img src={codechef} alt="Codechef" />
        </a>
        <a
          href="https://www.interviewbit.com/profile/mayank-agrawal_862/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={interviewbit} alt="InterviewBit" />
        </a>
        </div>
        </motion.div>
      </div>
      <div className="hero-image">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <img src={HeroImage} alt="Ilustração" />
        </motion.div>
      </div>
    </Container>
  )
}
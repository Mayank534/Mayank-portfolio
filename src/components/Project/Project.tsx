import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import { motion } from "framer-motion";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/* Project 1: Autonomous Quadruped */}
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#2351ceff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Mayank534/Autonomous-Human-Following-Feature-in-Quadruped" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Autonomous Human Following Quadruped</h3>
              <p>
                Developed autonomous human-following features for a quadruped robot as part of a Robotics Research Internship (SURGE 2024). Implemented computer vision algorithms to track and follow a target human in real-time.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Robotics</li>
                <li>Computer Vision</li>
                <li>SURGE</li>
              </ul>
            </footer>
          </div>
        </motion.div>

        {/* Project 2: Aptures */}
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#2351ceff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Mayank534/APTURES2.0" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>APTURES</h3>
              <p>
                 Solved the Aptos Blockchain Challenge InterIIT problem statement using Move language. Designed a non-custodial Zero and N-day futures trading platform on-chain
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Move</li>
                <li>Aptos</li>
                <li>Blockchain</li>
              </ul>
            </footer>
          </div>
        </motion.div>

        {/* Project 3: Phasr */}
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#2351ceff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* Check if this link is correct or needs updating */}
                <a href="https://github.com/ERA-IITK/RoboCup2025" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>PHASR</h3>
              <p>
                First ever Indian Team to qualify for RoboCup , which is an autonomous football playing competition. Developed vision and strategy modules for the robots, enabling real-time decision-making and coordination on the field.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Research</li>
                <li>Development</li>
              </ul>
            </footer>
          </div>
        </motion.div>

        {/* Project 4: Life Long Learning */}
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#2351ceff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Mayank534/CS771-Mini-Projects" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Life Long Learning and Domain Adaptation</h3>
              <p>
                Research on Lifelong Learning (Continual Learning) techniques in machine learning, focusing on enabling models to learn new tasks without catastrophic forgetting of previously acquired knowledge.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Machine Learning</li>
                <li>Python</li>
                <li>AI Research</li>
              </ul>
            </footer>
          </div>
        </motion.div>

        {/* Project 5: Mathematical Trading Strategies */}
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#2351ceff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Mayank534/Mathematical-Trading-Strategies" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mathematical Trading Strategies</h3>
              <p>
                Mastered financial statistics, market indicators, technical analysis, & data scraping. Implemented 5 technical patterns and 3 indicators on 10 international indices to optimize trading strategies, achieving a 145% return.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Financial Stats</li>
                <li>Python</li>
                <li>Data Scraping</li>
              </ul>
            </footer>
          </div>
        </motion.div>

        {/* Project 6: Mastering Web 3.0 */}
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#2351ceff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Mayank534/Mastering_web3.0" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mastering Web 3.0</h3>
              <p>
                Gained insight into Web 3 capabilities (decentralization, cryptography, tokenization). Implemented Smart Contracts and DApps in Solidity, including a secure, decentralized DApp for Student Gymkhana Elections.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Solidity</li>
                <li>Ethereum</li>
                <li>DApps</li>
                <li>Cryptography</li>
              </ul>
            </footer>
          </div>
        </motion.div>

      </div>
    </Container>
  );
}
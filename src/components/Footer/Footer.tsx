import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from '../../assets/instagram.svg'
import codeforces from '../../assets/codeforces.svg'
import codechef from '../../assets/codechef.svg'
export function Footer() {
  return (
    <Container className="footer">
      <a href="https://github.com/Mayank534" className="logo">
        <span>https://github.com/Mayank534</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
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
          href="https://www.codechef.com/users/mayankagrawal0"
          target="_blank"
          rel="noreferrer"
        >
          <img src={codechef} alt="Codechef" />
        </a>
        <a
          href="https://codeforces.com/profile/mayanka22"
          target="_blank"
          rel="noreferrer"
        >
          <img src={codeforces} alt="Codeforces" />
        </a>
        <a
          href="https://www.instagram.com/_.mayank_agrawal._/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}

import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Contact me now for some gyaan.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:mayank.agrawal.050304@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:mayank.agrawal.050304@gmail.com">mayank.agrawal.050304@gmail.com</a>
        </div>
        <div>
        <a href="tel:9289077004"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919289077004">(+91) 9289077004</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
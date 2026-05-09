import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaPhone, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/alirza-gz"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/alirzagz"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/alirzagz/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/alirzagz"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+989146427737"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <FaPhone size={14} />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3>Copyright © {year} Alirzagz</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

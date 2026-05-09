import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./TechStack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import Courses from "./Courses";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row className="justify-content-center about-top-row">
            <Col md={7} className="about-copy-column">
              <h1 className="section-title about-title">
                Know who <strong className="purple">I am</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col md={5} className="about-img">
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          <div className="section-heading-wrap">
            <h2 className="project-heading">
              <strong className="purple">Teaching</strong> Experience
            </h2>
          </div>
          <Courses />

          <div className="section-heading-wrap">
            <h2 className="project-heading">
              Professional <strong className="purple">skillset</strong>
            </h2>
          </div>

          <Techstack />
        </Container>
      </Container>
    </>
  );
}

export default About;

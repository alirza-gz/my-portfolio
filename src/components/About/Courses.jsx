import { Col, Container, Row } from "react-bootstrap";
import course1 from "../../Assets/Courses/course-1.jpg";
import course2 from "../../Assets/Courses/course-2.jpg";

function Courses() {
  return (
    <Container>
      <Row className="courses-section">
        <Col md={6} className="course-item">
          <img src={course2} alt="Front-end Course" />
        </Col>
        <Col md={6} className="course-item">
          <img src={course1} alt="TailwindCSS Course" />
        </Col>
      </Row>
    </Container>
  );
}

export default Courses;

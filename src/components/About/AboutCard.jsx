import Card from "react-bootstrap/Card";
import { FaCheck } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Alireza Gholizadeh</span>{" "}
            from <span className="purple">Iran</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Front-end Developer</span> at{" "}
            <span className="purple">Eftekhar Modiran</span>.
            <br />I hold an Integrated M.Sc. in{" "}
            <span className="purple">Software Engineering</span> from{" "}
            <span className="purple">University of Isfahan</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            inspired:
          </p>

          <ul>
            <li className="about-activity">
              <FaCheck /> Coffee ☕️
            </li>
            <li className="about-activity">
              <FaCheck /> Watching Movies and Series 🎬
            </li>
            <li className="about-activity">
              <FaCheck /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "#5f95f8" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

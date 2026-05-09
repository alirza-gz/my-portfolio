import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import { useRef } from "react";

function Home2() {
  const stackRef = useRef(null);
  const year = new Date().getFullYear();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    stackRef.current.style.transform = `rotateX(${-y * 14}deg) rotateY(${x * 18}deg)`;
  };

  const handleMouseLeave = () => {
    stackRef.current.style.transform = "rotateX(8deg) rotateY(-12deg)";
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a{" "}
              <i>
                {" "}
                <b className="purple"> Software Engineer</b>
              </i>
              , As a{" "}
              <i>
                <b className="purple">Front-End Developer</b>
              </i>{" "}
              , I turn designs into fast, accessible web experiences using{" "}
              <i>
                <b className="purple">
                  {" "}
                  Next.js, React.js, Redux, TailwindCSS, modern JavaScript, HTML
                  & CSS.{" "}
                </b>
              </i>{" "}
              also I’m a{" "}
              <i>
                <b className="purple">Automation Engineer</b>
              </i>
              , I build scalable automation workflows with{" "}
              <i>
                <b className="purple">n8n</b>
              </i>{" "}
              to streamline business processes, improve efficiency, and connect
              modern digital systems seamlessly.
              <br />
              <br />
              I’ve shipped responsive interfaces that improve user engagement
              and performance, and I’m passionate about{" "}
              <i>
                <b className="purple"> clean architecture </b>
              </i>{" "}
              and
              <i>
                <b className="purple"> collaborative workflows. </b>
              </i>{" "}
              <br />
              <br />
              I’m looking for full-time or contract roles where I can contribute
              to impactful projects
            </p>
          </Col>
          <Col>
            <div
              className="scene"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="stack" ref={stackRef}>
                <div className="layer layer-back" />
                <div className="layer layer-mid">
                  <div className="layer-mid-stripes" />
                </div>

                <div className="layer layer-front">
                  <div className="photo-area">
                    <img src={myImg} alt="Alireza Gholizadeh" />
                  </div>
                </div>

                <div className="layer-float">
                  <span className="float-num">+{year - 2022}</span>
                  <span className="float-label">Years exp</span>
                </div>

                <div className="layer-tag">
                  <span className="tag-text">
                    <span className="live-dot" />
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

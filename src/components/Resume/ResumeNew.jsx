import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/AlirezaGholizadeh-Resume.pdf";
import resumePage1 from "../../Assets/resume-page-1.png";
import resumePage2 from "../../Assets/resume-page-2.png";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", width: "100%" }}
            className="btn-download"
          >
            <AiOutlineDownload size={24} />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row
          className="resume d-flex justify-content-center"
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <img
            src={resumePage1}
            alt="Resume page 1"
            style={{
              width: "100%",
              maxWidth: width > 786 ? "950px" : "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "24px",
            }}
          />
          <img
            src={resumePage2}
            alt="Resume page 2"
            style={{
              width: "100%",
              maxWidth: width > 786 ? "950px" : "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

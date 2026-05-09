import { useState } from "react";
import { BsGithub, BsArrowUpRight, BsPlayFill } from "react-icons/bs";
import VideoModal from "./VideoModal";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  videoUrl,
  isBlog,
  tags = [],
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const hasVideo = Boolean(videoUrl);
  const hasExternalDemo = Boolean(demoLink) && !hasVideo;

  return (
    <>
      <div
        className={`pcard ${isHovered ? "pcard--hovered" : ""}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ "--i": index }}
      >
        {/* Image section */}
        <div className="pcard__img-wrap">
          <img src={imgPath} alt={title} className="pcard__img" />
          <div className="pcard__img-overlay" />
          <div className="pcard__number">0{index + 1}</div>

          {/* Play button overlay — shown on hover when videoUrl exists */}
          {hasVideo && (
            <button
              className="pcard__play-overlay"
              onClick={() => setModalOpen(true)}
              aria-label={`Play demo video for ${title}`}
            >
              <span className="pcard__play-ring" />
              <BsPlayFill className="pcard__play-icon" />
            </button>
          )}
        </div>

        {/* Body */}
        <div className="pcard__body">
          {tags.length > 0 && (
            <div className="pcard__tags">
              {tags.map((tag) => (
                <span key={tag} className="pcard__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="pcard__title">{title}</h3>
          <p className="pcard__desc">{description}</p>

          <div className="pcard__actions">
            {ghLink && (
              <a
                href={ghLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pcard__btn pcard__btn--ghost"
              >
                <BsGithub />
                <span>{isBlog ? "Blog" : "GitHub"}</span>
              </a>
            )}

            {/* Video demo — opens modal */}
            {!isBlog && hasVideo && (
              <button
                className="pcard__btn pcard__btn--solid"
                onClick={() => setModalOpen(true)}
              >
                <BsPlayFill />
                <span>Live Demo</span>
              </button>
            )}

            {/* External demo (no video) */}
            {!isBlog && hasExternalDemo && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pcard__btn pcard__btn--solid"
              >
                <span>Live Demo</span>
                <BsArrowUpRight />
              </a>
            )}

            {/* When both videoUrl & demoLink exist → small external icon */}
            {!isBlog && hasVideo && demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pcard__btn pcard__btn--ghost pcard__btn--icon"
                title="Open live site"
                aria-label="Open live site"
              >
                <BsArrowUpRight />
              </a>
            )}
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoUrl={videoUrl}
        title={title}
      />
    </>
  );
}

export default ProjectCards;
import { useEffect, useRef, useCallback } from "react";
import { BsXLg, BsPlayCircle } from "react-icons/bs";

function VideoModal({ isOpen, onClose, videoUrl, title }) {
  const overlayRef = useRef(null);
  const iframeRef = useRef(null);

  /* close on Escape key */
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKey]);

  /* click outside modal box → close */
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen) return null;

  /* Detect if URL is a YouTube link and convert to embed URL */
  const getEmbedUrl = (url) => {
    if (!url || typeof url !== "string") return "";
    // already embed
    if (url.includes("youtube.com/embed") || url.includes("youtu.be/embed"))
      return url;
    // youtu.be/ID
    const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
    if (shortMatch)
      return `https://www.youtube.com/embed/${shortMatch[1]}?autoplay=1&rel=0`;
    // youtube.com/watch?v=ID
    const watchMatch = url.match(/[?&]v=([^&]+)/);
    if (watchMatch)
      return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=1&rel=0`;
    // fallback: return as-is (mp4, vimeo embed, etc.)
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  // تشخیص دقیق: اگه پسوند ویدیو داره → تگ <video>، وگرنه → iframe
  const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov", ".mkv"];
  const isDirectVideo =
    typeof videoUrl === "string" &&
    VIDEO_EXTENSIONS.some((ext) => videoUrl.toLowerCase().includes(ext));
  const isIframe = !isDirectVideo;

  return (
    <div
      className="vmodal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Demo video: ${title}`}
    >
      <div className="vmodal-box">
        {/* Header */}
        <div className="vmodal-header">
          <div className="vmodal-title-row">
            <BsPlayCircle className="vmodal-play-icon" />
            <span className="vmodal-title">{title}</span>
            <span className="vmodal-badge">LIVE DEMO</span>
          </div>
          <button
            className="vmodal-close"
            onClick={onClose}
            aria-label="Close video"
          >
            <BsXLg />
          </button>
        </div>

        {/* Video area */}
        <div className="vmodal-video-wrap">
          <div className="vmodal-scanline" />
          {isIframe ? (
            <iframe
              ref={iframeRef}
              src={embedUrl}
              title={`${title} demo`}
              className="vmodal-iframe"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              className="vmodal-video"
              src={videoUrl}
              controls
              autoPlay
              playsInline
            />
          )}
        </div>

        {/* Footer hint */}
        <div className="vmodal-footer">
          <span>
            Press <kbd>Esc</kbd> or click outside to close
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;

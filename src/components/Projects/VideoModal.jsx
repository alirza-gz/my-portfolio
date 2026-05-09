import { useEffect, useRef, useCallback } from "react";
import { BsXLg, BsPlayCircle } from "react-icons/bs";


const resolveVideo = (raw) => {
  if (!raw || typeof raw !== "string") return { type: "unknown" };

  // آپارات — استخراج src اسکریپت از هر فرمت
  if (raw.includes("aparat.com")) {
    const srcMatch = raw.match(
      /src=["']([^"']*aparat\.com\/embed\/[^"']+)["']/,
    );
    if (srcMatch) return { type: "aparat", scriptSrc: srcMatch[1] };
    // اگه مستقیم URL embed داده شده
    if (raw.includes("aparat.com/embed/"))
      return { type: "aparat", scriptSrc: raw };
  }

  // YouTube
  const ytShort = raw.match(/youtu\.be\/([^?&]+)/);
  if (ytShort)
    return {
      type: "iframe",
      src: `https://www.youtube.com/embed/${ytShort[1]}?autoplay=1&rel=0`,
    };
  const ytWatch = raw.match(/[?&]v=([^&]+)/);
  if (ytWatch)
    return {
      type: "iframe",
      src: `https://www.youtube.com/embed/${ytWatch[1]}?autoplay=1&rel=0`,
    };
  if (raw.includes("youtube.com/embed")) return { type: "iframe", src: raw };

  // فایل مستقیم
  if (
    [".mp4", ".webm", ".ogg", ".mov"].some((e) => raw.toLowerCase().includes(e))
  )
    return { type: "video", src: raw };

  return { type: "iframe", src: raw };
};

/* ════════════════════════════════════════════════ */

function VideoModal({ isOpen, onClose, videoUrl, title }) {
  const overlayRef = useRef(null);
  const aparatRef = useRef(null);
  const resolved = resolveVideo(videoUrl);

  /* Escape key */
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

  /* آپارات — inject script پس از open */
  useEffect(() => {
    if (!isOpen || resolved.type !== "aparat" || !aparatRef.current) return;

    const container = aparatRef.current;
    container.innerHTML = "";

    const divId = "aparat-" + Math.random().toString(36).slice(2, 9);

    const div = document.createElement("div");
    div.id = divId;
    div.style.cssText = "width:100%;height:100%;";

    // ساخت src با پارامترهای صحیح
    const baseUrl = resolved.scriptSrc.split("?")[0];
    const scriptSrc = `${baseUrl}?data[rnddiv]=${divId}&data[responsive]=yes`;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = scriptSrc;

    div.appendChild(script);
    container.appendChild(div);

    return () => {
      container.innerHTML = "";
    };
  }, [isOpen, resolved.type, resolved.scriptSrc]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen) return null;

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

        {/* Video */}
        <div className="vmodal-video-wrap">
          <div className="vmodal-scanline" />

          {resolved.type === "aparat" && (
            <div ref={aparatRef} className="vmodal-aparat" />
          )}

          {resolved.type === "video" && (
            <video
              className="vmodal-video"
              src={resolved.src}
              controls
              autoPlay
              playsInline
            />
          )}

          {resolved.type === "iframe" && (
            <iframe
              key={resolved.src}
              src={resolved.src}
              title={`${title} demo`}
              className="vmodal-iframe"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Footer */}
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

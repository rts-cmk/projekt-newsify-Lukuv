import React, { useState, useRef, useEffect } from "react";

export function Dropdown({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(100);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className="modalContainer border rounded shadow w-64">
      <button className="cap dropdown" onClick={() => setIsOpen(!isOpen)}>
        <span className="modalTitel flex items-center gap-2">
          <img src="/newsify_logo.svg" alt="Hallo?" />
          {title}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
          className={`dropdownIcon ${isOpen ? "openIcon" : ""}`}
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </button>

      {/* Vi bruger div i stedet for dialog */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.5s ease",
        }}
      >
        <div className="childInside">{children}</div>
      </div>
    </div>
  );
}

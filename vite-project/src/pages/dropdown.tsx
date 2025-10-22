import React, { useState } from "react";

export function Dropdown({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="modalContainer">
      <button
        className="cap dropdown"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="modalTitel">
          <img src="../public/newsify_logo.svg" alt="Hallo?" />
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
      <dialog className="childModal" open={isOpen}>
        <span className="childInside">
          <img
            className="placeholderLeft"
            src="https://placehold.co/50x50"
            alt=""
          />
          {children}
        </span>
      </dialog>
    </div>
  );
}

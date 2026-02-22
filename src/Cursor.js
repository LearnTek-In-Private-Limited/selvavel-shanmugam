import React, { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const addHoverEvents = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    addHoverEvents();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? "cursor-hover" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default Cursor;

import React, { useEffect, useState } from "react";

export default function HiStrangerTypingSite() {
  const text = "Hi Stranger, Have a good day.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(24px, 5vw, 48px)",
          fontWeight: "600",
        }}
      >
        {displayedText}
        <span style={{ opacity: 1 }}>|</span>
      </h1>
    </div>
  );
}

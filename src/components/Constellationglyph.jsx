import React from "react";

const ConstellationGlyph = () => {
  return (
    <div className="constellation-glyph">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" stroke="#facc15" strokeWidth="2" />
        <path
          d="M16 48 L32 16 L48 48"
          stroke="#facc15"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="32" cy="16" r="3" fill="#facc15" />
        <circle cx="16" cy="48" r="3" fill="#facc15" />
        <circle cx="48" cy="48" r="3" fill="#facc15" />
      </svg>
    </div>
  );
};

export default ConstellationGlyph;


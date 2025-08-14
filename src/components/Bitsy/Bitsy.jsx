import React, { useState } from "react";
import BitsyModal from "./BitsyModal";
import bitsyIcon from "../../assets/bitsy/bitsy.png"; // 🟡 Circular face icon
import "./bitsy_widget.css";

const Bitsy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="bitsy-button-wrapper" onClick={toggleModal}>
        <img
          src={bitsyIcon}
          alt="Ask Bitsy"
          className="bitsy-button-glow"
        />
        <span className="bitsy-button-label">Ask Bitsy</span>
      </div>

      {isOpen && <BitsyModal onClose={toggleModal} />}
    </>
  );
};

export default Bitsy;

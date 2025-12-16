import { useState, useRef, useEffect } from 'react';
import '../styles/getinvolved.css';
import usericon from '../assets/usericon.png';

const GetInvolvedMenu = ({ isVisible, onClose, buttonRef }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);

  useEffect(() => {
    if (isVisible && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: buttonRect.bottom + 8,
        left: buttonRect.left
      });
    }
  }, [isVisible, buttonRef]);

  if (!isVisible) return null;

  return (
    <div 
      ref={menuRef}
      className="getinvolved-popup"
      style={{ top: position.top, left: position.left }}
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="popup-avatar">
        <img src={usericon} alt="User" />
      </div>
      
      <div className="popup-buttons">
        <button className="popup-btn">
          <span className="btn-icon">📝</span>
          Apply
        </button>
        <button className="popup-btn">
          <span className="btn-icon">💝</span>
          Donate
        </button>
        <button className="popup-btn">
          <span className="btn-icon">🤝</span>
          Join Us
        </button>
      </div>
    </div>
  );
};

export default GetInvolvedMenu;
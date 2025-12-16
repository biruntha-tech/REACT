import { useState } from 'react';
import '../styles/getinvolved-dropdown.css';

const GetInvolvedDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="get-involved-wrapper">
      <button 
        className="get-involved-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        Get Involved
      </button>

      {isOpen && (
        <div className="get-involved-dropdown">
          <a href="#">Apply</a>
          <a href="#">Donate</a>
          <a href="#">Join Us</a>
        </div>
      )}
    </div>
  );
};

export default GetInvolvedDropdown;
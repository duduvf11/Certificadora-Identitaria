import React from 'react';
import "./donation.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Donation = () => {
  return (
    <div className="donation-container">
      
      <div className="donation-buttons">
        {/* Botão para doação em dinheiro */}
        <Link to="/donate-money">
          <Button className="home_button" variant="secondary" size="lg">
            DOAR DINHEIRO
          </Button>
        </Link>

        {/* Botão para doação de absorventes */}
        <Link to="/donate-absorvents">
          <Button className="home_button" variant="secondary" size="lg">
            DOAR ABSORVENTES
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Donation;
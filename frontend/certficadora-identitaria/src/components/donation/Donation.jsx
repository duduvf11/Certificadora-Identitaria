import {} from 'react';
import "./donation.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Donation = () => {
  return (
    <div className="background">
      <div className="donation_container">
        <h1>Qual o tipo de doação que deseja fazer?</h1>
        <div className="donation_buttons">
          {/* Botão para doação em dinheiro */}
          <Link to="/donate-money">
            <Button className="donation_button" variant="secondary" size="lg">
              Dinheiro
            </Button>
          </Link>

          {/* Botão para doação de absorventes */}
          <Link to="/donate-absorvents">
            <Button className="donation_button" variant="secondary" size="lg">
              Absorventes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Donation;
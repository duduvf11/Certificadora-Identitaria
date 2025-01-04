import { useState } from 'react';
import './admin_home.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const admin_home = () => {
  return (
    <div className="admin-home">
      <Link to="/demands">
      <Button className="home-button" variant="secondary" size="lg">
        SOLICITAÇÕES DE DOAÇÃO
      </Button>
      </Link>

      <Link to="/history">
      <Button className="home-button" variant="secondary" size="lg">
        HISTÓRICO DE DOAÇÕES
      </Button>
      </Link>

      <Link to="/control">
      <Button className="home-button" variant="secondary" size="lg">
        CONTROLE DE CAIXA E ESTOQUE
      </Button>
      </Link>
    </div>
  );
};

export default admin_home;
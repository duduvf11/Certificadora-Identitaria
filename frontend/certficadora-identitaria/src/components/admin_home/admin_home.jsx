import { } from 'react';
import './admin_home.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Logo_Admin from '../../assets/Marca_Bons_fluidos1.svg';

const admin_home = () => {
  return (
      <div className='background'>
                  <div>
                      <img src={Logo_Admin} alt="" className='home_logo admin'/>
                  </div> 
      <div className="home_container_buttons">
        <Link to="/demands">
        <Button className="home_button" variant="secondary" size="lg">
          SOLICITAÇÕES DE DOAÇÃO
        </Button>
        </Link>

        <Link to="/history">
        <Button className="home_button" variant="secondary" size="lg">
          HISTÓRICO DE DOAÇÕES
        </Button>
        </Link>

        <Link to="/control">
        <Button className="home_button" variant="secondary" size="lg">
          CONTROLE DE CAIXA E ESTOQUE
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default admin_home;
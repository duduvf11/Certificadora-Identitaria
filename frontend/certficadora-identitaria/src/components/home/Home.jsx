import {} from 'react'
import "./home.css"

import Button from 'react-bootstrap/Button';
import Logo from '../../assets/Marca_Bons_fluidos1.svg';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
      <div className='home_container'>
        <div>
          <img src={Logo} alt="" className='home_logo'/>
        </div>
        <div></div>
        <div className='home_container_buttons'>
          <Link to="/donation">
            <Button className='home_button' variant="secondary" size="lg">
            FAZER UMA DOAÇÃO
            </Button>
          </Link>

          <Link to="/request">
            <Button className='home_button' variant="secondary" size="lg">
              SOLICITAR UMA DOAÇÃO
            </Button>
          </Link>

          <Link to="/project">
            <Button className='home_button' variant="secondary" size="lg">
              FAÇO PARTE DO PROJETO
            </Button>
          </Link>
        </div>
        <div></div>
    </div>
  )
}

export default Home
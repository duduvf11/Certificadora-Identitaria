import {} from 'react'
import "./home.css"

import Button from 'react-bootstrap/Button';
import Logo from '../../assets/Marca_Bons_fluidos1.svg';

const Home = () => {
  return (
      <div className='home_container'>
        <div>
          <img src={Logo} alt="" className='home_logo'/>
        </div>
        <div></div>
        <div className='home_container_buttons'>
            <Button className='home_button' variant="secondary" size="lg">
            FAZER UMA DOAÇÃO
            </Button>
            <Button className='home_button' variant="secondary" size="lg">
              SOLICITAR UMA DOAÇÃO
            </Button>
            <Button className='home_button' variant="secondary" size="lg">
              FAÇO PARTE DO PROJETO
            </Button>
        </div>
        <div></div>
    </div>
  )
}

export default Home
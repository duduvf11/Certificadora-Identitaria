import {} from 'react'
import "./admin_home.css"

import Button from 'react-bootstrap/esm/Button'


const admin_home = () => {
  return (
    <div> 
    <Button className='home_button' variant="secondary" size="lg">
        SOLICITAÇÕES DE DOAÇÃO
    </Button>

    <Button className='home_button' variant="secondary" size="lg">
        HISTÓRICO DE DOAÇÕES
    </Button>

    <Button className='home_button' variant="secondary" size="lg">
        CONTROLE DE CAIXA E ESTOQUE
    </Button>
  </div>
  )
}

export default admin_home
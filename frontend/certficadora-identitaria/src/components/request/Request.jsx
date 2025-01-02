import { useState } from 'react';
import './request.css';

import Button from 'react-bootstrap/esm/Button';

const Request = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula a submissão e mostra os dados no console
    alert(`Solicitação de ${quantity} absorventes registrada com sucesso!`);
    console.log({ name, address, cpf, email, quantity });
  };

  return (
    <div className='background'>
      <div className="request_container">
        <div></div>
        <h1>Solicitar uma Doação</h1>
        <p>Preencha as informações abaixo para solicitar a doação de absorventes.</p>

        <form className='request_form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              required
            />
          </div>

          <div>
            <label htmlFor="address">Endereço:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Seu endereço"
              required
            />
          </div>

          <div>
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="Seu CPF"
              required
            />
          </div>

          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              required
            />
          </div>

          <div>
            <label htmlFor="quantity">Quantidade de Absorventes:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              required
            />
          </div>

          <Button className="donation_button" variant="secondary" size="lg" type="submit">
                Confirmar Solicitação
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Request;
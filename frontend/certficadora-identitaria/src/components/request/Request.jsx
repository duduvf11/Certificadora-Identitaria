import { useState } from 'react';
import './request.css';

import Button from 'react-bootstrap/esm/Button';

const Request = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [quantidade, setQuantidade] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requestData = {
      nome,
      endereco,
      cpf: Number(cpf),
      email,
      quantidade: Number(quantidade), // Garantir que a quantidade seja numérica
    };
  
    try {
      const response = await fetch('http://localhost:3000/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert(`Solicitação registrada com sucesso! ID: ${data.id}`);
        console.log('Resposta do servidor:', data);
  
        // Resetar os campos após o envio bem-sucedido
        setNome('');
        setEndereco('');
        setCpf('');
        setEmail('');
        setQuantidade(1);
      } else {
        alert('Erro ao enviar a solicitação. Tente novamente.');
        console.error('Erro:', response.statusText);
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor.');
      console.error('Erro de conexão:', error);
    }
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
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              required
            />
          </div>

          <div>
            <label htmlFor="address">Endereço:</label>
            <input
              type="text"
              id="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              placeholder="Seu endereço"
              required
            />
          </div>

          <div>
            <label htmlFor="cpf">CPF:</label>
            <input
              type="number"
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
              id="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
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
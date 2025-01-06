import { useState } from 'react';
import "./donateMoney.css";

import Button from 'react-bootstrap/esm/Button';

const DonateMoney = () => {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [comprovante, setComprovante] = useState(null);

  const handleFileChange = (e) => {
    setComprovante(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      nome,
      quantidade: parseFloat(quantidade), // Converte para número se necessário
      telefone,
      comprovante: comprovante ? comprovante.name : null,
    };
  
    try {
      const response = await fetch('http://localhost:3000/money', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        alert(`Doação de R$${quantidade} registrada com sucesso!`);
        setNome('');
        setQuantidade('');
        setTelefone('');
        setComprovante(null);
      } else {
        alert('Erro ao registrar a doação. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar a doação:', error);
      alert('Erro ao conectar ao servidor.');
    }
  };

  return (
    <div className="background">
      <div className="donate_money_container">
        <h1>Doação de Dinheiro</h1>
        <p>Preencha os campos abaixo para realizar a doação.</p>

        <form className="donate_money_form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
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
            <label htmlFor="quantidade">Valor da Doação:</label>
            <input
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              placeholder="Ex: 50,00"
              required
            />
          </div>

          <div>
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(XX) XXXXX-XXXX"
              required
            />
          </div>

          <div>
            <label htmlFor="comprovante">Comprovante de Doação:</label>
            <input
              type="file"
              id="comprovante"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              required
            />
          </div>

          <Button className="donation_button" variant="secondary" size="lg" type="submit">
            Confirmar Doação
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DonateMoney;
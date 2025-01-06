import { useState } from 'react';
import "./donateAbsorvent.css";

import Button from 'react-bootstrap/esm/Button';

const DonateAbsorvents = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Criar um objeto com os dados da doação
    const donationData = {
      nome: name,
      quantidade: Number(quantity),
      telefone: phone,
    };

    try {
      // Enviar os dados para o backend
      const response = await fetch('http://localhost:3000/pad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Definir o tipo de conteúdo como JSON
        },
        body: JSON.stringify(donationData), // Converter os dados para formato JSON
      });

      if (response.ok) {
        alert(`Doação de ${quantity} pacotes de absorventes registrada com sucesso!`);
        setName('');
        setQuantity(1);
        setPhone('');
      } else {
        alert('Erro ao registrar a doação. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar a doação:', error);
      alert('Erro ao conectar ao servidor.');
    }
  };

  return (
    <div className='background'>
      <div className="donate_absorvents_container">
        <div></div>
        <h1>Doação de Absorventes</h1>
        <p>Preencha os campos abaixo para realizar a doação.</p>

        <form className='donate_absorvents_form' onSubmit={handleSubmit}>
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
            <label htmlFor="quantity">Quantidade de Pacotes:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              required
              />
          </div>

          <div>
            <label htmlFor="phone">Telefone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(XX) XXXXX-XXXX"
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

export default DonateAbsorvents;

import React, { useState } from 'react';

const DonateAbsorvents = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula a submissão e mostra os dados no console
    alert(`Doação de ${quantity} pacotes de absorventes registrada com sucesso!`);
    console.log({ name, quantity, phone });
  };

  return (
    <div className="donate-absorvents-container">
      <h1>Doação de Absorventes</h1>
      <p>Preencha os campos abaixo para realizar a doação.</p>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Confirmar Doação</button>
      </form>
    </div>
  );
};

export default DonateAbsorvents;

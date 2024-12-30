import React, { useState } from 'react';

const DonateMoney = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [receipt, setReceipt] = useState(null);

  const handleFileChange = (e) => {
    setReceipt(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula a submissão e mostra os dados no console
    alert(`Doação de R$${amount} registrada com sucesso! \nComprovante: ${receipt ? receipt.name : 'Nenhum arquivo anexado'}`);
    console.log({ name, amount, phone, receipt });
  };

  return (
    <div className="donate-money-container">
      <h1>Doação de Dinheiro</h1>
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
          <label htmlFor="amount">Valor da Doação:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ex: 50,00"
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

        <div>
          <label htmlFor="receipt">Comprovante de Doação:</label>
          <input
            type="file"
            id="receipt"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit">Confirmar Doação</button>
      </form>
    </div>
  );
};

export default DonateMoney;

import { useState, useEffect } from 'react';

const HistoricoDoacoes = () => {
  const [historicoMoney, setHistoricoMoney] = useState([]);
  const [historicoAbsorventes, setHistoricoAbsorventes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistoricos = async () => {
      try {
        // Chama os dois endpoints
        const [moneyResponse, absorventesResponse] = await Promise.all([
          fetch('http://localhost:3000/money'),
          fetch('http://localhost:3000/pad')
        ]);

        if (moneyResponse.ok) {
          const moneyData = await moneyResponse.json();
          setHistoricoMoney(moneyData);  // Armazena o histórico de doações de dinheiro
        } else {
          setError('Erro ao carregar o histórico de doações de dinheiro');
        }

        if (absorventesResponse.ok) {
          const absorventesData = await absorventesResponse.json();
          setHistoricoAbsorventes(absorventesData);  // Armazena o histórico de doações de absorventes
        } else {
          setError('Erro ao carregar o histórico de doações de absorventes');
        }
      } catch (err) {
        setError('Erro de conexão');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoricos();
  }, []); // O array vazio significa que o efeito será executado apenas uma vez após o componente ser montado.

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Histórico de Doações</h1>
      
      <h2>Doações de Dinheiro</h2>
      {historicoMoney.length === 0 ? (
        <p>Não há doações de dinheiro registradas.</p>
      ) : (
        <ul>
          {historicoMoney.map((doacao, index) => (
            <li key={index}>
              <strong>Nome:</strong> {doacao.nome} <br />
              <strong>Valor:</strong> R${doacao.quantidade} <br />
              <strong>Telefone:</strong> {doacao.telefone} <br />
              <strong>Comprovante:</strong> {doacao.comprovante || 'Nenhum'} <br />
              <hr />
            </li>
          ))}
        </ul>
      )}

      <h2>Doações de Absorventes</h2>
      {historicoAbsorventes.length === 0 ? (
        <p>Não há doações de absorventes registradas.</p>
      ) : (
        <ul>
          {historicoAbsorventes.map((doacao, index) => (
            <li key={index}>
              <strong>Nome:</strong> {doacao.nome} <br />
              <strong>Quantidade:</strong> {doacao.quantidade} pacotes <br />
              <strong>Telefone:</strong> {doacao.telefone} <br />
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoricoDoacoes;
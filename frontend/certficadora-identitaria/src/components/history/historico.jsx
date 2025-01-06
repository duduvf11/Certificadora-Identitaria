import { useState, useEffect } from 'react';
import './historico.css'

import { Card, Col, Row } from 'react-bootstrap';

const HistoricoDoacoes = () => {
  const [historicoMoney, setHistoricoMoney] = useState([]);
  const [historicoAbsorventes, setHistoricoAbsorventes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistoricos = async () => {
      try {
        const [moneyResponse, absorventesResponse] = await Promise.all([
          fetch('http://localhost:3000/money'),
          fetch('http://localhost:3000/pad')
        ]);

        if (moneyResponse.ok) {
          const moneyData = await moneyResponse.json();
          setHistoricoMoney(moneyData); 
        } else {
          setError('Erro ao carregar o histórico de doações de dinheiro');
        }

        if (absorventesResponse.ok) {
          const absorventesData = await absorventesResponse.json();
          setHistoricoAbsorventes(absorventesData); 
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
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='historico_container'>
      <h1>Histórico de Doações</h1>
      
      <h2>Doações de Dinheiro</h2>
      {historicoMoney.length === 0 ? (
        <p>Não há doações de dinheiro registradas.</p>
      ) : (
        <Row className="g-4 tabelas">
          {historicoMoney.map((doacao, index) => (
            <Col key={index}>
              <Card className='cards'>
                <Card.Body>
                  <Card.Title className='title'>{doacao.nome}</Card.Title>
                  <Card.Text className='text'>
                    <strong>Valor:</strong> R${doacao.quantidade} <br />
                    <strong>Telefone:</strong> {doacao.telefone} <br />
                    <strong>Comprovante:</strong> {doacao.comprovante || 'Nenhum'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <h2>Doações de Absorventes</h2>
      {historicoAbsorventes.length === 0 ? (
        <p>Não há doações de absorventes registradas.</p>
      ) : (
        <Row className="g-4 tabelas">
          {historicoAbsorventes.map((doacao, index) => (
            <Col key={index}>
              <Card className='cards'>
                <Card.Body>
                  <Card.Title className='title'>{doacao.nome}</Card.Title>
                  <Card.Text className='text'>
                    <strong>Quantidade:</strong> {doacao.quantidade} pacotes <br />
                    <strong>Telefone:</strong> {doacao.telefone} <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HistoricoDoacoes;
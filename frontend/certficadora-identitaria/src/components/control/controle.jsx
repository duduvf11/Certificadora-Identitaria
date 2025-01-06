import { useState, useEffect } from "react";
import './controle.css'

import { Table } from "react-bootstrap";

const Controle = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await fetch("http://localhost:3000/controle");
        if (response.ok) {
          const data = await response.json();
          setDados(data);  // Armazenando os dados no estado
        } else {
          setError("Erro ao carregar os dados de controle.");
        }
      } catch (err) {
        setError("Erro de conexão.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDados();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="controle_container">
      <h1>Controle de Caixa e Estoque</h1>

      <Table className="controle_tabela" striped bordered hover>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>ESTOQUE INICIAL</th>
            <th>ENTRADA</th>
            <th>SAIDA</th>
            <th>FINAL</th>
          </tr>
        </thead>
        <tbody>
          {/* Tabela para Dinheiro */}
          <tr>
            <td>Dinheiro</td>
            <td>0000000 R$</td>
            <td>{dados.dinheiro} R$</td>
            <td>0000000 R$</td>
            <td>{dados.dinheiro} R$</td>
          </tr>

          {/* Tabela para Absorventes */}
          <tr>
            <td>Absorventes</td>
            <td>0000000</td>
            <td>{dados.absorventes}</td>
            <td>0000000</td>
            <td>{dados.absorventes}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Controle;
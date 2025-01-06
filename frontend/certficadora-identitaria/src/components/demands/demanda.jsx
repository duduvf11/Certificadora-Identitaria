import { useState, useEffect } from 'react';

const Demanda = () => {
  const [solicitacoes, setSolicitacoes] = useState([]); // Estado para armazenar as solicitações

  // Função para buscar as solicitações do backend
  const fetchSolicitacoes = () => {
    fetch('http://localhost:3000/forms')
      .then((res) => res.json())
      .then((data) => {
        setSolicitacoes(data); // Atualiza o estado com as solicitações recebidas
      })
      .catch((err) => {
        console.error('Erro ao buscar as solicitações:', err);
      });
  };

  // Chama fetchSolicitacoes quando o componente é montado
  useEffect(() => {
    fetchSolicitacoes();
  }, []);

  return (
    <div>
      <h1>Solicitações de Doações</h1>
      <ul>
        {solicitacoes.length === 0 ? (
          <p>Nenhuma solicitação registrada.</p>
        ) : (
          solicitacoes.map((solicitacao, index) => (
            <li key={index}>
              <strong>Nome:</strong> {solicitacao.nome} | <strong>Endereço:</strong> {solicitacao.endereco} | <strong>CPF:</strong> {solicitacao.cpf} | <strong>E-mail:</strong> {solicitacao.email} | <strong>Quantidade:</strong> {solicitacao.quantidade}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Demanda;
const listaProdutos = [
    {id: 1,nome: "Camisa Polo", price: 100.95},
    {id: 2,nome: "Camiseta", price: 89.50},
    {id: 3,nome: "Short Curto", price: 19.90},
    {id: 4,nome: "Bermuda", price: 29.99},
    {id: 5,nome: "Boné", price: 18.50},
    {id: 6,nome: "Cueca Box", price: 12.99},
  ]
  export default listaProdutos
  
  import React from "react";
  import produtos from "../../data/produtos";
  import "../repetição/TabelaProdutos.css";
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (props) => {
    function getLinhas() {
      return produtos.map((produto, i) => {
        return (
          <tr
            key={produto.id}
            className={
              i % 2 === 0 ? "Tabela--produtoPar" : "Tabela--produtoImpar"
            }
          >
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>R$ {produto.price.toFixed(2).replace(".", ",")}</td>
          </tr>
        );
      });
    }
  
    return (
      <div>
        <table className="Tabela">
          <tbody>
            <tr className="Tabela--titulo">
              <th>Id</th>
              <th>Produto</th>
              <th>Preço</th>
            </tr>
            {getLinhas()}
          </tbody>
        </table>
      </div>
    );
  };
  
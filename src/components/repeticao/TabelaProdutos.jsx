import './TabelaProdutos.css'
import React from 'react'

import produtos from '../../data/produtos'

export default () => {
    const linhas = produtos.map((produto, i) => {
        return (
            <tr key={produto} className={i % 2 === 0 ? 'Par' : ''}>
                <td>{produto.id}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    });
    
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Descrição</td>
                        <td>Preço</td>
                    </tr>
                </thead>
                <tbody>
                    {linhas}
                </tbody>
            </table>
        </div>
    )
}
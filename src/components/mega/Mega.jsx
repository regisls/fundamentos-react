import React, { useState } from "react";

export default props => {
    function geraNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio) ? 
            geraNumeroNaoContido(min, max, array) : 
            aleatorio
    }
    
    function gerarNumeros(qtde) {
        const numeros = Array(qtde).fill(0).reduce((nums) => {
            const novoNumero = geraNumeroNaoContido(1, 60, nums)
            console.log([...nums, novoNumero]);
            return [...nums, novoNumero];
        }, [])
        .sort((n1, n2) => n1 - n2);

        return numeros;
    }
    
    const [qtde, setQtde] = useState(props.qtde || 6);
    const numerosIniciais = Array(qtde).fill(0);
    const [numeros, setNumeros] = useState(numerosIniciais);

    return (
        <div>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de números</label>
                <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)} />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar números</button>
        </div>
    )
}
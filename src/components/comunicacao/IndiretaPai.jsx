import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);

    function fornecerInformacoes(pNome, pIdade, pNerd) {
        setNome(pNome);
        setIdade(pIdade);
        setNerd(pNerd);
    }
    
    return (
        <div>
            <span>{nome} </span>
            <span>{idade} </span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>    
    )
}
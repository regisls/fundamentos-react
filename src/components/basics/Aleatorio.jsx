import React from 'react';

export default props => {
    
    
    const {min, max} = props;

    const aleatorio = parseInt(Math.random() * (props.max - props.min) + props.min);
    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>Valor mínimo: {min}</p>
            <p>Valor máximo: {max}</p>
            <p>Valor escolhido: {aleatorio}</p>
        </div>
    )
}
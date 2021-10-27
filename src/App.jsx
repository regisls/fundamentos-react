import './App.css'
import React from 'react'

import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Familia from './components/basics/Familia'
import Aleatorio from './components/basics/Aleatorio'
import Fragmento from './components/basics/Fragmento'
import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'

import Card from './components/layout/Card'

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            
            <div className="Cards">
                <Card titulo="Tabela produtos" color="#52fb94">
                    <TabelaProdutos />
                </Card>
                
                <Card titulo="Repetição" color="#f25b94">
                    <ListaAlunos />
                </Card>
                
                <Card titulo="Componente com filhos" color="#08ff">
                    <Familia sobrenome="Sebastiani">
                        <FamiliaMembro nome="Regis"></FamiliaMembro>
                        <FamiliaMembro nome="Agathe"></FamiliaMembro>
                        <FamiliaMembro nome="Aurora"></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo="Aleatório" color="#0F0">
                    <Aleatorio min={1} max={60} />
                </Card>
                
                <Card titulo="Fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="Fragmento">
                    <ComParametro
                        titulo="Segundo componente"
                        subtitulo="Legal"
                    />
                </Card>

                <Card titulo="Primeiro componente">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}
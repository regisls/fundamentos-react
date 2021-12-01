import './App.css'
import React from 'react'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
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
                <Card titulo="#13 - Mega" color="#f5a223">
                    <Mega></Mega>
                </Card>

                <Card titulo="#12 - Contador" color="#B5A2CD">
                    <Contador numeroInicial={10}></Contador>
                </Card>
                
                <Card titulo="#11 - Componente controlado" color="#B5A22D">
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação indireta" color="#8572BF">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#9 - Comunicação direta" color="#65724F">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#8 - Renderização condicional" color="#982385">
                    <ParOuImpar numero={25}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Regis' }}></UsuarioInfo>
                    <UsuarioInfo usuario={{ email: 'regis@regisls.net' }}></UsuarioInfo>
                </Card>

                <Card titulo="#7 - Tabela produtos" color="#52fb94">
                    <TabelaProdutos />
                </Card>
                
                <Card titulo="#6 - Repetição" color="#f25b94">
                    <ListaAlunos />
                </Card>
                
                <Card titulo="#5 - Componente com filhos" color="#08ff">
                    <Familia sobrenome="Sebastiani">
                        <FamiliaMembro nome="Regis"></FamiliaMembro>
                        <FamiliaMembro nome="Agathe"></FamiliaMembro>
                        <FamiliaMembro nome="Aurora"></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo="#4 - Aleatório" color="#0F0">
                    <Aleatorio min={1} max={60} />
                </Card>
                
                <Card titulo="#3 - Fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="#2 - Fragmento">
                    <ComParametro
                        titulo="Segundo componente"
                        subtitulo="Legal"
                    />
                </Card>

                <Card titulo="#1 - Primeiro componente">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}
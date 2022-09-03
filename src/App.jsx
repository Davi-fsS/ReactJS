import './App.css'
import React, {Component} from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import CapsLock from './components/basicos/CapsLock'
import Pai from './components/comunicacao/direta/Pai'
import Soma from './components/basicos/Soma'
import RaizQ from './components/basicos/RaizQ';
import Super from './components/comunicacao/indireta/Super'
import IndiretoSuperior from './components/comunicacao/indireta/IndiretoSuperior'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import ContadorFun from './components/contador/ContadorFun'
import DivisorFun from './components/contador/DivisorFun'
import Divisor from './components/contador/Divisor'
import InputEmail from './components/contador/InputEmail';
import ContadorInPasso from './components/contador/ContadorInPasso'
import Sorteio from './components/mega-sena/Sorteio';

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>(
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente" color="#3385c6">
                <Primeiro/>
            </Card>

            <Card titulo="#02 - Componente com Parâmetro" color="#4279a3">
                <ComParametro titulo="esse é o título" subtitulo="esse é o subtítulo"/> 
            </Card>

            <Card titulo="#03 - Componentes com Filho" color="#3385c6">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Gabriel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#04 - Repetição" color="#4279a3">
                <Repeticao/>
            </Card>

            <Card titulo="#05 - Condicional v1" color="#3385c6">
                <Condicional numero={10}/>
            </Card>

            <Card titulo="#06 - Condicional v2" color="#4279a3">
                <CondicionalComIf numero={15}/>
            </Card>

            <Card titulo="#EXTRA - Capslock" color="#4B0082">
                <CapsLock frase="olaaa"/>
            </Card> 

            <Card titulo="#08 - Comunicacao Direta" color="#4279a3">
                <Pai/>
            </Card>

            <Card titulo="#EXTRA - Soma" color="#4B0082">
                <Soma>{[20,1000]}</Soma>
            </Card>

            <Card titulo ="#EXTRA - Raiz" color="#4B0082">
                <RaizQ>{121}</RaizQ>
            </Card>

            <Card titulo="#09 - Comunicacao Indireta" color="#3385c6">
                <Super></Super>
            </Card>

            <Card titulo="#EXTRA - Treino Comunicação Indireta" color="#4B0082">
                <IndiretoSuperior></IndiretoSuperior>
            </Card>

            <Card titulo="#10 - Input" color="#4279a3">
                <Input></Input>
            </Card>

            <Card titulo="#11 - Contador com Classes" color="#3385c6">
                <Contador passo={10} valor={100}></Contador>
            </Card>

            <Card titulo="#12 - Contador com Classes e Input" color="#3385c6">
                <ContadorInPasso valor={100}></ContadorInPasso>
            </Card>

            <Card titulo="#EXTRA - Contador com Funções" color="#4B0082">
                <ContadorFun></ContadorFun>
            </Card>

            <Card titulo="#EXTRA - Divisor de 5 iteradas com função" color="#4B0082">
                <DivisorFun valor={625}></DivisorFun>
            </Card>

            <Card titulo="#EXTRA - Divisor de 5 iteradas com classe" color="#4B0082">
                <Divisor valor={10} passo={5}></Divisor>
            </Card>

            <Card titulo="#EXTRA - Adiciona Endereço de email" color="#4B0082">
                <InputEmail></InputEmail>
            </Card>

            <Card titulo="#13 - Mega-Sena!" color="#3385c6">
                <Sorteio qtdNum = {6} intervalo={[1,60]}></Sorteio>
            </Card>
        </div>
        
    </div>
)
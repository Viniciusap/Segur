import React, { Component } from 'react';
import guarantee from '../Imgs/guarantee.png'
import delivery from '../Imgs/delivery.png'
import commerce from '../Imgs/commerce.png'
import finances from '../Imgs/finances.png'


export class Home extends Component {
    static displayName = Home.name;

    render() {

        return (
            <div>
                <h1>Sistemas Arancia - Portfólio</h1>

                <div className="row">
                    <div className="card-deck">
                        <div className="card border-info col-3" >
                            <a href='/insured'><h3 className="card-header">Seguros</h3></a>
                            <a href='/insured'><img src={guarantee} className="img" alt="" /></a>
                            <div className="card-body">
                                <a href='/insured'><p className="card-text">Fluxo de seguradora e segurado. As seguintes funcionalidades são incluidas: Cadastro, Cotação variável, Acionamento de sinistros, Processamento de Faturamento, Controle de Renovação, entre outros.</p></a>
                            </div>
                        </div>
                        <div className="card border-info col-3" >
                            <a href='/insured'><h3 className="card-header">Comercio</h3></a>
                            <a href='/insured'><img src={delivery} className="img" alt="" /></a>
                            <div className="card-body">
                                <a href='/insured'><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></a>
                            </div>
                        </div>
                        <div className="card border-info col-3" >
                            <a href='/insured'><h3 className="card-header">Logistica</h3></a>
                            <a href='/insured'><img src={commerce} className="img" alt="" /></a>
                            <div className="card-body">
                                <a href='/insured'><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></a>
                            </div>
                        </div>
                        <div className="card border-info col-3" >
                            <a href='/insured'><h3 className="card-header">Financeiro</h3></a>
                            <a href='/insured'><img src={finances} className="img" alt="" /></a>
                            <div className="card-body">
                                <a href='/insured'><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></a>
                            </div>
                        </div>
                    </div>
                </div>

                <p>Entre em contato.</p>
                <ul>
                    <li>Desenvolvimento de Softwares</li>
                    <li>Integrações com API's</li>
                    <li>Manutenções/Migração em software legado</li>
                    <li>Adequação LGPD</li>

                </ul>

            </div>
        );
    }
}

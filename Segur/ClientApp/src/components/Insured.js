import React, { Component, useState } from 'react';

const initialState = {
    name: '',
    age: 0,
    billingAddress: '',
    legalDocument: '',
    responsabilityScore: 0,
    insuranceId: 0,

    postId: 0
}
export class Insured extends Component {
    static displayName = Insured.name;

    constructor(props) {
        super(props);
        this.state = {
            Insureds: [], loading: true,
            Id: 0,
            name: '',
            age: 0,
            billingAddress: '',
            legalDocument: '',
            responsabilityScore: 0,
            insuranceId: 0,
        }
    }

    componentDidMount() {
        this.populateInsured();
    }

    onChange = (e) => {
        const value = e.target.value
        const nameField = e.target.name

        this.setState({
            [nameField]: value
        })
    }

    clear = () => {
        this.setState(initialState)
    }

    onSubmit = (e) => {
        debugger
        e.preventDefault();
        const Insured = {
            Id: 0,
            Name: this.state.name,
            Age: this.state.age,
            billingAddress: this.state.billingAddress,
            LegalDocument: this.state.legalDocument,
            ResponsabilityScore: 0 ,//this.state.ResponsabilityScore,
            InsuranceId: 0 ,//this.state.InsuranceId,
        }
        try {
            console.log(Insured)
            this.insertInsured(Insured)
            console.log(Insured)
            this.clear()
            this.setState({ successAdd: true })
        }
        catch (error) {
            const errors = error.errors
            this.setState({ errors: errors })
        }
    }

    async populateInsured() {
        const response = await fetch('/api/InsuredBrowse/all');
        const data = await response.json();
        this.setState({ Insureds: data, loading: false });
    }

    insertInsured(Insured) {
        // PUT request using fetch with set headers
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({Insured})
        };
        fetch('/api/InsuredBrowse/create', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));

            
    }

    static renderInsuredsTable(Insureds) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    {Insureds.map(Insured =>
                        <tr key={Insured.id}>
                            <td>{Insured.name}</td>
                            <td>{Insured.age}</td>
                            <td>{Insured.billingAddress}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Insured.renderInsuredsTable(this.state.Insureds);

        return (
            <div>


                <h1>Cadastro de Segurado</h1>

                <p aria-live="polite">Escreva os dados abaixo</p>

                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text"
                                    value={this.state.name}
                                    name="name"
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Idade: *</label>
                                <input type="text"
                                    value={this.state.age}
                                    name="age"
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Endereço: *</label>
                                <input type="text"
                                    value={this.state.billingAddress}
                                    name="billingAddress"
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>CPF: *</label>
                                <input type="text"
                                    value={this.state.legalDocument}
                                    name="legalDocument"
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <button className="btn btn-primary" type="submit" onClick={this.onSubmit}>
                                Salvar
                            </button>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-warning" onClick={this.clear}>Limpar</button>
                        </div>
                    </div>

                </form>

                <h1 id="tabelLabel" >Insureds</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}


            </div>
        );
    }
}

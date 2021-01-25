import React, { Component } from 'react';

const initialState = {
    Name: '',
    Age: 0,
    Address: '',
}
export class Insured extends Component {
    static displayName = Insured.name;

    constructor(props) {
        super(props);
        this.state = { Insureds: [], loading: true, Id: 0, Name: '', Age: 0, Address: '', };
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
        e.preventDefault();
        const Insured = {
            Name: this.state.Name,
            Age: this.state.Age,
            Address: this.state.Address,
            Errors: []
        }
        try {
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
        const response = await fetch('InsuredBrowse');
        const data = await response.json();
        this.setState({ Insureds: data, loading: false });
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
                            <td>{Insured.address}</td>
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
                                    value={this.state.Name}
                                    name="Name"
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Idade: *</label>
                                <input type="text"
                                    value={this.state.Age}
                                    name="Age"
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-10">
                            <div className="form-group">
                                <label>Endereço: *</label>
                                <input type="text"
                                    value={this.state.Address}
                                    name="Address"
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <button className="btn btn-primary" type="submit">
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

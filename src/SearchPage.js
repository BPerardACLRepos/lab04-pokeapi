import React from 'react';
import request from 'superagent';

export default class SearchPage extends React.Component {

    state = {
        pokemonArray: [],
        totalPokemon: 0,
        pokemonPerPage: 20,
        currentPage: 1,
        loading: false,
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    componentDidUpdate = async (prevProps, prevState) => {
        // Render new pokemon on page change
        if (prevState.currentPage !== this.state.currentPage) {
            await this.fetchPokemon();
        }
    }

    fetchPokemon = async () => {

        this.setState({ loading: true });

        const pokeapiData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=${this.state.pokemonPerPage}`);

        this.setState({
            loading: false,
            pokemonArray: pokeapiData.body.results,
            totalPokemon: pokeapiData.body.count,
        });
    }

    handleNextPageClick = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }

    handlePreviousPageClick = () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        });
    }

    render() {

        const {
            pokemonArray,
            loading,
        } = this.state;

        const lastPage = Math.ceil(this.state.totalPokemon / this.state.pokemonPerPage);

        return (
            <div>
                <h2>
                    Page {this.state.currentPage}
                </h2>
                <button onClick={this.handlePreviousPageClick} disabled={this.state.currentPage === 1}>
                    Previous Page
                </button>
                <button onClick={this.handleNextPageClick} disabled={this.state.currentPage === lastPage}>
                    Next Page
                </button>
            </div>
        );
    }
}
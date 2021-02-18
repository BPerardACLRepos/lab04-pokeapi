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

    fetchPokemon = async () => {

        this.setState({ loading: true });

        // we AWAITED a PROMISE
        const pokeapiData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=${this.state.pokemonPerPage}`);

        this.setState({
            loading: false,
            pokemonArray: data.body.results,
            totalPokemon: data.body.count
        });
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
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

    render() {
        return (
            <div>

            </div>
        );
    }
}
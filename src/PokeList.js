import React from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends React.Component {
    render() {
        return this.props.pokemonArray.map(pokemon =>
            <PokeItem pokemon={pokemon} />
        )
    }
}
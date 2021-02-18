import React from 'react';
import { Link } from 'react-router-dom';

export default class PokeItem extends React.Component {
    render() {
        return (
            <Link to={`/pokemon/${this.props.pokemon.pokemon}`}>
                <div className="poke-div" key={this.props.pokemon._id}>
                    <h2>
                        {this.props.pokemon.pokemon}
                    </h2>
                    <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
                </div>
            </Link>
        )
    }
}
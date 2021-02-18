import React from 'react';
import { Link } from 'react-router-dom';

export default class PokeItem extends React.Component {
    render() {
        return (
            <Link to={`/pokemon/${this.props.pokemon._id}/${this.props.pokemon.pokemon}`} key={this.props.pokemon._id}>
                <div className="poke-div">
                    <h2>
                        {this.props.pokemon.pokemon}
                    </h2>
                    <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
                </div>
            </Link>
        )
    }
}
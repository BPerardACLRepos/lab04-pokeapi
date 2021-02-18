import React from 'react';
import request from 'superagent';



export default class DetailPage extends React.Component {

    state = {
        pokeObject: {},
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {

        this.setState({ loading: true });

        const pokeapiData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`);

        this.setState({
            loading: false,
            pokeObject: pokeapiData.body.results.find(pokemon => {
                return pokemon._id === this.props.match.params._id;
            }),
        });
    }

    render() {
        console.log(this.state.pokeObject.pokemon);
        return (
            <div>
                <h1>
                    welcome to details
                </h1>
            </div>
        )
    }
}
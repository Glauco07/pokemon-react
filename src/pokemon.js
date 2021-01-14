import React from "react"

function Pokemon() {
    let pokemon = getPokemonData()
    return (
        <div>
            <h1>Uma foto qualquer!</h1>
            <img src="https://picsum.photos/200/300" alt="Imagem aleatória"/>
            <p>Essa é uma foto aleatória</p>
            <p>pokemon: {pokemon}</p>
        </div>
    )
}

function getPokemonData() {
    let pokemon = 'pikachu'
    let endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    fetch(endpoint).then(
        (response) => response.json()
    ).then(
        function(obj) {
            console.log(obj)
        }
    ).catch(function(error) {
            console.error("Error in the URL fetch")
            console.error(error)
        }
    )

    return endpoint
}

export default Pokemon
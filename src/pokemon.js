import React, { useState, useEffect } from 'react'

function Pokemon() {
    const [pokemonProps, setPokemonProps] = useState({name: "Carregando..."});

    useEffect(() => {
        async function fetchMyAPI() {
            const data = await getPokemonData()
            setPokemonProps(data)
        }

        fetchMyAPI()
      }, [])

    console.log(pokemonProps.name)

    return (
        <div>
            <h1>Uma foto qualquer!</h1>
            <img src="https://picsum.photos/200/300" alt="Imagem aleatória"/>
            <p>Essa é uma foto aleatória</p>
            <p>pokemon: {pokemonProps.name}</p>
        </div>
    )
}

async function getPokemonData() {
    let pokemon = 'pikachu'
    let endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    return await fetch(endpoint).then(
        async (response) => await response.json()
    ).then(
        function(obj) {
            return obj
        }
    ).catch(function(error) {
            console.error("Error in the URL fetch")
            console.error(error)

            return {}
        }
    )
}

export default Pokemon
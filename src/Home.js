import React, { useState } from 'react'

function Home() {
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonImage, setPokemonImage] = useState("")

    async function getPokemonData() {
        let endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    
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

    async function handleClick() {
        const pokemonData = await getPokemonData()
        setPokemonImage(pokemonData.sprites.front_shiny)
    }
    
    return(
        <div>
            <input type="text" onChange={(e) => setPokemonName(e.target.value)}/>
            <input type="button" value="send" onClick={handleClick}/>
            {pokemonImage.length > 0 && <img src={pokemonImage} alt="Pokemon image"/>}
        </div>
    )
}

export default Home
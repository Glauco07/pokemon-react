import React, { useState } from 'react'
import "./Home.css"

function Home() {
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonImage, setPokemonImage] = useState("")
    const [error, setError] = useState(false)

    async function getPokemonData() {
        let endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    
        return await fetch(endpoint).then(
            async (response) => await response.json()
        ).then(
            function(obj) {
                return obj
            }
        ).catch(function(error) {
                console.error("Error: " + error)
    
                return {}
            }
        )
    }

    async function handleSubmit(e) {
        if(e.keyCode == 13) {
            const pokemonData = await getPokemonData()
            if(pokemonData.hasOwnProperty("sprites") && pokemonData.sprites.hasOwnProperty("front_shiny")) {
                setPokemonImage(pokemonData.sprites.front_default)
                setError(false)
            } else {
                setError(true)
            }
        }
    }

    function handleImageClick(e) {
        window.open(`https://bulbapedia.bulbagarden.net/wiki/${pokemonName}_(Pok%C3%A9mon)`)
    }
    
    return(
        <div className="home-container">
            <div className="logo-container">
                <img className="pokemon-logo" src="logo.png" alt="Pokemon logo"/>
            </div>
            <div className="info-container">
                {!error && pokemonImage.length > 0 &&
                <div className="image-container" onClick={handleImageClick}>
                    <img className="pokemon-image" src={pokemonImage} alt="Pokemon image"/>
                </div>}
                {error && <p style={{"color": "red"}}>Pokemon não encontrado</p>}
                <input className="searchbar" type="text" onChange={(e) => setPokemonName(e.target.value)} onKeyDown={handleSubmit}/>
            </div>
        </div>
    )
}

export default Home
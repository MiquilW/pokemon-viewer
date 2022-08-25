import React, { useState, useEffect } from 'react'

export default function PokemonList({ pokemon, currentPageUrl }) {
    let pokemonAmount = currentPageUrl.slice(currentPageUrl.indexOf('=')+1, currentPageUrl.indexOf('&'))
    pokemonAmount = Number(pokemonAmount)
    console.log(currentPageUrl)
    
    // Fixes bug where pokemon images don't appear
    if (isNaN(pokemonAmount)) {
      pokemonAmount = 0
    }

    const [isShiny, setShiny] = useState(false)

    for (let i = 0; i < pokemon.length; i++) {
      if (isShiny === true) {
        pokemon[i] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i + pokemonAmount + 1}.png`
      }
      else {
        pokemon[i] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + pokemonAmount + 1}.png`
      }
  }

  function turnShiny() {
    setShiny(!isShiny)
  }

  return (
    <>
    <div>{pokemon.map(p => (
      <img src={p} key={p}></img>
  ))}</div>
    <div class='buttonContainer'>
      <button onClick={turnShiny}>Shiny</button>
    </div>
  </>
  )
}

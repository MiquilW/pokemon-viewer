import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import setShiny from './PokemonList'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div class='buttonContainer'>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
}

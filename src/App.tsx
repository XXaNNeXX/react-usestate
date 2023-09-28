import { useState } from 'react'
import CharactersOutput from "./CharactersOutput.tsx";
import {characters, RickAndMortyCharacter} from "./assets/RickAndMortyCharacters.tsx";

export default function App() {

    const [character, setCharacter] = useState<RickAndMortyCharacter[]>(characters.results)

  return (
    <>
        <CharactersOutput allCharacters={character}/>
    </>
  )
}



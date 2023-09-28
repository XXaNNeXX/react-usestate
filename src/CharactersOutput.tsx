import {RickAndMortyCharacter} from "./assets/RickAndMortyCharacters.tsx";
import CharacterInfo from "./CharacterInfo.tsx";

type CharactersOutput = {
    allCharacters: RickAndMortyCharacter[]
}

export default function CharactersOutput(props: CharactersOutput) {

    return (

        <div>
            <h2>GALLERY</h2>
            {props.allCharacters.map(item => <CharacterInfo
                                                                        key={item.id}
                                                                        oneCharacter={item}
                                                                        />)}
        </div>
    )
}
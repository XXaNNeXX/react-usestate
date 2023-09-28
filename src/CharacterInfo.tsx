import {RickAndMortyCharacter} from "./assets/RickAndMortyCharacters.tsx";

type CharacterCard = {
    oneCharacter: RickAndMortyCharacter
}

export default function CharacterInfo(props: CharacterCard) {

    return (

        <div>
            <h3>Character:</h3>
            <ul>
                <li>{props.oneCharacter.name}</li>
                <li>{props.oneCharacter.status}</li>
                <li>{props.oneCharacter.species}</li>
            </ul>
        </div>
    )
}
import { Character } from "src/app/models/character/character.model";
import { Loadable } from "./loadable";

export interface CharacterState extends Loadable {
    data: Character[];   
}

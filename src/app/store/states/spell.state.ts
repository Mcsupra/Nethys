import { Spell } from "src/app/models/spell.model";
import { Loadable } from "./loadable";

export interface SpellState extends Loadable {
    data: Spell[];   
}

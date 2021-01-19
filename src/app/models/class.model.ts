import { Spell } from "./spell.model";

export interface Class {
    name: string;
    castType: string;
    learned: boolean;
    prepared: boolean;
    spellList: Spell[];
}

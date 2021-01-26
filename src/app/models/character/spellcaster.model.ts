import { Spell } from '../spell.model';
import { Character } from './character.model';
import { Slots } from './slots.model';

export interface Spellcaster extends Character {
    knownSpells: Spell[];
    slots: Slots;
}

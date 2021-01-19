import { Spell } from "../spell.model";

export interface Spells {
    known: Spell[];
    slots: {
        cantrip: {
            total: number;
            prepared: Spell[];
        },
        first: {
            total: number;
            prepared: [{
                spell: Spell;
                casted: boolean;
            }]
        },
        second: {
            total: number;
            prepared: [{
                spell: Spell;
                casted: boolean;
            }]
        },
        third: {
            total: number;
            prepared: [{
                spell: Spell;
                casted: boolean;
            }]
        },
        fourth: {
            total: number;
            prepared: [{
                spell: Spell;
                casted: boolean;
            }]
        },
        fifth: {
            total: number;
            prepared: [{
                spell: Spell;
                casted: boolean;
            }]
        },
        sixth: {
            total: number;
            prepared: [{
                spell: Spell;
                casted: boolean;
            }]
        },
        seventh: {
            total: number;
            prepared: [{
                spell: Spell;
                casted: boolean;
            }]
        },
        eigth: {
            total: number;
            prepared: [{
                spell: Spell;
                casted: boolean;
            }]
        },
        ninth: {
            total: number;
            prepared: [{
                spell: Spell;
                casted: boolean;
            }]
        } 
    }
}

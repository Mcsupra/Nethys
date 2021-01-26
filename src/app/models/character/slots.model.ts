import { Spell } from '../spell.model';

export interface Slots {
    cantripTotal: number;
    cantripPrepared: [{
        id: number;
        spell: Spell;
        casted: boolean;
    }];
    firstTotal: number;
    firstPrepared: [{
        id: number;
        spell: Spell;
        casted: boolean;
    }];
    secondTotal: number;
    secondPrepared: [{
        id: number;
        spell: Spell;
        casted: boolean;
    }];
    thirdTotal: number;
    thirdPrepared: [{
        id: number;
        spell: Spell;
        casted: boolean;
    }];
    fourthTotal: number;
    fourthPrepared: [{
        id: number;
        spell: Spell;
        casted: boolean;
    }];
    fifthTotal: number;
    fifthPrepared: [{
        id: number;
        spell: Spell;
        casted: boolean;
    }];
    sixthTotal: number;
    sixthPrepared: [{
        id: number;
        spell: Spell;
        casted: boolean;
    }];
    seventhTotal: number;
    seventhPrepared: [{
        id: number;
        spell: Spell;
        casted: boolean;
    }];
    eighthTotal: number;
    eighthPrepared: [{
        id: number;
        spell: Spell;
        casted: boolean;
    }];
    ninthTotal: number;
    ninthPrepared: [{
        id: number;
        spell: Spell;
        casted: boolean;
    }];
}

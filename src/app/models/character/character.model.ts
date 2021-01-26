import { Class } from '../class.model';
import { EquipmentSet } from './equipmentSet.model';
import { Feats } from './feats.model';
import { Skills } from './skills.model';
import { Status } from './status.model';

/**
 * All optional fields and class will not be optional upon release,
 * except for the descriptors at the bottom which have no
 * statistical gameplay implications.
 */
export interface Character {

    id: number;
    username: string;
    name: string;
    level: number;

    alignment?: string;
    size?: string;
    deity?: string;
    age?: number;
    initiative?: number;

    equipmentSet?: EquipmentSet;
    status?: Status;
    skills?: Skills;
    feats?: Feats;
    class: Class;

    armorClass?: {
        total: number;
        touch: number;
        flatFooted: number;
        cmd: number;
        cmb: number;
    };

    speed?: {
        land: number;
        fly: number;
    };

    hitPoints?: {
        hitDie: number;
        current: number;
        max: number;
        temporary: number;
    };

    abilityScores: {
        strength: number;
        dexterity: number;
        constitution: number;
        intellect: number;
        wisdom: number;
        charisma: number;
    };

    saves?: {
        reflex: number;
        fortitude: number;
        will: number;
    };

    // Descriptors
    gender?: string;
    height?: string;
    weight?: string;
    hair?: string;
    eyes?: string;

}

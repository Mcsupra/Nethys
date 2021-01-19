import { Feat } from "src/app/models/feat.model";
import { Loadable } from "./loadable";

export interface FeatState extends Loadable {
    data: Feat[];   
}

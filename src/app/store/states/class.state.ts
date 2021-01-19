import { Class } from "src/app/models/class.model";
import { Loadable } from "./loadable";

export interface ClassState extends Loadable {
    data: Class[];   
}

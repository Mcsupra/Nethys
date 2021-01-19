import { Payload } from "./payload";

export interface Loadable extends Payload {
    loaded: boolean;
    loading: boolean;
    error: string;
}
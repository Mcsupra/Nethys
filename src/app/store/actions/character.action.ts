import { createAction, props, union } from "@ngrx/store";
import { Character } from "src/app/models/character/character.model";

export const CHARACTER_LOAD = '[Initialize] Character Load';
export const CHARACTER_LOAD_SUCCESS = '[Initialize] Character Load Success';
export const CHARACTER_LOAD_FAILURE = '[Initialize] Character Load Failure';

export const characterLoad = createAction (
    CHARACTER_LOAD
);

export const characterLoadSuccess = createAction (
    CHARACTER_LOAD_SUCCESS,
    props<{ inputCharacters: Character[] }>()
);

export const characterLoadFailure = createAction (
    CHARACTER_LOAD_FAILURE,
    props<{ inputError: string }>()
);

export const allActions = union ({
    characterLoad,
    characterLoadSuccess,
    characterLoadFailure
});

export type AllCharacterActions = typeof allActions;

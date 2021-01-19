import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { characterLoad } from '../store/actions/character.action';
import { AppState } from '../store/states';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(characterLoad());
  }

}

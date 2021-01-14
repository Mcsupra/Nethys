import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterSheetRoutingModule } from './character-sheet-routing.module';
import { DetailTabsComponent } from './detail-tabs/detail-tabs.component';
import { ActionsComponent } from './detail-tabs/actions/actions.component';
import { SpellsComponent } from './detail-tabs/spells/spells.component';
import { ManageSpellsComponent } from './detail-tabs/spells/manage-spells/manage-spells.component';
import { EquipmentComponent } from './detail-tabs/equipment/equipment.component';
import { ManageEpuipmentComponent } from './detail-tabs/equipment/manage-epuipment/manage-epuipment.component';
import { CharacterFeaturesComponent } from './detail-tabs/character-features/character-features.component';
import { DescriptionComponent } from './detail-tabs/description/description.component';
import { NotesComponent } from './detail-tabs/notes/notes.component';
import { SkillsComponent } from './skills/skills.component';
import { HitPointsComponent } from './hit-points/hit-points.component';
import { StatusComponent } from './status/status.component';
import { CharacterSheetComponent } from './character-sheet.component';


@NgModule({
  declarations: [
    CharacterSheetComponent,
    DetailTabsComponent,
    ActionsComponent, 
    SpellsComponent, 
    ManageSpellsComponent, 
    EquipmentComponent, 
    ManageEpuipmentComponent, 
    CharacterFeaturesComponent, 
    DescriptionComponent, 
    NotesComponent, 
    SkillsComponent, 
    HitPointsComponent, 
    StatusComponent
  ],
  imports: [
    CommonModule,
    CharacterSheetRoutingModule
  ]
})
export class CharacterSheetModule { }

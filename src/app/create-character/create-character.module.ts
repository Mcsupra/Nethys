import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCharacterRoutingModule } from './create-character-routing.module';
import { CreateCharacterComponent } from './create-character.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ChooseRaceComponent } from './choose-race/choose-race.component';
import { ChooseClassComponent } from './choose-class/choose-class.component';
import { ChooseStatsComponent } from './choose-stats/choose-stats.component';
import { ChooseSkillsComponent } from './choose-skills/choose-skills.component';
import { ChooseFeatsComponent } from './choose-feats/choose-feats.component';
import { ChooseEquipmentComponent } from './choose-equipment/choose-equipment.component';
import { ChooseDescriptionComponent } from './choose-description/choose-description.component';


@NgModule({
  declarations: [
    CreateCharacterComponent, 
    ProgressBarComponent, 
    ChooseRaceComponent, 
    ChooseClassComponent, 
    ChooseStatsComponent, 
    ChooseSkillsComponent, 
    ChooseFeatsComponent, 
    ChooseEquipmentComponent, 
    ChooseDescriptionComponent
  ],
  imports: [
    CommonModule,
    CreateCharacterRoutingModule
  ]
})
export class CreateCharacterModule { }

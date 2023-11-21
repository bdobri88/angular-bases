import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/add-character/add-character.component';




@NgModule({
  exports: [
    MainPageComponent,
    ListComponent,
    CharacterComponent
  ],
  declarations: [
    MainPageComponent,
    ListComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }

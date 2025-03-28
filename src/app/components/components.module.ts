import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { TranslateModule } from '@ngx-translate/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    ActionButtonsComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [
    ActionButtonsComponent,
    NavBarComponent,
  ],
})
export class ComponentsModule { }

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import 'hammerjs';
import {
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatTooltipModule,
  MatCheckboxModule, 
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatGridListModule,
  MatSlideToggleModule, MatExpansionModule,
  MatTableModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {GridsterModule} from '../lib';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetsComponent } from './dashboard/widgets/widgets.component';
import { NavComponent } from './dashboard/nav/nav.component';
import { GridComponent } from './dashboard/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetsComponent,
    NavComponent,
    GridComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule, MatIconModule, MatButtonModule, MatSelectModule, MatInputModule, MatTooltipModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatExpansionModule,
    GridsterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

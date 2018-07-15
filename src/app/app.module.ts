import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from '../mat/mat.module';

import { ControlModule } from 'control/control.module';

import { AppComponent } from './app.component';
import { CaesarComponent } from './caesar/caesar.component';
import { EntryPipe } from './caesar/entry.pipe';

import { CaesarService } from './caesar/caesar.service';
import { TabComponent } from './caesar/tab/tab.component';
import { ArraymodelComponent } from './caesar/arraymodel/arraymodel.component';
import { ListComponent } from './caesar/list/list.component';
import { ListItemComponent } from './caesar/list-item/list-item.component';
import { PanelComponent } from './caesar/panel/panel.component';
import { MyhighlightDirective } from './caesar/myhighlight.directive';
import { DropdownComponent } from './caesar/dropdown/dropdown.component';
import { FormComponent } from './caesar/form/form.component';
import { CollapseComponent } from './caesar/collapse/collapse.component';
import { SearchComponent } from './caesar/search/search.component';
import { AniComponent } from './caesar/ani/ani.component';
import { DirectivesComponent } from './caesar/directives/directives.component';
import { ClickableDirective } from './caesar/clickable.directive';
import { MatTableComponent } from './mat-table/mat-table.component';
import { BasicTableComponent } from './mat-table/basic-table/basic-table.component';
import { SortTableComponent } from './mat-table/sort-table/sort-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CaesarComponent,
    EntryPipe,
    TabComponent,
    ArraymodelComponent,
    ListComponent,
    ListItemComponent,
    PanelComponent,
    MyhighlightDirective,
    DropdownComponent,
    FormComponent,
    CollapseComponent,
    SearchComponent,
    AniComponent,
    DirectivesComponent,
    ClickableDirective,
    MatTableComponent,
    BasicTableComponent,
    SortTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ControlModule,
    MatModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'mat-table',
        pathMatch: 'full'
      },
      {
        path: 'caesar',
        component: CaesarComponent
      },
      {
        path: 'directives',
        component: DirectivesComponent
      },
      {
        path: 'mat-table',
        component: MatTableComponent
      }
    ])
  ],
  entryComponents: [],
  exports: [],
  providers: [CaesarService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CaesarComponent } from './caesar/caesar.component';
import { EntryPipe } from './entry.pipe';

import { CaesarService } from './caesar.service';
import { TabComponent } from './tab/tab.component';
import { ArraymodelComponent } from './arraymodel/arraymodel.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { PanelComponent } from './panel/panel.component';
import { MyhighlightDirective } from './myhighlight.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormComponent } from './form/form.component';
import { CollapseComponent } from './collapse/collapse.component';
import { SearchComponent } from './search/search.component';
import { AniComponent } from './ani/ani.component';
import { DirectivesComponent } from './directives/directives.component';
import { ClickableDirective } from './clickable.directive';

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
    ClickableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'directives',
        pathMatch: 'full'
      },
      {
        path: 'caesar',
        component: CaesarComponent
      },
      {
        path: 'tab',
        component: TabComponent
      },
      {
        path: 'directives',
        component: DirectivesComponent
      }
    ])
  ],
  providers: [CaesarService],
  bootstrap: [AppComponent]
})
export class AppModule {}

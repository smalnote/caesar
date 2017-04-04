import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
    MyhighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [{
        path: '',
        redirectTo: 'caesar',
        pathMatch: 'full'
      },
      {
        path: 'caesar',
        component: CaesarComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'arraymodel',
        component: ArraymodelComponent
      },
      {
        path: 'tab',
        component: TabComponent
      }, {
        path: 'list/item/:index',
        component: ListItemComponent
      },
      {
        path: 'panel',
        component: PanelComponent
      }]
    )
  ],
  providers: [CaesarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

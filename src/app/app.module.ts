import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CaesarComponent } from './caesar/caesar.component';
import { EntryPipe } from './entry.pipe';

import { CaesarService } from './caesar.service';

@NgModule({
  declarations: [
    AppComponent,
    CaesarComponent,
    EntryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CaesarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

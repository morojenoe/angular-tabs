import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabsModule } from './tabs/tabs.module';
import { TestComponent } from './test.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, TabsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }

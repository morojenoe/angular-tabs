import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabTitleComponent } from './tab-title/tab-title.component';
import { TabContentComponent } from './tab-content/tab-content.component';

const declarations = [TabsComponent, TabComponent, TabTitleComponent, TabContentComponent];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations],
  imports: [CommonModule]
})
export class TabsModule { }

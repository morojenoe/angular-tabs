import { Component, QueryList, ContentChildren, AfterViewChecked, TemplateRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterViewChecked {
  readonly indexToSelectByDefault = 0;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  activeTabIndex = this.indexToSelectByDefault;

  constructor() { }

  ngAfterViewChecked() {
    if (this.tabs.length > 0 && this.activeTabIndex >= this.tabs.length) {
      setTimeout(() => this.activeTabIndex = this.indexToSelectByDefault, 0);
    }
  }

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }

  activeTabContent(): TemplateRef<TabComponent> {
    if (this.tabs && this.activeTabIndex < this.tabs.length) {
      const tab = this.tabs.find((_item: TabComponent, index: number) => index === this.activeTabIndex);return tab.tabContent.contentTemplate;
    }
    return null;
  }
}

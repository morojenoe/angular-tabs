import { Component, ContentChild } from '@angular/core';
import { TabContentComponent } from '../tab-content/tab-content.component';
import { TabTitleComponent } from '../tab-title/tab-title.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @ContentChild(TabContentComponent, { static: true })
  tabContent: TabContentComponent;

  @ContentChild(TabTitleComponent, { static: true })
  tabTitle: TabTitleComponent;
}

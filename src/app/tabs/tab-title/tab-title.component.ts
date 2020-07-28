import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.css']
})
export class TabTitleComponent {
  @ViewChild('title', { read: TemplateRef, static: true })
  title: TemplateRef<TabTitleComponent>;
}

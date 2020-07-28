import { Component, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent {
  @ContentChild(TemplateRef, { read: TemplateRef, static: true })
  contentTemplate: TemplateRef<any>;
}

import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import Divinity from '../models/divinity';
import { DivinityChildrenComponent } from './divinity-children/divinity-children.component';

@Component({
  selector: 'app-divinity',
  templateUrl: './divinity.component.html',
  styleUrls: ['./divinity.component.scss']
})
export class DivinityComponent implements OnInit {

  @Input() divinity: Divinity;
  @Input() children: Divinity[];
  @Output() diviSelectedListener = new EventEmitter<{event: String, divinity: Divinity}>();
  
  constructor() {}

  ngOnInit() {}
  
  onSelectDivinity(event) {
    this.diviSelectedListener.emit({event: event.event, divinity: event.divinity});
  }

  imagePath(): string {
    return Divinity.acquireImagePathSmall(this.divinity.name);
  }

}

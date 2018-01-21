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
  @Output() eventListener = new EventEmitter<{event: String, data: Object}>();
  @ViewChild('app-divinity-children') divinityChildren: DivinityChildrenComponent;

  constructor() { }

  ngOnInit() {
  }
  
  onSelectDivinity($event) {
    this.eventListener.emit({event: 'selected', data: $event.name});
  }

}

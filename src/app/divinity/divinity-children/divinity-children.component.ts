import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import Divinity from '../../models/divinity';

@Component({
  selector: 'app-divinity-children',
  template: './divinity-children.component.html',
  styleUrls: ['./divinity-children.component.scss']
})
export class DivinityChildrenComponent implements OnInit {

  @Output() divinityEvent = new EventEmitter<{event: String, data: Object}>();
  @Input() divinity: Divinity;
  imagePath: Object;

  constructor() { }

  ngOnInit() {
    this.imagePath = Divinity.acquireImagePath(this.divinity.name);
  }

  onDivinitySelected() {
    this.divinityEvent.emit({event: 'click', data: this.divinity});
  }

  tooltip() {
    return this.divinity && this.divinity.name || 'Loading';
  }

}

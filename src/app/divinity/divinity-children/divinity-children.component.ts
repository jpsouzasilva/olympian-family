import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import Divinity from '../../models/divinity';

@Component({
  selector: 'app-divinity-children',
  templateUrl: './divinity-children.component.html',
  styleUrls: ['./divinity-children.component.scss']
})
export class DivinityChildrenComponent implements OnInit {

  @Output() selectedEvent = new EventEmitter<{event: String, divinity: Divinity}>();
  @Input() divinity: Divinity;

  constructor() { }

  ngOnInit() {}

  imagePath(): string {
    return Divinity.acquireImagePathSmall(this.divinity.name);
  }

  onDivinitySelected() {
    this.selectedEvent.emit({event: 'click', divinity: this.divinity});
  }

  tooltip(): string {
    return this.divinity ? this.divinity.name : 'Loading';
  }

}

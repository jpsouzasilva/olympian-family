import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import Divinity from '../../models/divinity';

@Component({
  selector: 'app-divinity-children',
  templateUrl: './divinity-children.component.html',
  styleUrls: ['./divinity-children.component.scss']
})
export class DivinityChildrenComponent implements OnInit {

  @Output() divinityEvent = new EventEmitter<{event: String, data: Object}>();
  @Input() divinity: Divinity;
  
  private _imagePath: string;

  constructor() { }

  ngOnInit() {}

  get imagePath(): string {
    if (!!this._imagePath) {
      this._imagePath = Divinity.acquireImagePathSmall(this.divinity.name);
    }
    return this._imagePath;
  }

  onDivinitySelected() {
    this.divinityEvent.emit({event: 'click', data: this.divinity});
  }

  tooltip(): string {
    return this.divinity ? this.divinity.name : 'Loading';
  }

}

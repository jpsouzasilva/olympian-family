import { Component, OnInit } from '@angular/core';
import Divinity from '../models/divinity';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  divinity: Divinity;
  divinityBanner: String;

  constructor() { }

  ngOnInit() {
  }

  onDivinityWasSelected(divinity: Divinity) {
    this.divinity = divinity;
    this.divinityBanner = Divinity.acquireImagePathBig(divinity.name);
  }

}

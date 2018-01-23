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
  loading = true;

  constructor() { }

  ngOnInit() {
  }

  onDivinityWasSelected(divinity: Divinity) {
    this.loading = true;
    this.divinity = divinity;
    this.divinityBanner = Divinity.acquireImagePathBig(divinity.name);
    this.loading = false;
  }

}

import { Component, OnInit, ViewChild, ChangeDetectorRef, NgZone } from '@angular/core';
import Divinity from './models/divinity';
import { DivinitiesService } from './divinities.service';
import { HeaderComponent } from './header/header.component';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterContentInit {
  
  divinityList: Divinity[];
  divinityTree: Divinity[];

  @ViewChild('header') appHeader: HeaderComponent;

  constructor(private _ngZone: NgZone, private divinitiesService: DivinitiesService) {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.divinitiesService.getDivinities().subscribe(
      (divinities) => {
        this._ngZone.run(() => {
          this.divinityList = divinities;
          const primordialGod = divinities.filter(god => god.name === 'Gaia');
          if (primordialGod.length !== 0) {
            this.divinityTree = [primordialGod[0]];
          } else {
            this.divinityTree = [divinities[1]];
          }
          this.appHeader.onDivinityWasSelected(divinities[0]);
        });
      },
      (error) => this.onDivinitiesListError(error)
    );
  }

  onDivinitySelected(eventData) {
    this.divinityTree = [eventData.divinity].concat(this.divinityTree);
    this.appHeader.onDivinityWasSelected(this.divinityTree.length > 0 ? this.divinityTree[0] : undefined);
    document.querySelector('.divinity-component').scrollIntoView({
      behavior: 'smooth'
    });
  }

  filterDivinityChildren(divinity: Divinity) {
    return this.divinityList.filter((god) => god.father === divinity.name || god.mother === divinity.name);
  }

  onDivinitiesListError(reason) {
    console.log(reason);
  }

  onDivinitySelectedError(reason) {
    console.log(reason);
  }

}

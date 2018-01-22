import { Component, OnInit, ViewChild } from '@angular/core';
import Divinity from './models/divinity';
import { DivinitiesService } from './divinities.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  
  divinityList: Divinity[];
  selectedDivinityTree: Divinity[];
  @ViewChild('header') appHeader: HeaderComponent;
  @ViewChild('divinitiesList') divinitiesList: HTMLDivElement;

  constructor(private divinitiesService: DivinitiesService) {}

  ngOnInit() {
    this.divinitiesService.getDivinities().subscribe(
      (divinities) => {
        this.divinityList = divinities;
        const primordialGod = divinities.filter(god => god.name === 'Gaia');
        if (primordialGod.length !== 0) {
          this.selectedDivinityTree = [primordialGod[0]];
        } else {
          this.selectedDivinityTree = [divinities[1]];
        }
        this.appHeader.onDivinityWasSelected(divinities[0]);
        console.log(this.selectedDivinityTree, this.filterDivinityChildren(this.selectedDivinityTree[0]));
      },
      (error) => this.onDivinitiesListError(error)
    );
  }

  onDivinitySelected(event) {
    const divinityTree = this.selectedDivinityTree;
    const length = divinityTree.length;
    this.appHeader.onDivinityWasSelected(length > 0 ?
      divinityTree[divinityTree.length - 1] :
      undefined
    );
  }

  filterDivinityChildren(divinity: Divinity) {
    return this.divinityList.filter(
      (god) => god.father === divinity.name || god.mother === divinity.name
    );
  }

  onDivinitiesListError(reason) {
    console.log(reason);
  }

  onDivinitySelectedError(reason) {
    console.log(reason);
  }

}

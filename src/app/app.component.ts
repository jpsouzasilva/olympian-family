import { Component, OnInit, ViewChild } from '@angular/core';
import Divinity from './models/divinity';
import { DivinitiesService } from './divinities.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  divinityList: Divinity[];
  selectedDivinityTree: Divinity[];

  @ViewChild('app-header') appHeader: HeaderComponent;

  constructor(private divinitiesService: DivinitiesService) {}

  ngOnInit() {
    this.divinitiesService.getDivinities().subscribe(
      (divinities) => {
        this.divinityList = divinities;
        this.selectedDivinityTree = divinities.filter(god => god.name === 'Gaia');
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
  }

}

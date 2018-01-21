import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DivinitiesService } from './divinities.service';
import { DivinityComponent } from './divinity/divinity.component';
import { HeaderComponent } from './header/header.component';
import { DivinityChildrenComponent } from './divinity/divinity-children/divinity-children.component';

@NgModule({
  declarations: [
    AppComponent,
    DivinityComponent,
    HeaderComponent,
    DivinityChildrenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DivinitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

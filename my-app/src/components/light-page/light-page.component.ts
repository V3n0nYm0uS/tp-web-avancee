import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { LightComponent } from '../light/light.component';
import { LightService } from '../../services/light.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-light-page',
  standalone: true,
  imports: [NgClass, NgFor, LightComponent, FormsModule],
  templateUrl: './light-page.component.html',
  styleUrl: './light-page.component.css'
})
export class LightPageComponent {

  light = {
    name: '',
    color: ''
  };

  constructor(protected lightService: LightService){}

  handleTrigger(id: number){
    this.lightService.removeLight(id);
  }

  switchLight(light: any){
    console.log("switch : " + light);
    this.lightService.toggleLight(light);
  }

}

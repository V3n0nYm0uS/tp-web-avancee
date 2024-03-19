import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light',
  standalone: true,
  imports: [NgClass],
  templateUrl: './light.component.html',
  styleUrl: './light.component.css'
})
export class LightComponent {

  @Input()
  light: any = {
    toggled: false,
    title: "UNKNOWN"
  }

  switchLight(lightObject: any):void {
    lightObject.toggled = !lightObject.toggled;
  }
}

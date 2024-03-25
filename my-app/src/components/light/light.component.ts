import { NgClass, NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-light',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './light.component.html',
  styleUrl: './light.component.css'
})
export class LightComponent {

  @Input()
  light: any = {
    toggled: false,
    title: "UNKNOWN",
    color: "#ffffff"
  }

  @Output("trigger")
  trigger: EventEmitter<any> = new EventEmitter<any>();

  @Output("toggled")
  toggled: EventEmitter<any> = new EventEmitter<any>();

  switchLight() {
    this.toggled.emit()
  }

  launchTrigger(){
    this.trigger.emit();
  }
}

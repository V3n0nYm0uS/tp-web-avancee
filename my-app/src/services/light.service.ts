import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightService {

  private lightArray: any[] = [];


  constructor(private httpClient: HttpClient) {
    this.refreshLights();
  }

  refreshLights(){
    this.httpClient.get("/api/lights").subscribe((lights: any) => {
      this.lightArray = lights;
    })
  }

  getAllLight(): any[] {
    return this.lightArray;
  }

  addLight(title: String, color: String){
    let light = {
      toggled: false,
      title: title,
      color: color
    };

    this.httpClient.post("/api/lights", light).subscribe(() => {
      this.refreshLights();
    })
  }

  removeLight(id: number){
    this.lightArray = this.lightArray.filter(light => light.id != id)
    this.httpClient.delete("/api/lights/" + id).subscribe(() => {
      this.refreshLights();
    })
  }

  toggleLight(light: any){
    light.toggled = !light.toggled;
    this.httpClient.post("/api/lights", light).subscribe((lightReceived: any) => {
      light = lightReceived;
    })
  }

}

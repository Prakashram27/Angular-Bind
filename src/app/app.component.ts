import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'data-bind';

  serverElements = [{type:'server',serverName:'TestServer',serverContent:"TestContent"}];
  constructor(){
  }

  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      serverName: serverData.serverName,
      serverContent: serverData.serverContent,
    });
  }
  onblueprintAdded(blueprintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      serverName: blueprintData.serverName,
      serverContent: blueprintData.serverContent,
    });
   }
 }
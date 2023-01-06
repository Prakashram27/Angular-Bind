import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('srCreated') serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName = '';
  newServerContent = '';
  


  onAddServerName() {
    // this.serverElements.push({
    //   type: 'server',
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent,
    // });
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
  onAddServerContent() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent,
    // });
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
}

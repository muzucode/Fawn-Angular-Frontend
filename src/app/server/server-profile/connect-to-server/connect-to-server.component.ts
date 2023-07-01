import { Component } from '@angular/core';
import { ServersService } from 'src/app/servers.service';
import { Server } from 'src/types/server';

@Component({
  selector: 'app-connect-to-server',
  templateUrl: './connect-to-server.component.html',
  styleUrls: ['./connect-to-server.component.scss']
})
export class ConnectToServerComponent {
  constructor(
    private serversService: ServersService
  ){}

  currentServer!: Server

  ngOnInit() {
    this.serversService.currentServer.subscribe(server => {
      this.currentServer = server
    })
  }

  copyCommand()
}

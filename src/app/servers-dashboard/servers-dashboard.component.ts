import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServersService } from '../servers.service';
import { Observable } from 'rxjs';
import { Server } from 'src/types/server';

@Component({
  selector: 'app-servers-dashboard',
  templateUrl: './servers-dashboard.component.html',
  styleUrls: ['./servers-dashboard.component.scss']
})
export class ServersDashboardComponent {
  
  constructor(
    private serversService: ServersService
    
    ) {
    
  }
  
  servers: any
  currentServer!: Server

  isCurrentServer(server: Server) {
    return server.Id === this.currentServer.Id
  }

  setCurrentServer(server: Server) {
    this.serversService.setCurrentServer(server)
  }
  
  ngOnInit() {
    this.serversService.fetchServers().subscribe(data => {
      this.servers = data
    })
    this.serversService.currentServer.subscribe(server => {
      // console.log(server)
      this.currentServer = server
    })
  }

}

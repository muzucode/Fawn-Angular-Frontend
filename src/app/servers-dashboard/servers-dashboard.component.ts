import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServersService } from '../servers.service';
import { Observable, Subscription, map, take } from 'rxjs';
import { Server } from 'src/types/server';
import { TEST_SERVER } from 'src/dummies/dummies';

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
  
  servers!: Server[]
  currentServer!: Server
  currentServerSubscription!: Subscription

  isCurrentServer(server: Server) {
    return this.currentServer.Id === server.Id
  }

  setCurrentServer(server: Server) {
    this.currentServer = server
    this.serversService.setCurrentServer(server)
  }
  
  ngOnInit() {

    this.currentServerSubscription = this.serversService.currentServer
    .pipe(take(1))
    .subscribe({
      next: (server: Server) => {
        this.currentServer = server
        console.log(this.currentServer)
      }
    })

    // Fetch servers once
    this.serversService.fetchServers()

    // Subscribe to the fetched servers
    this.serversService.servers.subscribe(servers => {
      this.servers = servers
    })
  }

}

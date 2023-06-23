import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServersService } from '../servers.service';
import { Observable, Subscription, map, take } from 'rxjs';
import { Server } from 'src/types/server';
import { TEST_SERVER } from 'src/dummies/dummies';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers-dashboard',
  templateUrl: './servers-dashboard.component.html',
  styleUrls: ['./servers-dashboard.component.scss']
})
export class ServersDashboardComponent {
  
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    ) {
    
  }
  
  servers!: Server[]
  currentServer!: Server

  isCurrentServer(server: Server) {
    return this.currentServer.Id === server.Id
  }
  
  ngOnInit() {

    // Subscribe to currentServer
    this.serversService.currentServer
    .pipe(take(1))
    .subscribe({
      next: (server: Server) => {
        this.currentServer = server
      }
    })

    // Subscribe to the fetched servers
    this.serversService.servers.subscribe(servers => {
      this.servers = this.route.snapshot.data['servers']
    })
    
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { ServersService } from '../servers.service';
import { Observable, Subscription, map, take } from 'rxjs';
import { Server } from 'src/types/server';
import { TEST_SERVER } from 'src/dummies/dummies';
import { ActivatedRoute } from '@angular/router';
import { DistributionItem } from './types/DistributionItem';

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

  // Modal
  isAddServerModalVisible: boolean = false

  // Modal - Distribution Items
  distributionItems: DistributionItem[] = [
    {
      name: 'MySQL',
      availableVersions: ['22.0', '22.1', '22.2']
    },    
    {
      name: 'MariaDB',
      availableVersions: ['19.0', '19.1', '19.2']
    },    
    {
      name: 'PostgreSQL',
      availableVersions: ['18.0', '18.1', '18.2']
    },    
    {
      name: 'MongoDB',
      availableVersions: ['5.0', '5.1', '7.0']
    },
  ]
  selectedDistributionItem: DistributionItem = this.distributionItems[0] // default option
  selectedDistributionItemVersion: string = this.selectedDistributionItem.availableVersions[0] ?? ''

  
  servers!: Server[]
  currentServer!: Server
  showSpinner: boolean = true

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

  toggleAddDatabaseModal() {
    this.isAddServerModalVisible = !this.isAddServerModalVisible
  }
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    this.isAddServerModalVisible = false;
  }

}

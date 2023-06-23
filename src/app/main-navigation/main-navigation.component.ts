import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { EnvironmentsService } from '../environments.service';
import { ServersService } from '../servers.service';
import { Server } from 'src/types/server';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent {
  constructor(
    private environmentsService: EnvironmentsService,
    private serversService: ServersService,
  ){

  }
  environments: any
  currentEnvironment: any
  currentServer!: Server
  currentServerSubscription!: Subscription
  isServerPageActive: boolean = false

  updateCurrentEnvironment(environment: any) {
    this.environmentsService.currentEnvironment = environment
  }

  getRouterLink(routePath: string): string {
    return `/servers/${this.currentServer.Id}/${routePath}`;
  }

  ngOnInit  () {
    this.currentServerSubscription = this.serversService.currentServer.subscribe({
      next: (server: Server) => {
        this.currentServer = server
      }
    })
    this.environmentsService.fetchEnvironments().subscribe(res => {
      this.environments = res
    })
    this.environmentsService.currentEnvironment.subscribe(env => {
      this.currentEnvironment = env
    })

    this.serversService.isServerPageActive.subscribe(status => {
      this.isServerPageActive = status
    })
  }
}
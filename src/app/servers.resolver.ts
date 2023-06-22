import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { ServersService } from './servers.service';
import { Server } from 'src/types/server';

@Injectable({
  providedIn: 'root'
})
export class ServersResolver implements Resolve<boolean> {
  constructor(  
    private serversService: ServersService
  ) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server[]> {
    let resolvedServers: Server[] = [];
    this.serversService.fetchServers()
    this.serversService.servers.subscribe(servers => {
      resolvedServers = servers
    })
    return from(resolvedServers);
  }
}

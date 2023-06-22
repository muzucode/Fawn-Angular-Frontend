import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ServersService } from './servers.service';
import { Server } from '../types/server';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServersResolver implements Resolve<Server[]> {
  constructor(private serversService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Server[]> {
    return this.serversService.fetchServers();
  }
}

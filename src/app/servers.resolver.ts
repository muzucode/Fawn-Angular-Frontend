import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ServersService } from './servers.service';
import { Server } from '../types/server';
import { Observable, take, tap } from 'rxjs';


export const ServersResolver: ResolveFn<Server[]> = 
  (route: ActivatedRouteSnapshot): Observable<Server[]> => {
    console.log('Entered ServersResolver')
    const serversService: ServersService = inject(ServersService)

    return serversService.fetchServers().pipe(take(1));
  }

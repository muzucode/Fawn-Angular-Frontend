import { Injectable, inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ServersService } from './servers.service';
import { Server } from '../types/server';
import { Observable } from 'rxjs';


export const ServersResolver: ResolveFn<Server[]> = 
  (route: ActivatedRouteSnapshot): Observable<Server[]> => {
    console.log('Entered ServersResolver')
    return inject(ServersService).fetchServers();
  }

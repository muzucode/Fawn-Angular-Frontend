import { inject } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn,
} from '@angular/router';
import { ServersService } from './servers.service';
import { Server } from 'src/types/server';
import { take, tap } from 'rxjs';

export const ServerResolver: ResolveFn<Server> =
    (
      route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      console.log('Entered ServerResolver')
      const serversService: ServersService = inject(ServersService)
      return serversService.fetchServer(route.paramMap.get('serverId')!)
      .pipe(
        take(1),
        tap(server => serversService.setCurrentServer(server)) // set the current server if navigated to this route
      );
    };